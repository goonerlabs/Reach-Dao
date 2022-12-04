#lang ll
parts {
  "Deployer" = interact {
    getProposal = IT_Val Object({"deadline": UInt, "description": Bytes(180), "id": UInt, "isProposal": Bool, "link": Bytes(150), "owner": Address, "title": Bytes(25)})},
  "Voters_claimRefund" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),Struct([['"didRefund"', Bool], ['"balance"', UInt]])] Null},
  "Voters_contribute" = interact {
    in = IT_Fun [] Tuple(UInt),
    out = IT_Fun [Tuple(UInt),UInt] Null},
  "Voters_contributed" = interact {
    in = IT_Fun [] Tuple(UInt, UInt),
    out = IT_Fun [Tuple(UInt, UInt),Null] Null},
  "Voters_created" = interact {
    in = IT_Fun [] Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])),
    out = IT_Fun [Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])),Null] Null},
  "Voters_downvote" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),UInt] Null},
  "Voters_downvoted" = interact {
    in = IT_Fun [] Tuple(UInt, UInt),
    out = IT_Fun [Tuple(UInt, UInt),Null] Null},
  "Voters_projectDown" = interact {
    in = IT_Fun [] Tuple(UInt),
    out = IT_Fun [Tuple(UInt),Null] Null},
  "Voters_timedOut" = interact {
    in = IT_Fun [] Tuple(UInt, UInt),
    out = IT_Fun [Tuple(UInt, UInt),Null] Null},
  "Voters_upvote" = interact {
    in = IT_Fun [] Tuple(),
    out = IT_Fun [Tuple(),UInt] Null},
  "Voters_upvoted" = interact {
    in = IT_Fun [] Tuple(UInt, UInt),
    out = IT_Fun [Tuple(UInt, UInt),Null] Null}};

// maps
{
  map0 = Address,
  map1 = UInt,
  map2 = Null}
// initialization

{
  }
{
  }
{
  Just "Voters" = {
    claimRefund = ("Voters_claimRefund", IT_Fun [] Struct([['"didRefund"', Bool], ['"balance"', UInt]])),
    contribute = ("Voters_contribute", IT_Fun [UInt] UInt),
    contributed = ("Voters_contributed", IT_Fun [UInt,UInt] Null),
    created = ("Voters_created", IT_Fun [Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])] Null),
    downvote = ("Voters_downvote", IT_Fun [] UInt),
    downvoted = ("Voters_downvoted", IT_Fun [UInt,UInt] Null),
    projectDown = ("Voters_projectDown", IT_Fun [UInt] Null),
    timedOut = ("Voters_timedOut", IT_Fun [UInt,UInt] Null),
    upvote = ("Voters_upvote", IT_Fun [] UInt),
    upvoted = ("Voters_upvoted", IT_Fun [UInt,UInt] Null)}}
{
  Voters_claimRefund = Nothing,
  Voters_contribute = Nothing,
  Voters_contributed = Nothing,
  Voters_created = Nothing,
  Voters_downvote = Nothing,
  Voters_downvoted = Nothing,
  Voters_projectDown = Nothing,
  Voters_timedOut = Nothing,
  Voters_upvote = Nothing,
  Voters_upvoted = Nothing}
{
  Nothing = {
    create = [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt],
    created = [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt],
    log = [Bytes(20), UInt],
    that = [Bytes(20), UInt, UInt]}}
const tokInfos/814 : Array(Tuple(UInt, UInt, Bool), 0)* = array(Tuple(UInt, UInt, Bool), []);
const upVotes/818 : UInt* = impossible(Cannot inspect value from `forall`);
const downVotes/819 : UInt* = impossible(Cannot inspect value from `forall`);
const v821 : Bool! = downVotes/819 > upVotes/818;
const v822 : Bool! = upVotes/818 == downVotes/819;
const v1848 : UInt! = (v822 ? 0 : 1);
const x/820 : UInt* = (v821 ? 0 : v1848);
const v823 : Bool! = 0 <= x/820;
const v824 : Bool! = x/820 < 2;
const v825 : Bool! = (v823 ? v824 : false);
claim(CT_Assert)(v825, Nothing);
only(Left "Deployer") {
  const v826 : Object({"deadline": UInt, "description": Bytes(180), "id": UInt, "isProposal": Bool, "link": Bytes(150), "owner": Address, "title": Bytes(25)})* = "Deployer".interact.getProposal;
  const v827 : UInt! = v826.deadline;
  const v828 : Bytes(180)! = v826.description;
  const v829 : UInt! = v826.id;
  const v830 : Bool! = v826.isProposal;
  const v831 : Bytes(150)! = v826.link;
  const v832 : Address! = v826.owner;
  const v833 : Bytes(25)! = v826.title;
   };
publish(@0)
  .case("Deployer").send({
    isClass = False,
    msg = [v828, v830],
    pay = [0, ],
    when = true})
  .recv({
    didSend = didPublish/58 : Bool,
    from = Deployer/843 : Address,
    msg = [description/844 : Bytes(180), isProposal/845 : Bool],
    secs = thisConsensusSecs/847 : UInt,
    time = thisConsensusTime/846 : UInt}){
    timeOrder(>, Nothing, thisConsensusTime/846 : UInt);
    timeOrder(>=, Nothing, thisConsensusSecs/847 : UInt);
    checkPay(0, None);
    if isProposal/845 then {
      commit();
      publish(@thisConsensusTime/846)
        .case("Deployer").send({
          isClass = False,
          msg = [v833, v831, v832, v829, v827],
          pay = [0, ],
          when = true})
        .recv({
          didSend = didPublish/68 : Bool,
          from = Deployer/848 : Address,
          msg = [title/849 : Bytes(25), link/850 : Bytes(150), owner/851 : Address, id/852 : UInt, deadline/853 : UInt],
          secs = thisConsensusSecs/855 : UInt,
          time = thisConsensusTime/854 : UInt}){
          timeOrder(>, Just thisConsensusTime/846, thisConsensusTime/854 : UInt);
          timeOrder(>=, Just thisConsensusSecs/847, thisConsensusSecs/855 : UInt);
          checkPay(0, None);
          const v856 : Bool! = Deployer/843 == Deployer/848;
          claim(CT_Require)(v856, Just "sender correct");
          const v857 : Contract! = getContract()();
          const thisConsensusTime/858 : UInt! = thisConsensusTime/854;
          emitLog(event(Nothing, created))(id/852, title/849, link/850, description/844, owner/851, v857, thisConsensusTime/858 );
          const value/860 : UInt* = thisConsensusTime/846 + deadline/853;
          loopvar {
            amtTotal/862 : UInt = 0,
            downvote/863 : UInt = 0,
            upvote/864 : UInt = 0,
            thisConsensusTime/865 : UInt = thisConsensusTime/854,
            lastConsensusTime/866 : UInt = thisConsensusTime/846,
            baseWaitTime/867 : UInt = thisConsensusTime/846,
            thisConsensusSecs/868 : UInt = thisConsensusSecs/855,
            lastConsensusSecs/869 : UInt = thisConsensusSecs/847,
            baseWaitSecs/870 : UInt = thisConsensusSecs/847,
            tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokInfos/814,
            netBalance/872 : UInt = 0};
          invariant{
            [invariant(const v874 : Bool! = netBalance/872 == amtTotal/862;
            
            return v874;, Nothing)] }
          while{
            const v876 : Bool! = value/860 > lastConsensusTime/866;
            
            return v876; }
          {
            commit();
            only(Left "Voters_upvote") {
              const _/884 : Tuple()* = protect<Tuple()>("Voters_upvote".interact.in());
              const v888 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_upvote0_90 _/884>;
               };
            only(Left "Voters_downvote") {
              const _/892 : Tuple()* = protect<Tuple()>("Voters_downvote".interact.in());
              const v896 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_downvote0_90 _/892>;
               };
            only(Left "Voters_contribute") {
              const .api78.dom/900 : Tuple(UInt)* = protect<Tuple(UInt)>("Voters_contribute".interact.in());
              const v901 : UInt* = .api78.dom/900[0];
              const v903 : Bool! = v901 > 0;
              claim(CT_Assume)(v903, Just "Contribution too small");
              const v910 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_contribute0_90 .api78.dom/900>;
               };
            publish(@thisConsensusTime/865)
              .timeout(Left value/860, {
                publish(@thisConsensusTime/865)
                  .case("Deployer").send({
                    isClass = False,
                    msg = [],
                    pay = [0, ],
                    when = true})
                  .recv({
                    didSend = didPublish/336 : Bool,
                    from = Deployer/1087 : Address,
                    msg = [],
                    secs = thisConsensusSecs/1089 : UInt,
                    time = thisConsensusTime/1088 : UInt}){
                    timeOrder(>, Just thisConsensusTime/865, thisConsensusTime/1088 : UInt);
                    timeOrder(>=, Just thisConsensusSecs/868, thisConsensusSecs/1089 : UInt);
                    checkPay(0, None);
                    const v1090 : Bool! = Deployer/843 == Deployer/1087;
                    claim(CT_Require)(v1090, Just "sender correct");
                    const v1092 : Bool! = downvote/863 > upvote/864;
                    const v1093 : Bool! = upvote/864 == downvote/863;
                    const v1849 : UInt! = (v1093 ? 0 : 1);
                    const v1091 : UInt! = (v1092 ? 0 : v1849);
                    const v1094 : Bool! = v1091 == 1;
                    if v1094 then {
                      const v1095 : Bytes(20)! = "passed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                      emitLog(event(Nothing, log))(v1095, id/852 );
                      const v1098 : Bool! = netBalance/872 <= netBalance/872;
                      claim(CT_Assert)(v1098, Just "balance sufficient for transfer");
                      const v1100 : UInt* = netBalance/872 - netBalance/872;
                      transfer.(netBalance/872, None).to(owner/851);
                      {
                        amtTotal/862 : UInt = v1100,
                        downvote/863 : UInt = downvote/863,
                        upvote/864 : UInt = upvote/864,
                        thisConsensusTime/865 : UInt = thisConsensusTime/1088,
                        lastConsensusTime/866 : UInt = thisConsensusTime/865,
                        baseWaitTime/867 : UInt = value/860,
                        thisConsensusSecs/868 : UInt = thisConsensusSecs/1089,
                        lastConsensusSecs/869 : UInt = thisConsensusSecs/868,
                        baseWaitSecs/870 : UInt = thisConsensusSecs/868,
                        tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                        netBalance/872 : UInt = v1100}
                      continue; }
                    else {
                      const v1105 : Bool! = netBalance/872 > 0;
                      if v1105 then {
                        const v1106 : Bytes(20)! = "failed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                        emitLog(event(Nothing, log))(v1106, id/852 );
                        loopvar {
                          currentBalance/1108 : UInt = netBalance/872,
                          thisConsensusTime/1109 : UInt = thisConsensusTime/1088,
                          lastConsensusTime/1110 : UInt = thisConsensusTime/865,
                          baseWaitTime/1111 : UInt = value/860,
                          thisConsensusSecs/1112 : UInt = thisConsensusSecs/1089,
                          lastConsensusSecs/1113 : UInt = thisConsensusSecs/868,
                          baseWaitSecs/1114 : UInt = thisConsensusSecs/868,
                          tokenInfos/1115 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                          netBalance/1116 : UInt = netBalance/872};
                        invariant{
                          [invariant(const v1118 : Bool! = netBalance/1116 == currentBalance/1108;
                          
                          return v1118;, Nothing)] }
                        while{
                          const v1119 : Bool! = currentBalance/1108 > 0;
                          
                          return v1119; }
                        {
                          commit();
                          only(Left "Voters_claimRefund") {
                            const _/1122 : Tuple()* = protect<Tuple()>("Voters_claimRefund".interact.in());
                             };
                          publish(@thisConsensusTime/1109)
                            .case("Voters_claimRefund").send({
                              isClass = True,
                              msg = [_/1122],
                              pay = [0, ],
                              when = true})
                            .recv({
                              didSend = didPublish/384 : Bool,
                              from = v/1125 : Address,
                              msg = [.fork359.msg/1126 : Tuple()],
                              secs = thisConsensusSecs/1128 : UInt,
                              time = thisConsensusTime/1127 : UInt}){
                              timeOrder(>, Just thisConsensusTime/1109, thisConsensusTime/1127 : UInt);
                              timeOrder(>=, Just thisConsensusSecs/1112, thisConsensusSecs/1128 : UInt);
                              checkPay(0, None);
                              setApiDetails("Voters_claimRefund", [Tuple()], None, AIC_SpreadArg );
                              const v/1130 : Data({"None": Null, "Some": UInt})! = map1[v/1125];
                              let amountTransferable/1131 : UInt;
                              local switch (v/1130 : Data({"None": Null, "Some": UInt})) {
                                case None as v/1132 : Null/False: {
                                  amountTransferable/1131 : UInt = 0;
                                   }
                                case Some as v/1133 : UInt/True: {
                                  amountTransferable/1131 : UInt = v/1133;
                                   } }
                              const v1135 : Bool! = netBalance/1116 >= amountTransferable/1131;
                              const m/1136 : Data({"None": Null, "Some": Null})! = map2[v/1125];
                              const v1137 : UInt! = dataTag(m/1136);
                              const v1138 : Bool! = v1137 == 1;
                              const v1139 : Bool! = (v1135 ? v1138 : false);
                              if v1139 then {
                                const v/1140 : Data({"None": Null, "Some": Address})! = map0[v/1125];
                                let v1141 : Address;
                                local switch (v/1140 : Data({"None": Null, "Some": Address})) {
                                  case None as v/1142 : Null/False: {
                                    v1141 : Address = Deployer/843;
                                     }
                                  case Some as v/1143 : Address/True: {
                                    v1141 : Address = v/1143;
                                     } }
                                const v1145 : Bool! = amountTransferable/1131 <= netBalance/1116;
                                claim(CT_Assert)(v1145, Just "balance sufficient for transfer");
                                const v1147 : UInt! = netBalance/1116 - amountTransferable/1131;
                                transfer.(amountTransferable/1131, None).to(v1141);
                                delete map2[v/1125];
                                const v1149 : Bytes(20)! = "refundPassed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                                emitLog(event(Nothing, log))(v1149, id/852 );
                                const currentBal/1150 : UInt* = currentBalance/1108 - amountTransferable/1131;
                                const v1151 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, true ), (balance, currentBal/1150 ) ];
                                const .api351.rngl/1152 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])* = emitLog(api("Voters_claimRefund"))(v1151 );
                                only(Left "Voters_claimRefund") {
                                  local(Just v1154 : Null) if didPublish/384 then {
                                    protect<Null>("Voters_claimRefund".interact.out(.fork359.msg/1126, .api351.rngl/1152 ));
                                     }
                                  else {
                                     };
                                   };
                                {
                                  currentBalance/1108 : UInt = currentBal/1150,
                                  thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
                                  lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
                                  baseWaitTime/1111 : UInt = thisConsensusTime/1109,
                                  thisConsensusSecs/1112 : UInt = thisConsensusSecs/1128,
                                  lastConsensusSecs/1113 : UInt = thisConsensusSecs/1112,
                                  baseWaitSecs/1114 : UInt = thisConsensusSecs/1112,
                                  tokenInfos/1115 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1115,
                                  netBalance/1116 : UInt = v1147}
                                continue; }
                              else {
                                const v1160 : Bytes(20)! = "refundFailed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                                emitLog(event(Nothing, log))(v1160, id/852 );
                                const v1161 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, false ), (balance, currentBalance/1108 ) ];
                                const .api351.rngl/1162 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])* = emitLog(api("Voters_claimRefund"))(v1161 );
                                only(Left "Voters_claimRefund") {
                                  local(Just v1164 : Null) if didPublish/384 then {
                                    protect<Null>("Voters_claimRefund".interact.out(.fork359.msg/1126, .api351.rngl/1162 ));
                                     }
                                  else {
                                     };
                                   };
                                {
                                  currentBalance/1108 : UInt = currentBalance/1108,
                                  thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
                                  lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
                                  baseWaitTime/1111 : UInt = thisConsensusTime/1109,
                                  thisConsensusSecs/1112 : UInt = thisConsensusSecs/1128,
                                  lastConsensusSecs/1113 : UInt = thisConsensusSecs/1112,
                                  baseWaitSecs/1114 : UInt = thisConsensusSecs/1112,
                                  tokenInfos/1115 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1115,
                                  netBalance/1116 : UInt = netBalance/1116}
                                continue; }; }
                             }
                        const v1170 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                        emitLog(event(Nothing, log))(v1170, id/852 );
                        {
                          amtTotal/862 : UInt = netBalance/1116,
                          downvote/863 : UInt = downvote/863,
                          upvote/864 : UInt = upvote/864,
                          thisConsensusTime/865 : UInt = thisConsensusTime/1109,
                          lastConsensusTime/866 : UInt = lastConsensusTime/1110,
                          baseWaitTime/867 : UInt = baseWaitTime/1111,
                          thisConsensusSecs/868 : UInt = thisConsensusSecs/1112,
                          lastConsensusSecs/869 : UInt = lastConsensusSecs/1113,
                          baseWaitSecs/870 : UInt = baseWaitSecs/1114,
                          tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1115,
                          netBalance/872 : UInt = netBalance/1116}
                        continue; }
                      else {
                        const v1174 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                        emitLog(event(Nothing, log))(v1174, id/852 );
                        {
                          amtTotal/862 : UInt = netBalance/872,
                          downvote/863 : UInt = downvote/863,
                          upvote/864 : UInt = upvote/864,
                          thisConsensusTime/865 : UInt = thisConsensusTime/1088,
                          lastConsensusTime/866 : UInt = thisConsensusTime/865,
                          baseWaitTime/867 : UInt = value/860,
                          thisConsensusSecs/868 : UInt = thisConsensusSecs/1089,
                          lastConsensusSecs/869 : UInt = thisConsensusSecs/868,
                          baseWaitSecs/870 : UInt = thisConsensusSecs/868,
                          tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                          netBalance/872 : UInt = netBalance/872}
                        continue; }; }; }
                   } )
              .case("Voters_contribute").send({
                isClass = True,
                msg = [v910],
                pay = [v901, ],
                when = true})
              .case("Voters_downvote").send({
                isClass = True,
                msg = [v896],
                pay = [0, ],
                when = true})
              .case("Voters_upvote").send({
                isClass = True,
                msg = [v888],
                pay = [0, ],
                when = true})
              .recv({
                didSend = didPublish/252 : Bool,
                from = v/918 : Address,
                msg = [.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
                secs = thisConsensusSecs/921 : UInt,
                time = thisConsensusTime/920 : UInt}){
                timeOrder(>, Just thisConsensusTime/865, thisConsensusTime/920 : UInt);
                timeOrder(>=, Just thisConsensusSecs/868, thisConsensusSecs/921 : UInt);
                switch (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) {
                  case Voters_contribute0_90 as data_id/922 : Tuple(UInt)/True: {
                    const payment/927 : UInt* = data_id/922[0];
                    const v928 : Bool! = payment/927 > 0;
                    claim(CT_Require)(v928, Just "Contribution too small");
                    const v933 : UInt* = netBalance/872 + payment/927;
                    checkPay(payment/927, None);
                    setApiDetails("Voters_contribute", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_contribute0_90, AIC_Case );
                    const netBalance/939 : UInt! = v933;
                    const .api78.rngl/940 : UInt* = emitLog(api("Voters_contribute"))(netBalance/939 );
                    only(Left "Voters_contribute") {
                      local(Just v942 : Null) if didPublish/252 then {
                        protect<Null>("Voters_contribute".interact.out(data_id/922, .api78.rngl/940 ));
                         }
                      else {
                         };
                       };
                    const m/946 : Data({"None": Null, "Some": Null})! = map2[v/918];
                    const v947 : UInt! = dataTag(m/946);
                    const v948 : Bool! = v947 == 1;
                    if v948 then {
                      const v/949 : Data({"None": Null, "Some": UInt})! = map1[v/918];
                      let v950 : UInt;
                      local switch (v/949 : Data({"None": Null, "Some": UInt})) {
                        case None as v/951 : Null/False: {
                          v950 : UInt = 0;
                           }
                        case Some as v/952 : UInt/True: {
                          v950 : UInt = v/952;
                           } }
                      const v953 : UInt! = v950 + payment/927;
                      map1[v/918] = v953;
                      const amtTotal/954 : UInt! = amtTotal/862 + payment/927;
                      {
                        amtTotal/862 : UInt = amtTotal/954,
                        downvote/863 : UInt = downvote/863,
                        upvote/864 : UInt = upvote/864,
                        thisConsensusTime/865 : UInt = thisConsensusTime/920,
                        lastConsensusTime/866 : UInt = thisConsensusTime/865,
                        baseWaitTime/867 : UInt = value/860,
                        thisConsensusSecs/868 : UInt = thisConsensusSecs/921,
                        lastConsensusSecs/869 : UInt = thisConsensusSecs/868,
                        baseWaitSecs/870 : UInt = thisConsensusSecs/868,
                        tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                        netBalance/872 : UInt = v933}
                      continue; }
                    else {
                      map0[v/918] = v/918;
                      map1[v/918] = payment/927;
                      map2[v/918] = null;
                      const amtTotal/957 : UInt! = amtTotal/862 + payment/927;
                      {
                        amtTotal/862 : UInt = amtTotal/957,
                        downvote/863 : UInt = downvote/863,
                        upvote/864 : UInt = upvote/864,
                        thisConsensusTime/865 : UInt = thisConsensusTime/920,
                        lastConsensusTime/866 : UInt = thisConsensusTime/865,
                        baseWaitTime/867 : UInt = value/860,
                        thisConsensusSecs/868 : UInt = thisConsensusSecs/921,
                        lastConsensusSecs/869 : UInt = thisConsensusSecs/868,
                        baseWaitSecs/870 : UInt = thisConsensusSecs/868,
                        tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                        netBalance/872 : UInt = v933}
                      continue; }; }
                  case Voters_downvote0_90 as data_id/977 : Tuple()/True: {
                    checkPay(0, None);
                    setApiDetails("Voters_downvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_downvote0_90, AIC_Case );
                    const .api77.rng/1015 : UInt* = downvote/863 + 1;
                    const .api77.rngl/1016 : UInt* = emitLog(api("Voters_downvote"))(.api77.rng/1015 );
                    only(Left "Voters_downvote") {
                      local(Just v1018 : Null) if didPublish/252 then {
                        protect<Null>("Voters_downvote".interact.out(data_id/977, .api77.rngl/1016 ));
                         }
                      else {
                         };
                       };
                    {
                      amtTotal/862 : UInt = amtTotal/862,
                      downvote/863 : UInt = .api77.rng/1015,
                      upvote/864 : UInt = upvote/864,
                      thisConsensusTime/865 : UInt = thisConsensusTime/920,
                      lastConsensusTime/866 : UInt = thisConsensusTime/865,
                      baseWaitTime/867 : UInt = value/860,
                      thisConsensusSecs/868 : UInt = thisConsensusSecs/921,
                      lastConsensusSecs/869 : UInt = thisConsensusSecs/868,
                      baseWaitSecs/870 : UInt = thisConsensusSecs/868,
                      tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                      netBalance/872 : UInt = netBalance/872}
                    continue; }
                  case Voters_upvote0_90 as data_id/1032 : Tuple()/True: {
                    checkPay(0, None);
                    setApiDetails("Voters_upvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_upvote0_90, AIC_Case );
                    const .api76.rng/1079 : UInt* = upvote/864 + 1;
                    const .api76.rngl/1080 : UInt* = emitLog(api("Voters_upvote"))(.api76.rng/1079 );
                    only(Left "Voters_upvote") {
                      local(Just v1082 : Null) if didPublish/252 then {
                        protect<Null>("Voters_upvote".interact.out(data_id/1032, .api76.rngl/1080 ));
                         }
                      else {
                         };
                       };
                    {
                      amtTotal/862 : UInt = amtTotal/862,
                      downvote/863 : UInt = downvote/863,
                      upvote/864 : UInt = .api76.rng/1079,
                      thisConsensusTime/865 : UInt = thisConsensusTime/920,
                      lastConsensusTime/866 : UInt = thisConsensusTime/865,
                      baseWaitTime/867 : UInt = value/860,
                      thisConsensusSecs/868 : UInt = thisConsensusSecs/921,
                      lastConsensusSecs/869 : UInt = thisConsensusSecs/868,
                      baseWaitSecs/870 : UInt = thisConsensusSecs/868,
                      tokenInfos/871 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/871,
                      netBalance/872 : UInt = netBalance/872}
                    continue; } } }
               }
          const v1180 : Bool! = netBalance/872 <= netBalance/872;
          claim(CT_Assert)(v1180, Just "balance sufficient for transfer");
          const v1182 : UInt! = netBalance/872 - netBalance/872;
          transfer.(netBalance/872, None).to(Deployer/843);
          const v1184 : Bool! = 0 == v1182;
          claim(CT_Assert)(v1184, Just "balance zero at application exit");
          commit();
          exit(); }
         }
    else {
      loopvar {
        keepGoing/1185 : Bool = true,
        thisConsensusTime/1186 : UInt = thisConsensusTime/846,
        thisConsensusSecs/1187 : UInt = thisConsensusSecs/847,
        tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokInfos/814,
        netBalance/1189 : UInt = 0};
      invariant{
        [invariant(const v1191 : Bool! = netBalance/1189 == 0;
        
        return v1191;, Nothing)] }
      while{
        
        return keepGoing/1185; }
      {
        commit();
        only(Left "Voters_created") {
          const _/1194 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))* = protect<Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))>("Voters_created".interact.in());
          const v1215 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_created0_454 _/1194>;
           };
        only(Left "Voters_upvoted") {
          const _/1219 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_upvoted".interact.in());
          const v1229 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_upvoted0_454 _/1219>;
           };
        only(Left "Voters_downvoted") {
          const _/1233 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_downvoted".interact.in());
          const v1243 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_downvoted0_454 _/1233>;
           };
        only(Left "Voters_contributed") {
          const _/1247 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_contributed".interact.in());
          const v1257 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_contributed0_454 _/1247>;
           };
        only(Left "Voters_timedOut") {
          const _/1261 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_timedOut".interact.in());
          const v1271 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_timedOut0_454 _/1261>;
           };
        only(Left "Voters_projectDown") {
          const _/1275 : Tuple(UInt)* = protect<Tuple(UInt)>("Voters_projectDown".interact.in());
          const v1282 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_projectDown0_454 _/1275>;
           };
        publish(@thisConsensusTime/1186)
          .case("Voters_contributed").send({
            isClass = True,
            msg = [v1257],
            pay = [0, ],
            when = true})
          .case("Voters_created").send({
            isClass = True,
            msg = [v1215],
            pay = [0, ],
            when = true})
          .case("Voters_downvoted").send({
            isClass = True,
            msg = [v1243],
            pay = [0, ],
            when = true})
          .case("Voters_projectDown").send({
            isClass = True,
            msg = [v1282],
            pay = [0, ],
            when = true})
          .case("Voters_timedOut").send({
            isClass = True,
            msg = [v1271],
            pay = [0, ],
            when = true})
          .case("Voters_upvoted").send({
            isClass = True,
            msg = [v1229],
            pay = [0, ],
            when = true})
          .recv({
            didSend = didPublish/690 : Bool,
            from = v1290 : Address,
            msg = [.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
            secs = thisConsensusSecs/1293 : UInt,
            time = thisConsensusTime/1292 : UInt}){
            timeOrder(>, Just thisConsensusTime/1186, thisConsensusTime/1292 : UInt);
            timeOrder(>=, Just thisConsensusSecs/1187, thisConsensusSecs/1293 : UInt);
            switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
              case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/True: {
                checkPay(0, None);
                setApiDetails("Voters_contributed", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_contributed0_454, AIC_Case );
                const num1/1305 : UInt! = data_id/1294[0];
                const num2/1306 : UInt! = data_id/1294[1];
                const v1307 : Null! = null;
                const .api446.rngl/1308 : Null* = emitLog(api("Voters_contributed"))(v1307 );
                only(Left "Voters_contributed") {
                  local(Just v1310 : Null) if didPublish/690 then {
                    protect<Null>("Voters_contributed".interact.out(data_id/1294, .api446.rngl/1308 ));
                     }
                  else {
                     };
                   };
                const v1315 : Bytes(20)! = "contributed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1315, num1/1305, num2/1306 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292,
                  thisConsensusSecs/1187 : UInt = thisConsensusSecs/1293,
                  tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1188,
                  netBalance/1189 : UInt = netBalance/1189}
                continue; }
              case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/True: {
                checkPay(0, None);
                setApiDetails("Voters_created", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_created0_454, AIC_Case );
                const obj/1409 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])* = data_id/1386[0];
                const v1410 : Null! = null;
                const .api443.rngl/1411 : Null* = emitLog(api("Voters_created"))(v1410 );
                only(Left "Voters_created") {
                  local(Just v1413 : Null) if didPublish/690 then {
                    protect<Null>("Voters_created".interact.out(data_id/1386, .api443.rngl/1411 ));
                     }
                  else {
                     };
                   };
                const v1424 : UInt! = obj/1409.id;
                const v1425 : Bytes(25)! = obj/1409.title;
                const v1426 : Bytes(150)! = obj/1409.link;
                const v1427 : Bytes(180)! = obj/1409.description;
                const v1428 : Address! = obj/1409.owner;
                const v1429 : Contract! = obj/1409.contractInfo;
                const v1430 : UInt! = obj/1409.blockCreated;
                emitLog(event(Nothing, create))(v1424, v1425, v1426, v1427, v1428, v1429, v1430 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292,
                  thisConsensusSecs/1187 : UInt = thisConsensusSecs/1293,
                  tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1188,
                  netBalance/1189 : UInt = netBalance/1189}
                continue; }
              case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/True: {
                checkPay(0, None);
                setApiDetails("Voters_downvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_downvoted0_454, AIC_Case );
                const num1/1524 : UInt! = data_id/1478[0];
                const num2/1525 : UInt! = data_id/1478[1];
                const v1526 : Null! = null;
                const .api445.rngl/1527 : Null* = emitLog(api("Voters_downvoted"))(v1526 );
                only(Left "Voters_downvoted") {
                  local(Just v1529 : Null) if didPublish/690 then {
                    protect<Null>("Voters_downvoted".interact.out(data_id/1478, .api445.rngl/1527 ));
                     }
                  else {
                     };
                   };
                const v1534 : Bytes(20)! = "downvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1534, num1/1524, num2/1525 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292,
                  thisConsensusSecs/1187 : UInt = thisConsensusSecs/1293,
                  tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1188,
                  netBalance/1189 : UInt = netBalance/1189}
                continue; }
              case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/True: {
                checkPay(0, None);
                setApiDetails("Voters_projectDown", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_projectDown0_454, AIC_Case );
                const num1/1628 : UInt! = data_id/1570[0];
                const v1629 : Null! = null;
                const .api448.rngl/1630 : Null* = emitLog(api("Voters_projectDown"))(v1629 );
                only(Left "Voters_projectDown") {
                  local(Just v1632 : Null) if didPublish/690 then {
                    protect<Null>("Voters_projectDown".interact.out(data_id/1570, .api448.rngl/1630 ));
                     }
                  else {
                     };
                   };
                const v1636 : Bytes(20)! = "projectDown\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                const v1637 : UInt! = 0;
                emitLog(event(Nothing, that))(v1636, num1/1628, v1637 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292,
                  thisConsensusSecs/1187 : UInt = thisConsensusSecs/1293,
                  tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1188,
                  netBalance/1189 : UInt = netBalance/1189}
                continue; }
              case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/True: {
                checkPay(0, None);
                setApiDetails("Voters_timedOut", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_timedOut0_454, AIC_Case );
                const num1/1731 : UInt! = data_id/1662[0];
                const num2/1732 : UInt! = data_id/1662[1];
                const v1733 : Null! = null;
                const .api447.rngl/1734 : Null* = emitLog(api("Voters_timedOut"))(v1733 );
                only(Left "Voters_timedOut") {
                  local(Just v1736 : Null) if didPublish/690 then {
                    protect<Null>("Voters_timedOut".interact.out(data_id/1662, .api447.rngl/1734 ));
                     }
                  else {
                     };
                   };
                const v1741 : Bytes(20)! = "timedOut\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1741, num1/1731, num2/1732 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292,
                  thisConsensusSecs/1187 : UInt = thisConsensusSecs/1293,
                  tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1188,
                  netBalance/1189 : UInt = netBalance/1189}
                continue; }
              case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/True: {
                checkPay(0, None);
                setApiDetails("Voters_upvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_upvoted0_454, AIC_Case );
                const num1/1835 : UInt! = data_id/1754[0];
                const num2/1836 : UInt! = data_id/1754[1];
                const v1837 : Null! = null;
                const .api444.rngl/1838 : Null* = emitLog(api("Voters_upvoted"))(v1837 );
                only(Left "Voters_upvoted") {
                  local(Just v1840 : Null) if didPublish/690 then {
                    protect<Null>("Voters_upvoted".interact.out(data_id/1754, .api444.rngl/1838 ));
                     }
                  else {
                     };
                   };
                const v1845 : Bytes(20)! = "upvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1845, num1/1835, num2/1836 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292,
                  thisConsensusSecs/1187 : UInt = thisConsensusSecs/1293,
                  tokenInfos/1188 : Array(Tuple(UInt, UInt, Bool), 0) = tokenInfos/1188,
                  netBalance/1189 : UInt = netBalance/1189}
                continue; } } }
           }
      const v1847 : Bool! = 0 == netBalance/1189;
      claim(CT_Assert)(v1847, Just "balance zero at application exit");
      commit();
      exit(); }; }
  