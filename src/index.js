import * as AppViews from "./components/App";
import * as Attacher from "./components/Attacher";
import * as Deployer from "./components/Deployer";
import * as ProposalViews from "./components/Proposals";
import * as Bounties from "./components/Bounties";
import * as InfoCenter from "./components/InfoCenter";
import RenderViews, { renderDOM } from "./layouts/renderViews";
import ReachContextProvider from "./context/ReachContext";
// import styles from "./styles/Global.module.css";
import { fmtClasses } from "./hooks";

const Views = {
  ...AppViews,
  ...Attacher,
  ...Deployer,
  ...ProposalViews,
  ...Bounties,
  ...InfoCenter,
};

function App() {
  return (
    <div className={fmtClasses()}>
      <RenderViews {...Views} />
    </div>
  );
}

renderDOM(
  <ReachContextProvider>
    <App />
  </ReachContextProvider>
);

export default App;
