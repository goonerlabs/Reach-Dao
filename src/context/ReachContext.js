import React, { useState } from "react";
import {
  loadStdlib
} from "@reach-sh/stdlib";
import { Helmet } from "react-helmet";
import * as backend from "../contracts/build/index.main.mjs";
import { fmtClasses } from "../hooks/fmtClasses";
import styles from "../styles/MainWrapper.module.css";
import styled from "../styles/SubWrapper.module.css";
import style from "../styles/Shared.module.css";
import { Preloader } from "../components/Preloader";
import icon from "../assets/images/interlinked.jpg";
import { Alert } from "../components/Alert";

const reach = loadStdlib({...process.env, REACH_CONNECTOR_MODE: 'ETH', REACH_NO_WARN: 'Y'});

reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: {
      ETH_NODE_URI: 'https://matic-mubai.chainstacklabs.com',
    },
  })
);

let [upVotePromise, downVotePromise, contribPromise, createPromise] = [
  {},
  {},
  {},
  {},
];
const { standardUnit } = reach;
const deadline = { ETH: 1000, ALGO: 100000, CFX: 70000 }[reach.connector];

export const ReachContext = React.createContext();

const ReachContextProvider = ({ children }) => {
  const [defaults] = useState({
    standardUnit,
  });
  const [views, setViews] = useState({
    view: "ConnectAccount",
    wrapper: "AppWrapper",
  });

  const [user, setUser] = useState({
    account: "",
    balance: "",
  });

  const [contract, setContract] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [bounties, setBounties] = useState([]);

  const [[showPreloader, setShowPreloader], [processing, setProcessing]] = [
    useState(false),
    useState(false),
  ];

  const [
    [message, setMessage],
    [alertResolve, setAlertResolve],
    [showAlert, setShowAlert],
  ] = [useState(""), useState({}), useState(false)];

  /**
   * It should return the bare string value without null characters
   * @param {String} byte A string padded with null values
   * @returns {String} A bare string without null characters
   */
  const noneNull = (byte) => {
    let string = "",
      i = 0;
    for (i; i < byte.length; i++) {
      if (String(byte[i]) !== String("\u0000")) {
        string += byte[i];
      }
    }
    return string;
  };

  const alertThis = (message) => {
    const sleep = (milliseconds) =>
      new Promise((resolve) => {
        setAlertResolve((lastResolve) => ({ resolve }));
        return setTimeout(
          resolve,
          milliseconds / 1000 > 10 ? 10000 : milliseconds / 1000 < 3 ? 3000 : 0
        );
      });
    setMessage((lastMessage) => message);
    setShowAlert((lastState) => true);
    sleep(message.length * 300).then(() => {
      setShowAlert((lastState) => false);
    });
  };

  const hideAlert = () => {
    alertResolve.resolve();
  };

  const sleep = (milSecs) =>
    new Promise((resolve) => setTimeout(resolve, milSecs));

  const connectAccount = async () => {
    const account = await reach.getDefaultAccount();
    account.setGasLimit(7920027)		
    try {
      setViews({ view: "Attaching", wrapper: "AttacherWrapper" });
      const ctc = account.contract(backend, JSON.parse(process.env.REACT_APP_ADMIN_CONTRACT_INFO));
      setContractInstance(ctc);
      setContract({ ctcInfoStr: process.env.REACT_APP_ADMIN_CONTRACT_INFO });
      ctc.events.create.monitor(createProposal);
      ctc.events.that.monitor(acknowledge);
      setViews({ view: "InfoCenter", wrapper: "InfoWrapper" });
    } catch (error) {
      console.log({ error });
      setViews({ view: "DeployerOrAttacher", wrapper: "AppWrapper" });
    }
    setUser({
      account,
      balance: async () => {
        const balAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balAtomic, 4);
        return balance;
      },
    });
  };

  const selectAttacher = () => {
    setViews({ view: "Attach", wrapper: "AttacherWrapper" });
  };

  const selectDeployer = () => {
    setViews({ view: "Deploy", wrapper: "DeployerWrapper" });
  };

  const attach = async (ctcInfoStr) => {
    try {
      setViews({ view: "Attaching", wrapper: "AttacherWrapper" });
      const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
      setContractInstance(ctc);
      setContract({ ctcInfoStr });
      ctc.events.create.monitor(createProposal);
      ctc.events.that.monitor(acknowledge);
      setViews({ view: "InfoCenter", wrapper: "InfoWrapper" });
    } catch (error) {
      console.log({ error });
    }
  };

  const reevaluate = async ({
    id,
    blockCreated,
    upVotes,
    downVotes,
    contribs,
  }) => {
    console.log("Beginning re-evaluation...");
    try {
      const currentConsensusTime = await reach.getNetworkTime();
      if (blockCreated + deadline < currentConsensusTime) {
        if (upVotes > downVotes) {
          const xXProposals = proposals.map((el) => {
            if (Number(el.id) === Number(parseInt(id))) {
              el["timedOut"] = true;
              el["didPass"] = true;
            }
            return el;
          });
          setProposals((proposals) => [...xXProposals]);
          const cBounties = bounties;
          const nBounty = proposals.filter(
            (el) => Number(el.id) === Number(parseInt(id))
          )[0];
          cBounties.push(nBounty);
          setBounties((bounties) => [...cBounties]);
          // await contractInstance.apis.Voters.timedOut(id, 1)
          alertThis(
            "Sorry, this proposal seems to have missed becoming a bounty, you can now find it on the Bounties List"
          );
        } else if (contribs > 0) {
          const nProposals = proposals;
          const fProposals = nProposals.map((el) => {
            if (Number(el.id) === Number(parseInt(id))) {
              el["timedOut"] = true;
              el["didPass"] = false;
            }
            return el;
          });
          setProposals((proposals) => [...fProposals]);
          // await contractInstance.apis.Voters.timedOut(id, 0)
          alertThis(
            "Sorry, this proposal already failed with funds, you can now find it on the Timed Out Proposals list"
          );
        } else {
          const yProposals = proposals;
          const remainingProposals = yProposals.filter((el) => {
            if (Number(el.id) === Number(parseInt(id))) {
              el["isDown"] = true;
            }
            return Number(el.id) !== Number(parseInt(id));
          });
          setProposals((proposals) => [...remainingProposals]);
          // await contractInstance.apis.Voters.projectDown(id)
          alertThis(
            "Sorry, this appears to be a rogue proposal, and has been taken down"
          );
        }
      } else {
        alertThis(
          "Evaluation failed, please contact Reach DAO technical team on Discord",
          false
        );
      }
    } catch (error) {
      alertThis("Unable to reevaluate proposal", false);
    }
  };

  const makeProposal = async (proposal) => {
    const proposalSetup = async () => {
      try {
        const ctc = user.account.contract(backend);
        ctc.p.Deployer({
          getProposal: {
            ...proposal,
            deadline: deadline,
            isProposal: true,
          },
        });
        ctc.events.log.monitor(timeoutProposal);
        ctc.events.created.monitor(updateProposals);
      } catch (error) {
        createPromise.reject(error);
      }
    };
    await new Promise(async (resolve, reject) => {
      createPromise["resolve"] = resolve;
      createPromise["reject"] = reject;
      setShowPreloader(true);
      setProcessing(true);
      await proposalSetup();
    })
      .then(() => {
        alertThis("Success!");
      })
      .catch((message) => {
        console.log(message);
      });
    setViews({ view: "Proposals", wrapper: "ProposalWrapper" });
    setShowPreloader(false);
  };

  const connectAndUpvote = async (id, ctcInfoStr) => {
    await new Promise(async (resolve, reject) => {
      upVotePromise["resolve"] = resolve;
      upVotePromise["reject"] = reject;
      setShowPreloader(true);
      setProcessing(true);
      try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        await ctc.apis.Voters.upvote()
          .then(async (upVotes) => {
            await contractInstance.apis.Voters.upvoted(id, parseInt(upVotes))
              .then(() => {
                upVotePromise.resolve();
              })
              .catch(() => {
                upVotePromise.reject();
              });
          })
          .catch(() => {
            upVotePromise.reject();
          });
      } catch (error) {
        console.log({ error });
        upVotePromise.reject();
      }
    })
      .then(() => {
        alertThis("Success!");
      })
      .catch(async () => {
        await reevaluate(proposals.filter((el) => el?.id === id)[0]);
      });
    setShowPreloader(false);
  };

  const connectAndDownvote = async (id, ctcInfoStr) => {
    await new Promise(async (resolve, reject) => {
      downVotePromise["resolve"] = resolve;
      downVotePromise["reject"] = reject;
      setShowPreloader(true);
      setProcessing(true);
      try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        await ctc.apis.Voters.downvote()
          .then(async (downVotes) => {
            await contractInstance.apis.Voters.downvoted(
              id,
              parseInt(downVotes)
            )
              .then(() => {
                downVotePromise.resolve();
              })
              .catch(() => {
                downVotePromise.reject();
              });
          })
          .catch(() => {
            downVotePromise.reject();
          });
      } catch (error) {
        console.log({ error });
        downVotePromise.reject();
      }
    })
      .then(() => {
        alertThis("Success!");
      })
      .catch(async () => {
        await reevaluate(proposals.filter((el) => el?.id === id)[0]);
      });
    setShowPreloader(false);
  };

  const makeContribution = async (amount, id, ctcInfoStr) => {
    await new Promise(async (resolve, reject) => {
      contribPromise["resolve"] = resolve;
      contribPromise["reject"] = reject;
      setShowPreloader(true);
      setProcessing(true);
      try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        await ctc.apis.Voters.contribute(reach.parseCurrency(amount))
          .then(async (contribs) => {
            await contractInstance.apis.Voters.contributed(
              id,
              parseInt(contribs)
            )
              .then(() => {
                contribPromise.resolve();
              })
              .catch(() => {
                contribPromise.reject();
              });
          })
          .catch(() => {
            contribPromise.reject();
          });
      } catch (error) {
        console.log({ error });
        contribPromise.reject();
      }
    })
      .then(() => {
        alertThis("Success!");
      })
      .catch(async () => {
        await reevaluate(proposals.filter((el) => el?.id === id)[0]);
      });
    setShowPreloader(false);
  };

  const connectAndClaimRefund = async (id, ctcInfoStr) => {
    const claimPromise = {};
    await new Promise(async (resolve, reject) => {
      claimPromise["resolve"] = resolve;
      claimPromise["reject"] = reject;
      setShowPreloader(true);
      setProcessing(true);
      try {
        const ctc = user.account.contract(backend, JSON.parse(ctcInfoStr));
        await ctc.apis.Voters.claimRefund()
          .then((result) => {
            if (result.didRefund) {
              const conProposals = proposals.map((el) => {
                if (Number(el.id) === Number(id)) {
                  el["contribs"] = reach.formatCurrency(result.balance, 4);
                }
                return el;
              });
              setProposals((proposals) => [...conProposals]);
              claimPromise.resolve("Refund Successful!");
            } else {
              claimPromise.reject(
                "It seems you don't have funds to claim, did you contribute to this proposal?"
              );
            }
          })
          .catch(() => {
            claimPromise.reject();
          });
      } catch (error) {
        alertThis("Failed to lay claims");
        console.log({ error });
        claimPromise.reject();
      }
    })
      .then((message) => {
        alertThis(message);
      })
      .catch((message) => {
        alertThis(message);
      });
    setShowPreloader(false);
  };

  const updateProposals = async ({ when, what }) => {
    try {
      await contractInstance.apis.Voters.created({
        id: parseInt(what[0]),
        title: noneNull(what[1]),
        link: noneNull(what[2]),
        description: noneNull(what[3]),
        owner: noneNull(what[4]),
        contractInfo: what[5],
        blockCreated: parseInt(what[6]),
      });
      console.log(what[5]);
    } catch (e) {
      console.log(e);
      createPromise?.reject &&
        createPromise.reject("Unable to send proposal to Reach DAO");
    }
  };

  const createProposal = ({ when, what }) => {
    try {
      const currentProposals = proposals;
      currentProposals.push({
        id: parseInt(what[0]),
        title: noneNull(what[1]),
        link: noneNull(what[2]),
        description: noneNull(what[3]),
        owner: noneNull(what[4]),
        contract: JSON.stringify(what[5]),
        blockCreated: parseInt(what[6]),
        upVotes: 0,
        downVotes: 0,
        contribs: 0,
        timedOut: false,
        didPass: false,
        isDown: false,
      });
      setProposals((proposals) => [...currentProposals]);
      createPromise?.resolve && createPromise.resolve();
      console.log("Success");
      console.log(JSON.stringify(what[5]), parseInt(what[6]));
    } catch (e) {
      createPromise?.reject &&
        createPromise.reject(
          "Proposal has being created, but unable to update proposal list"
        );
    }
  };

  const acknowledge = async ({ when, what }) => {
    const ifState = (x) => x.padEnd(20, "\u0000");
    switch (what[0]) {
      case ifState("upvoted"):
        const upProposals = proposals.map((el) => {
          if (Number(el.id) === Number(parseInt(what[1]))) {
            el["upVotes"] = parseInt(what[2]);
          }
          return el;
        });
        setProposals((proposals) => [...upProposals]);
        upVotePromise?.resolve && upVotePromise.resolve();
        break;
      case ifState("downvoted"):
        const downProposals = proposals.map((el) => {
          if (Number(el.id) === Number(parseInt(what[1]))) {
            el["downVotes"] = parseInt(what[2]);
          }
          return el;
        });
        setProposals((proposals) => [...downProposals]);
        downVotePromise?.resolve && downVotePromise.resolve();
        break;
      case ifState("contributed"):
        const conProposals = proposals.map((el) => {
          if (Number(el.id) === Number(parseInt(what[1]))) {
            el["contribs"] = reach.formatCurrency(what[2], 4);
          }
          return el;
        });
        setProposals((proposals) => [...conProposals]);
        contribPromise?.resolve && contribPromise.resolve();
        break;
      case ifState("timedOut"):
        // Take it to the Bounties view, drop from the proposal view
        if (parseInt(what[2])) {
          const xXProposals = proposals.map((el) => {
            if (Number(el.id) === Number(parseInt(what[1]))) {
              el["timedOut"] = true;
              el["didPass"] = true;
            }
            return el;
          });
          setProposals((proposals) => [...xXProposals]);
          const cBounties = bounties;
          const nBounty = proposals.filter(
            (el) => Number(el.id) === Number(parseInt(what[1]))
          )[0];
          cBounties.push(nBounty);
          setBounties((bounties) => [...cBounties]);
          // Take it the list of timed out proposals and remove it from the main list of proposals
        } else {
          const nProposals = proposals;
          const fProposals = nProposals.map((el) => {
            if (Number(el.id) === Number(parseInt(what[1]))) {
              el["timedOut"] = true;
              el["didPass"] = false;
            }
            return el;
          });
          setProposals((proposals) => [...fProposals]);
        }
        break;
      case ifState("projectDown"):
        const yProposals = proposals;
        const remainingProposals = yProposals.filter((el) => {
          if (Number(el.id) === Number(parseInt(what[1]))) {
            el["isDown"] = true;
          }
          return Number(el.id) !== Number(parseInt(what[1]));
        });
        setProposals((proposals) => [...remainingProposals]);
        break;
      default:
        break;
    }
  };

  const timeoutProposal = async ({ when, what }) => {
    const ifState = (x) => x.padEnd(20, "\u0000");
    switch (what[0]) {
      case ifState("passed"):
        await contractInstance.apis.Voters.timedOut(parseInt(what[1]), 1);
        break;
      case ifState("failed"):
        await contractInstance.apis.Voters.timedOut(parseInt(what[1]), 0);
        break;
      case ifState("down"):
        await contractInstance.apis.Voters.projectDown(parseInt(what[1]));
        break;
      default:
        break;
    }
  };

  const deploy = async () => {
    const deployPromise = {};
    await new Promise(async (resolve, reject) => {
      deployPromise["resolve"] = resolve;
      deployPromise["reject"] = reject;
      setShowPreloader(true);
      setProcessing(true);
      try {
        const ctc = user.account.contract(backend);
        setContractInstance(ctc);
        console.log("Got here");
        const interact = {
          getProposal: {
            id: 1,
            title: "AroTable",
            link: "https://github.com/Apostrophe-Corp/Reach-DAO/blob/main/README.md",
            description: `A hub for Web3 Developers`,
            owner: user.account.getAddress(),
            deadline: 0,
            isProposal: false,
          },
        };
        ctc.p.Deployer(interact);
        await ctc.getInfo().then((infoStr) => {
          const ctcInfoStr = JSON.stringify(infoStr, null, 2);
          ctc.events.create.monitor(createProposal);
          ctc.events.that.monitor(acknowledge);
          setContract({ ctcInfoStr });
          console.log(ctcInfoStr);
          setViews({ view: "Deployed", wrapper: "DeployerWrapper" });
          deployPromise.resolve();
        });
      } catch (error) {
        deployPromise.reject(error);
      }
    }).catch((error) => {
      console.log("Unable to deploy", { error });
      setViews({ view: "Deploy", wrapper: "DeployerWrapper" });
    });
    setShowPreloader(false);
  };

  const ReachContextValues = {
    ...defaults,
    sleep,

    // Views
    views,
    setViews,

    // Misc
    contract,

    // Accounts
    user,
    connectAccount,
    deploy,

    // Participants
    selectDeployer,
    selectAttacher,

    // Deployer

    // timeoutProposal

    // Attacher
    attach,
    makeProposal,
    standardUnit,

    // Preloader States
    showPreloader,
    setShowPreloader,
    processing,
    setProcessing,

    // Alert States
    message,
    setMessage,
    showAlert,
    hideAlert,
    alertThis,

    // API
    // connectAndContribute,
    setContract,
    makeContribution,
    connectAndUpvote,
    connectAndDownvote,
    connectAndClaimRefund,

    // Proposals
    proposals,
    setProposals,

    // Bounties
    bounties,
    setBounties,
  };

  return (
    <ReachContext.Provider value={ReachContextValues}>
      <Helmet>
        <link rel="icon" href={icon} />
        <link rel="apple-touch-icon" href={icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Reach DAO | The new Hub</title>
      </Helmet>
      <div
        className={fmtClasses(
          styles.header,
          !contract?.ctcInfoStr ? styles.itemsCenter : ""
        )}
      >
        <div className={fmtClasses(styles.brandContainer)}>
          <h1>Reach DAO</h1>
        </div>
        <div className={fmtClasses(styles.navContainer)}>
          {contract?.ctcInfoStr && (
            <ul className={fmtClasses(styles.navList, styles.flat)}>
              <li
                className={fmtClasses(
                  views.view === "InfoCenter"
                    ? styles.navItemActive
                    : styles.navItem
                )}
                onClick={() => {
                  setViews({ view: "InfoCenter", wrapper: "InfoWrapper" });
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Info Center
              </li>
              <li
                className={fmtClasses(
                  views.view === "Proposals"
                    ? styles.navItemActive
                    : styles.navItem
                )}
                onClick={() => {
                  setViews({ view: "Proposals", wrapper: "ProposalWrapper" });
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Proposals
              </li>
              <li
                className={fmtClasses(
                  views.view === "Bounties"
                    ? styles.navItemActive
                    : styles.navItem
                )}
                onClick={() => {
                  setViews({ view: "Bounties", wrapper: "BountyWrapper" });
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Bounties
              </li>
            </ul>
          )}
        </div>
      </div>
      {(views.view === "InfoCenter" ||
        views.view === "Proposals" ||
        views.view === "Bounties") && (
        <div
          className={fmtClasses(
            styled.welcomeDiv,
            views.view === "InfoCenter"
              ? styled.infoWelcome
              : views.view === "Proposals"
              ? styled.proposalWelcome
              : views.view === "Bounties"
              ? styled.bountyWelcome
              : ""
          )}
        >
          <div className={fmtClasses(styled.welcomeInner)}>
            <h1 className={fmtClasses(styled.welcomeText)}>
              {views.view === "InfoCenter"
                ? `Welcome!`
                : views.view === "Proposals"
                ? `Get the Chance`
                : views.view === "Bounties"
                ? `Lets Hack`
                : ""}
            </h1>
            <h2 className={fmtClasses(styled.subWelcomeText)}>
              {views.view === "InfoCenter"
                ? `To the new Hub.`
                : views.view === "Proposals"
                ? `To bring your ideas to life!`
                : views.view === "Bounties"
                ? `And claim the bounty...`
                : ""}
            </h2>
          </div>
        </div>
      )}
      {processing && <Preloader />}
      <Alert />
      <div className={fmtClasses(styles.childrenContainer)} id="root">
        {children}
      </div>
      <div
        className={fmtClasses(
          style.widthMax,
          style.flex,
          style.itemsCenter,
          style.tCenter,
          styles.footer
        )}
      >
        <span
          className={fmtClasses(
            style.widthMax,
            style.dInlineBlock,
            style.tCenter
          )}
        >
          &copy; Apostrophe Corp, 2022.
        </span>
      </div>
    </ReachContext.Provider>
  );
};

export default ReachContextProvider;
