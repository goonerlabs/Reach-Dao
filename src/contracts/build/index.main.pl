#lang pl
EP {
  apis = {
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
      upvoted = ("Voters_upvoted", IT_Fun [UInt,UInt] Null)}},
  exports = {
    },
  init = // maps
  {
    map0 = Address,
    map1 = UInt,
    map2 = Null}
  // initialization
  ,
  m = {
    ("Deployer", Nothing) = interact {
      getProposal = IT_Val Object({"deadline": UInt, "description": Bytes(180), "id": UInt, "isProposal": Bool, "link": Bytes(150), "owner": Address, "title": Bytes(25)})};
    only(Right False) {
      const v826 : Object({"deadline": UInt, "description": Bytes(180), "id": UInt, "isProposal": Bool, "link": Bytes(150), "owner": Address, "title": Bytes(25)})* = "Deployer".interact.getProposal;
      const v827 : UInt! = v826.deadline;
      const v828 : Bytes(180)! = v826.description;
      const v829 : UInt! = v826.id;
      const v830 : Bool! = v826.isProposal;
      const v831 : Bytes(150)! = v826.link;
      const v832 : Address! = v826.owner;
      const v833 : Bytes(25)! = v826.title;
       };
    send({
      amt = [0, ],
      as = (v828, v830 ),
      saved = (),
      soloSend = True,
      when = true,
      which = 0})
    recv({
      didSendv = didPublish/58 : Bool,
      from = Deployer/843 : Address,
      lct = Just 0,
      msg = (description/844 : Bytes(180), isProposal/845 : Bool ),
      out = (),
      prev = 0,
      secsv = thisConsensusSecs/847 : UInt,
      timev = thisConsensusTime/846 : UInt,
      which = 0})
    {
      checkPay(0, None);
      if isProposal/845 then {
        fromConsensus 1 (continue [(Deployer/843 : Address, Deployer/843), (description/844 : Bytes(180), description/844), (thisConsensusTime/846 : UInt, thisConsensusTime/846)]) ;
        send({
          amt = [0, ],
          as = (v833, v831, v832, v829, v827 ),
          saved = (Deployer/843 : Address, description/844 : Bytes(180), thisConsensusTime/846 : UInt ),
          soloSend = True,
          when = true,
          which = 1})
        recv({
          didSendv = didPublish/68 : Bool,
          from = Deployer/848 : Address,
          lct = Just thisConsensusTime/846,
          msg = (title/849 : Bytes(25), link/850 : Bytes(150), owner/851 : Address, id/852 : UInt, deadline/853 : UInt ),
          out = (),
          prev = 1,
          secsv = thisConsensusSecs/855 : UInt,
          timev = thisConsensusTime/854 : UInt,
          which = 1})
        {
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
            netBalance/872 : UInt = 0};
          invariant{
            () }
          while{
            const v876 : Bool! = value/860 > lastConsensusTime/866;
            
            return v876; }
          {
            fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/862), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (thisConsensusTime/865 : UInt, thisConsensusTime/865), (netBalance/872 : UInt, netBalance/872)]) ;
            recv({
              didSendv = didPublish/252 : Bool,
              from = v/918 : Address,
              lct = Just thisConsensusTime/865,
              msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
              out = (),
              prev = 4,
              secsv = thisConsensusSecs/921 : UInt,
              timev = thisConsensusTime/920 : UInt,
              which = 3})
            timeout(Just Left value/860, {
              send({
                amt = [0, ],
                as = (),
                saved = (Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt ),
                soloSend = True,
                when = true,
                which = 4})
              recv({
                didSendv = didPublish/336 : Bool,
                from = Deployer/1087 : Address,
                lct = Just thisConsensusTime/865,
                msg = (),
                out = (),
                prev = 4,
                secsv = thisConsensusSecs/1089 : UInt,
                timev = thisConsensusTime/1088 : UInt,
                which = 4})
              {
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
                  const v1100 : UInt* = netBalance/872 - netBalance/872;
                  transfer.(netBalance/872, None).to(owner/851);
                  {
                    amtTotal/862 : UInt = v1100,
                    downvote/863 : UInt = downvote/863,
                    upvote/864 : UInt = upvote/864,
                    thisConsensusTime/865 : UInt = thisConsensusTime/1088,
                    lastConsensusTime/866 : UInt = thisConsensusTime/865,
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
                      netBalance/1116 : UInt = netBalance/872};
                    invariant{
                      () }
                    while{
                      const v1119 : Bool! = currentBalance/1108 > 0;
                      
                      return v1119; }
                    {
                      fromConsensus 6 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (currentBalance/1108 : UInt, currentBalance/1108), (thisConsensusTime/1109 : UInt, thisConsensusTime/1109), (netBalance/1116 : UInt, netBalance/1116)]) ;
                      recv({
                        didSendv = didPublish/384 : Bool,
                        from = v/1125 : Address,
                        lct = Just thisConsensusTime/1109,
                        msg = (.fork359.msg/1126 : Tuple() ),
                        out = (),
                        prev = 6,
                        secsv = thisConsensusSecs/1128 : UInt,
                        timev = thisConsensusTime/1127 : UInt,
                        which = 6})
                      {
                        setApiDetails("Voters_claimRefund", [Tuple()], None, AIC_SpreadArg );
                        checkPay(0, None);
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
                          const v1147 : UInt! = netBalance/1116 - amountTransferable/1131;
                          transfer.(amountTransferable/1131, None).to(v1141);
                          delete map2[v/1125];
                          const v1149 : Bytes(20)! = "refundPassed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                          emitLog(event(Nothing, log))(v1149, id/852 );
                          const currentBal/1150 : UInt* = currentBalance/1108 - amountTransferable/1131;
                          const v1151 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, true ), (balance, currentBal/1150 ) ];
                          emitLog(api("Voters_claimRefund"))(v1151 );
                          {
                            currentBalance/1108 : UInt = currentBal/1150,
                            thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
                            lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
                            netBalance/1116 : UInt = v1147}
                          continue; }
                        else {
                          const v1160 : Bytes(20)! = "refundFailed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                          emitLog(event(Nothing, log))(v1160, id/852 );
                          const v1161 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, false ), (balance, currentBalance/1108 ) ];
                          emitLog(api("Voters_claimRefund"))(v1161 );
                          {
                            currentBalance/1108 : UInt = currentBalance/1108,
                            thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
                            lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
                            netBalance/1116 : UInt = netBalance/1116}
                          continue; }; } }
                    const v1170 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                    emitLog(event(Nothing, log))(v1170, id/852 );
                    {
                      amtTotal/862 : UInt = netBalance/1116,
                      downvote/863 : UInt = downvote/863,
                      upvote/864 : UInt = upvote/864,
                      thisConsensusTime/865 : UInt = thisConsensusTime/1109,
                      lastConsensusTime/866 : UInt = lastConsensusTime/1110,
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
                      netBalance/872 : UInt = netBalance/872}
                    continue; }; }; } } )
            {
              switch (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) {
                case Voters_contribute0_90 as data_id/922 : Tuple(UInt)/True: {
                  setApiDetails("Voters_contribute", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_contribute0_90, AIC_Case );
                  const payment/927 : UInt* = data_id/922[0];
                  const v928 : Bool! = payment/927 > 0;
                  claim(CT_Require)(v928, Just "Contribution too small");
                  const v933 : UInt* = netBalance/872 + payment/927;
                  checkPay(payment/927, None);
                  const netBalance/939 : UInt! = v933;
                  emitLog(api("Voters_contribute"))(netBalance/939 );
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
                      netBalance/872 : UInt = v933}
                    continue; }; }
                case Voters_downvote0_90 as data_id/977 : Tuple()/False: {
                  setApiDetails("Voters_downvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_downvote0_90, AIC_Case );
                  checkPay(0, None);
                  const .api77.rng/1015 : UInt* = downvote/863 + 1;
                  emitLog(api("Voters_downvote"))(.api77.rng/1015 );
                  {
                    amtTotal/862 : UInt = amtTotal/862,
                    downvote/863 : UInt = .api77.rng/1015,
                    upvote/864 : UInt = upvote/864,
                    thisConsensusTime/865 : UInt = thisConsensusTime/920,
                    lastConsensusTime/866 : UInt = thisConsensusTime/865,
                    netBalance/872 : UInt = netBalance/872}
                  continue; }
                case Voters_upvote0_90 as data_id/1032 : Tuple()/False: {
                  setApiDetails("Voters_upvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_upvote0_90, AIC_Case );
                  checkPay(0, None);
                  const .api76.rng/1079 : UInt* = upvote/864 + 1;
                  emitLog(api("Voters_upvote"))(.api76.rng/1079 );
                  {
                    amtTotal/862 : UInt = amtTotal/862,
                    downvote/863 : UInt = downvote/863,
                    upvote/864 : UInt = .api76.rng/1079,
                    thisConsensusTime/865 : UInt = thisConsensusTime/920,
                    lastConsensusTime/866 : UInt = thisConsensusTime/865,
                    netBalance/872 : UInt = netBalance/872}
                  continue; } } } }
          transfer.(netBalance/872, None).to(Deployer/843);
          fromConsensus 3 (halt []) ;
           } }
      else {
        loopvar {
          keepGoing/1185 : Bool = true,
          thisConsensusTime/1186 : UInt = thisConsensusTime/846};
        invariant{
          () }
        while{
          
          return keepGoing/1185; }
        {
          fromConsensus 9 (continue []) ;
          recv({
            didSendv = didPublish/690 : Bool,
            from = v1290 : Address,
            lct = Just thisConsensusTime/1186,
            msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
            out = (),
            prev = 9,
            secsv = thisConsensusSecs/1293 : UInt,
            timev = thisConsensusTime/1292 : UInt,
            which = 8})
          {
            switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
              case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/True: {
                setApiDetails("Voters_contributed", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_contributed0_454, AIC_Case );
                checkPay(0, None);
                const num1/1305 : UInt! = data_id/1294[0];
                const num2/1306 : UInt! = data_id/1294[1];
                const v1307 : Null! = null;
                emitLog(api("Voters_contributed"))(v1307 );
                const v1315 : Bytes(20)! = "contributed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1315, num1/1305, num2/1306 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292}
                continue; }
              case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/True: {
                setApiDetails("Voters_created", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_created0_454, AIC_Case );
                checkPay(0, None);
                const obj/1409 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])* = data_id/1386[0];
                const v1410 : Null! = null;
                emitLog(api("Voters_created"))(v1410 );
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292}
                continue; }
              case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/True: {
                setApiDetails("Voters_downvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_downvoted0_454, AIC_Case );
                checkPay(0, None);
                const num1/1524 : UInt! = data_id/1478[0];
                const num2/1525 : UInt! = data_id/1478[1];
                const v1526 : Null! = null;
                emitLog(api("Voters_downvoted"))(v1526 );
                const v1534 : Bytes(20)! = "downvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1534, num1/1524, num2/1525 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292}
                continue; }
              case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/True: {
                setApiDetails("Voters_projectDown", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_projectDown0_454, AIC_Case );
                checkPay(0, None);
                const num1/1628 : UInt! = data_id/1570[0];
                const v1629 : Null! = null;
                emitLog(api("Voters_projectDown"))(v1629 );
                const v1636 : Bytes(20)! = "projectDown\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                const v1637 : UInt! = 0;
                emitLog(event(Nothing, that))(v1636, num1/1628, v1637 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292}
                continue; }
              case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/True: {
                setApiDetails("Voters_timedOut", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_timedOut0_454, AIC_Case );
                checkPay(0, None);
                const num1/1731 : UInt! = data_id/1662[0];
                const num2/1732 : UInt! = data_id/1662[1];
                const v1733 : Null! = null;
                emitLog(api("Voters_timedOut"))(v1733 );
                const v1741 : Bytes(20)! = "timedOut\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1741, num1/1731, num2/1732 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292}
                continue; }
              case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/True: {
                setApiDetails("Voters_upvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_upvoted0_454, AIC_Case );
                checkPay(0, None);
                const num1/1835 : UInt! = data_id/1754[0];
                const num2/1836 : UInt! = data_id/1754[1];
                const v1837 : Null! = null;
                emitLog(api("Voters_upvoted"))(v1837 );
                const v1845 : Bytes(20)! = "upvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, that))(v1845, num1/1835, num2/1836 );
                {
                  keepGoing/1185 : Bool = true,
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292}
                continue; } } } }
        fromConsensus 8 (halt []) ;
         }; },
    ("Voters_claimRefund", Just 6) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Struct([['"didRefund"', Bool], ['"balance"', UInt]])] Null};
    fromConsensus 6 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (currentBalance/1108 : UInt, currentBalance/1108), (thisConsensusTime/1109 : UInt, thisConsensusTime/1109), (netBalance/1116 : UInt, netBalance/1116)]) ;
    only(Right False) {
      const _/1122 : Tuple()* = protect<Tuple()>("Voters_claimRefund".interact.in());
       };
    send({
      amt = [0, ],
      as = (_/1122 ),
      saved = (Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt, currentBalance/1108 : UInt, thisConsensusTime/1109 : UInt, netBalance/1116 : UInt ),
      soloSend = False,
      when = true,
      which = 6})
    recv({
      didSendv = didPublish/384 : Bool,
      from = v/1125 : Address,
      lct = Nothing,
      msg = (.fork359.msg/1126 : Tuple() ),
      out = (),
      prev = 6,
      secsv = thisConsensusSecs/1128 : UInt,
      timev = thisConsensusTime/1127 : UInt,
      which = 6})
    {
      setApiDetails("Voters_claimRefund", [Tuple()], None, AIC_SpreadArg );
      checkPay(0, None);
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
        const v1147 : UInt* = netBalance/1116 - amountTransferable/1131;
        transfer.(amountTransferable/1131, None).to(v1141);
        delete map2[v/1125];
        const v1149 : Bytes(20)! = "refundPassed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, log))(v1149, id/852 );
        const currentBal/1150 : UInt* = currentBalance/1108 - amountTransferable/1131;
        const v1151 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, true ), (balance, currentBal/1150 ) ];
        const .api351.rngl/1152 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])* = emitLog(api("Voters_claimRefund"))(v1151 );
        only(Right True) {
          local(Just v1154 : Null) if didPublish/384 then {
            protect<Null>("Voters_claimRefund".interact.out(.fork359.msg/1126, .api351.rngl/1152 ));
             }
          else {
             };
           };
        const currentBalance/3169 : UInt! = currentBal/1150;
        const thisConsensusTime/3170 : UInt! = thisConsensusTime/1127;
        const netBalance/3172 : UInt! = v1147;
        const v3173 : Bool! = currentBal/1150 > 0;
        if v3173 then {
          fromConsensus 6 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (currentBalance/1108 : UInt, currentBalance/3169), (thisConsensusTime/1109 : UInt, thisConsensusTime/3170), (netBalance/1116 : UInt, netBalance/3172)]) ;
           }
        else {
          const v3174 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v3174, id/852 );
          const amtTotal/3175 : UInt! = v1147;
          const downvote/3176 : UInt! = downvote/863;
          const upvote/3177 : UInt! = upvote/864;
          const thisConsensusTime/3178 : UInt! = thisConsensusTime/1127;
          const netBalance/3180 : UInt! = v1147;
          const v3181 : Bool! = value/860 > thisConsensusTime/1109;
          if v3181 then {
            fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/3175), (downvote/863 : UInt, downvote/3176), (upvote/864 : UInt, upvote/3177), (thisConsensusTime/865 : UInt, thisConsensusTime/3178), (netBalance/872 : UInt, netBalance/3180)]) ;
             }
          else {
            transfer.(v1147, None).to(Deployer/843);
            fromConsensus 3 (halt []) ;
             }; }; }
      else {
        const v1160 : Bytes(20)! = "refundFailed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, log))(v1160, id/852 );
        const v1161 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, false ), (balance, currentBalance/1108 ) ];
        const .api351.rngl/1162 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])* = emitLog(api("Voters_claimRefund"))(v1161 );
        only(Right True) {
          local(Just v1164 : Null) if didPublish/384 then {
            protect<Null>("Voters_claimRefund".interact.out(.fork359.msg/1126, .api351.rngl/1162 ));
             }
          else {
             };
           };
        const currentBalance/3182 : UInt! = currentBalance/1108;
        const thisConsensusTime/3183 : UInt! = thisConsensusTime/1127;
        const netBalance/3185 : UInt! = netBalance/1116;
        const v3186 : Bool! = currentBalance/1108 > 0;
        if v3186 then {
          fromConsensus 6 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (currentBalance/1108 : UInt, currentBalance/3182), (thisConsensusTime/1109 : UInt, thisConsensusTime/3183), (netBalance/1116 : UInt, netBalance/3185)]) ;
           }
        else {
          const v3187 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v3187, id/852 );
          const amtTotal/3188 : UInt! = netBalance/1116;
          const downvote/3189 : UInt! = downvote/863;
          const upvote/3190 : UInt! = upvote/864;
          const thisConsensusTime/3191 : UInt! = thisConsensusTime/1127;
          const netBalance/3193 : UInt! = netBalance/1116;
          const v3194 : Bool! = value/860 > thisConsensusTime/1109;
          if v3194 then {
            fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/3188), (downvote/863 : UInt, downvote/3189), (upvote/864 : UInt, upvote/3190), (thisConsensusTime/865 : UInt, thisConsensusTime/3191), (netBalance/872 : UInt, netBalance/3193)]) ;
             }
          else {
            transfer.(netBalance/1116, None).to(Deployer/843);
            fromConsensus 3 (halt []) ;
             }; }; }; },
    ("Voters_contribute", Just 4) = interact {
      in = IT_Fun [] Tuple(UInt),
      out = IT_Fun [Tuple(UInt),UInt] Null};
    fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/862), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (thisConsensusTime/865 : UInt, thisConsensusTime/865), (netBalance/872 : UInt, netBalance/872)]) ;
    only(Right False) {
      const .api78.dom/900 : Tuple(UInt)* = protect<Tuple(UInt)>("Voters_contribute".interact.in());
      const v901 : UInt* = .api78.dom/900[0];
      const v903 : Bool! = v901 > 0;
      claim(CT_Assume)(v903, Just "Contribution too small");
      const v910 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_contribute0_90 .api78.dom/900>;
       };
    send({
      amt = [v901, ],
      as = (v910 ),
      saved = (Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt ),
      soloSend = False,
      when = true,
      which = 3})
    recv({
      didSendv = didPublish/252 : Bool,
      from = v/918 : Address,
      lct = Nothing,
      msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/921 : UInt,
      timev = thisConsensusTime/920 : UInt,
      which = 3})
    {
      switch (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) {
        case Voters_contribute0_90 as data_id/922 : Tuple(UInt)/True: {
          setApiDetails("Voters_contribute", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_contribute0_90, AIC_Case );
          const payment/927 : UInt* = data_id/922[0];
          const v928 : Bool! = payment/927 > 0;
          claim(CT_Require)(v928, Just "Contribution too small");
          const v933 : UInt* = netBalance/872 + payment/927;
          checkPay(payment/927, None);
          const netBalance/939 : UInt! = v933;
          const .api78.rngl/940 : UInt* = emitLog(api("Voters_contribute"))(netBalance/939 );
          only(Right True) {
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
            const amtTotal/3195 : UInt! = amtTotal/954;
            const downvote/3196 : UInt! = downvote/863;
            const upvote/3197 : UInt! = upvote/864;
            const thisConsensusTime/3198 : UInt! = thisConsensusTime/920;
            const netBalance/3200 : UInt! = v933;
            const v3201 : Bool! = value/860 > thisConsensusTime/865;
            if v3201 then {
              fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/3195), (downvote/863 : UInt, downvote/3196), (upvote/864 : UInt, upvote/3197), (thisConsensusTime/865 : UInt, thisConsensusTime/3198), (netBalance/872 : UInt, netBalance/3200)]) ;
               }
            else {
              transfer.(v933, None).to(Deployer/843);
              fromConsensus 3 (halt []) ;
               }; }
          else {
            map0[v/918] = v/918;
            map1[v/918] = payment/927;
            map2[v/918] = null;
            const amtTotal/957 : UInt! = amtTotal/862 + payment/927;
            const amtTotal/3202 : UInt! = amtTotal/957;
            const downvote/3203 : UInt! = downvote/863;
            const upvote/3204 : UInt! = upvote/864;
            const thisConsensusTime/3205 : UInt! = thisConsensusTime/920;
            const netBalance/3207 : UInt! = v933;
            const v3208 : Bool! = value/860 > thisConsensusTime/865;
            if v3208 then {
              fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/3202), (downvote/863 : UInt, downvote/3203), (upvote/864 : UInt, upvote/3204), (thisConsensusTime/865 : UInt, thisConsensusTime/3205), (netBalance/872 : UInt, netBalance/3207)]) ;
               }
            else {
              transfer.(v933, None).to(Deployer/843);
              fromConsensus 3 (halt []) ;
               }; }; }
        case Voters_downvote0_90 as data_id/977 : Tuple()/False: {
           }
        case Voters_upvote0_90 as data_id/1032 : Tuple()/False: {
           } } },
    ("Voters_contributed", Just 9) = interact {
      in = IT_Fun [] Tuple(UInt, UInt),
      out = IT_Fun [Tuple(UInt, UInt),Null] Null};
    fromConsensus 9 (continue []) ;
    only(Right False) {
      const _/1247 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_contributed".interact.in());
      const v1257 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_contributed0_454 _/1247>;
       };
    send({
      amt = [0, ],
      as = (v1257 ),
      saved = (),
      soloSend = False,
      when = true,
      which = 8})
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8})
    {
      switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
        case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/True: {
          setApiDetails("Voters_contributed", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_contributed0_454, AIC_Case );
          checkPay(0, None);
          const num1/1305 : UInt! = data_id/1294[0];
          const num2/1306 : UInt! = data_id/1294[1];
          const v1307 : Null! = null;
          const .api446.rngl/1308 : Null* = emitLog(api("Voters_contributed"))(v1307 );
          only(Right True) {
            local(Just v1310 : Null) if didPublish/690 then {
              protect<Null>("Voters_contributed".interact.out(data_id/1294, .api446.rngl/1308 ));
               }
            else {
               };
             };
          const v1315 : Bytes(20)! = "contributed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, that))(v1315, num1/1305, num2/1306 );
          fromConsensus 9 (continue []) ;
           }
        case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/False: {
           }
        case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/False: {
           }
        case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/False: {
           }
        case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/False: {
           }
        case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/False: {
           } } },
    ("Voters_created", Just 9) = interact {
      in = IT_Fun [] Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])),
      out = IT_Fun [Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])),Null] Null};
    fromConsensus 9 (continue []) ;
    only(Right False) {
      const _/1194 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))* = protect<Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))>("Voters_created".interact.in());
      const v1215 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_created0_454 _/1194>;
       };
    send({
      amt = [0, ],
      as = (v1215 ),
      saved = (),
      soloSend = False,
      when = true,
      which = 8})
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8})
    {
      switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
        case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/False: {
           }
        case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/True: {
          setApiDetails("Voters_created", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_created0_454, AIC_Case );
          checkPay(0, None);
          const obj/1409 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])* = data_id/1386[0];
          const v1410 : Null! = null;
          const .api443.rngl/1411 : Null* = emitLog(api("Voters_created"))(v1410 );
          only(Right True) {
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
          fromConsensus 9 (continue []) ;
           }
        case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/False: {
           }
        case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/False: {
           }
        case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/False: {
           }
        case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/False: {
           } } },
    ("Voters_downvote", Just 4) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),UInt] Null};
    fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/862), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (thisConsensusTime/865 : UInt, thisConsensusTime/865), (netBalance/872 : UInt, netBalance/872)]) ;
    only(Right False) {
      const _/892 : Tuple()* = protect<Tuple()>("Voters_downvote".interact.in());
      const v896 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_downvote0_90 _/892>;
       };
    send({
      amt = [0, ],
      as = (v896 ),
      saved = (Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt ),
      soloSend = False,
      when = true,
      which = 3})
    recv({
      didSendv = didPublish/252 : Bool,
      from = v/918 : Address,
      lct = Nothing,
      msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/921 : UInt,
      timev = thisConsensusTime/920 : UInt,
      which = 3})
    {
      switch (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) {
        case Voters_contribute0_90 as data_id/922 : Tuple(UInt)/False: {
           }
        case Voters_downvote0_90 as data_id/977 : Tuple()/True: {
          setApiDetails("Voters_downvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_downvote0_90, AIC_Case );
          checkPay(0, None);
          const .api77.rng/1015 : UInt* = downvote/863 + 1;
          const .api77.rngl/1016 : UInt* = emitLog(api("Voters_downvote"))(.api77.rng/1015 );
          only(Right True) {
            local(Just v1018 : Null) if didPublish/252 then {
              protect<Null>("Voters_downvote".interact.out(data_id/977, .api77.rngl/1016 ));
               }
            else {
               };
             };
          const amtTotal/3261 : UInt! = amtTotal/862;
          const downvote/3262 : UInt! = .api77.rng/1015;
          const upvote/3263 : UInt! = upvote/864;
          const thisConsensusTime/3264 : UInt! = thisConsensusTime/920;
          const netBalance/3266 : UInt! = netBalance/872;
          const v3267 : Bool! = value/860 > thisConsensusTime/865;
          if v3267 then {
            fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/3261), (downvote/863 : UInt, downvote/3262), (upvote/864 : UInt, upvote/3263), (thisConsensusTime/865 : UInt, thisConsensusTime/3264), (netBalance/872 : UInt, netBalance/3266)]) ;
             }
          else {
            transfer.(netBalance/872, None).to(Deployer/843);
            fromConsensus 3 (halt []) ;
             }; }
        case Voters_upvote0_90 as data_id/1032 : Tuple()/False: {
           } } },
    ("Voters_downvoted", Just 9) = interact {
      in = IT_Fun [] Tuple(UInt, UInt),
      out = IT_Fun [Tuple(UInt, UInt),Null] Null};
    fromConsensus 9 (continue []) ;
    only(Right False) {
      const _/1233 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_downvoted".interact.in());
      const v1243 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_downvoted0_454 _/1233>;
       };
    send({
      amt = [0, ],
      as = (v1243 ),
      saved = (),
      soloSend = False,
      when = true,
      which = 8})
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8})
    {
      switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
        case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/False: {
           }
        case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/False: {
           }
        case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/True: {
          setApiDetails("Voters_downvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_downvoted0_454, AIC_Case );
          checkPay(0, None);
          const num1/1524 : UInt! = data_id/1478[0];
          const num2/1525 : UInt! = data_id/1478[1];
          const v1526 : Null! = null;
          const .api445.rngl/1527 : Null* = emitLog(api("Voters_downvoted"))(v1526 );
          only(Right True) {
            local(Just v1529 : Null) if didPublish/690 then {
              protect<Null>("Voters_downvoted".interact.out(data_id/1478, .api445.rngl/1527 ));
               }
            else {
               };
             };
          const v1534 : Bytes(20)! = "downvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, that))(v1534, num1/1524, num2/1525 );
          fromConsensus 9 (continue []) ;
           }
        case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/False: {
           }
        case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/False: {
           }
        case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/False: {
           } } },
    ("Voters_projectDown", Just 9) = interact {
      in = IT_Fun [] Tuple(UInt),
      out = IT_Fun [Tuple(UInt),Null] Null};
    fromConsensus 9 (continue []) ;
    only(Right False) {
      const _/1275 : Tuple(UInt)* = protect<Tuple(UInt)>("Voters_projectDown".interact.in());
      const v1282 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_projectDown0_454 _/1275>;
       };
    send({
      amt = [0, ],
      as = (v1282 ),
      saved = (),
      soloSend = False,
      when = true,
      which = 8})
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8})
    {
      switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
        case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/False: {
           }
        case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/False: {
           }
        case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/False: {
           }
        case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/True: {
          setApiDetails("Voters_projectDown", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_projectDown0_454, AIC_Case );
          checkPay(0, None);
          const num1/1628 : UInt! = data_id/1570[0];
          const v1629 : Null! = null;
          const .api448.rngl/1630 : Null* = emitLog(api("Voters_projectDown"))(v1629 );
          only(Right True) {
            local(Just v1632 : Null) if didPublish/690 then {
              protect<Null>("Voters_projectDown".interact.out(data_id/1570, .api448.rngl/1630 ));
               }
            else {
               };
             };
          const v1636 : Bytes(20)! = "projectDown\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          const v1637 : UInt! = 0;
          emitLog(event(Nothing, that))(v1636, num1/1628, v1637 );
          fromConsensus 9 (continue []) ;
           }
        case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/False: {
           }
        case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/False: {
           } } },
    ("Voters_timedOut", Just 9) = interact {
      in = IT_Fun [] Tuple(UInt, UInt),
      out = IT_Fun [Tuple(UInt, UInt),Null] Null};
    fromConsensus 9 (continue []) ;
    only(Right False) {
      const _/1261 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_timedOut".interact.in());
      const v1271 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_timedOut0_454 _/1261>;
       };
    send({
      amt = [0, ],
      as = (v1271 ),
      saved = (),
      soloSend = False,
      when = true,
      which = 8})
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8})
    {
      switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
        case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/False: {
           }
        case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/False: {
           }
        case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/False: {
           }
        case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/False: {
           }
        case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/True: {
          setApiDetails("Voters_timedOut", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_timedOut0_454, AIC_Case );
          checkPay(0, None);
          const num1/1731 : UInt! = data_id/1662[0];
          const num2/1732 : UInt! = data_id/1662[1];
          const v1733 : Null! = null;
          const .api447.rngl/1734 : Null* = emitLog(api("Voters_timedOut"))(v1733 );
          only(Right True) {
            local(Just v1736 : Null) if didPublish/690 then {
              protect<Null>("Voters_timedOut".interact.out(data_id/1662, .api447.rngl/1734 ));
               }
            else {
               };
             };
          const v1741 : Bytes(20)! = "timedOut\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, that))(v1741, num1/1731, num2/1732 );
          fromConsensus 9 (continue []) ;
           }
        case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/False: {
           } } },
    ("Voters_upvote", Just 4) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),UInt] Null};
    fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/862), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (thisConsensusTime/865 : UInt, thisConsensusTime/865), (netBalance/872 : UInt, netBalance/872)]) ;
    only(Right False) {
      const _/884 : Tuple()* = protect<Tuple()>("Voters_upvote".interact.in());
      const v888 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_upvote0_90 _/884>;
       };
    send({
      amt = [0, ],
      as = (v888 ),
      saved = (Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt ),
      soloSend = False,
      when = true,
      which = 3})
    recv({
      didSendv = didPublish/252 : Bool,
      from = v/918 : Address,
      lct = Nothing,
      msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/921 : UInt,
      timev = thisConsensusTime/920 : UInt,
      which = 3})
    {
      switch (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) {
        case Voters_contribute0_90 as data_id/922 : Tuple(UInt)/False: {
           }
        case Voters_downvote0_90 as data_id/977 : Tuple()/False: {
           }
        case Voters_upvote0_90 as data_id/1032 : Tuple()/True: {
          setApiDetails("Voters_upvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_upvote0_90, AIC_Case );
          checkPay(0, None);
          const .api76.rng/1079 : UInt* = upvote/864 + 1;
          const .api76.rngl/1080 : UInt* = emitLog(api("Voters_upvote"))(.api76.rng/1079 );
          only(Right True) {
            local(Just v1082 : Null) if didPublish/252 then {
              protect<Null>("Voters_upvote".interact.out(data_id/1032, .api76.rngl/1080 ));
               }
            else {
               };
             };
          const amtTotal/3332 : UInt! = amtTotal/862;
          const downvote/3333 : UInt! = downvote/863;
          const upvote/3334 : UInt! = .api76.rng/1079;
          const thisConsensusTime/3335 : UInt! = thisConsensusTime/920;
          const netBalance/3337 : UInt! = netBalance/872;
          const v3338 : Bool! = value/860 > thisConsensusTime/865;
          if v3338 then {
            fromConsensus 4 (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/3332), (downvote/863 : UInt, downvote/3333), (upvote/864 : UInt, upvote/3334), (thisConsensusTime/865 : UInt, thisConsensusTime/3335), (netBalance/872 : UInt, netBalance/3337)]) ;
             }
          else {
            transfer.(netBalance/872, None).to(Deployer/843);
            fromConsensus 3 (halt []) ;
             }; } } },
    ("Voters_upvoted", Just 9) = interact {
      in = IT_Fun [] Tuple(UInt, UInt),
      out = IT_Fun [Tuple(UInt, UInt),Null] Null};
    fromConsensus 9 (continue []) ;
    only(Right False) {
      const _/1219 : Tuple(UInt, UInt)* = protect<Tuple(UInt, UInt)>("Voters_upvoted".interact.in());
      const v1229 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_upvoted0_454 _/1219>;
       };
    send({
      amt = [0, ],
      as = (v1229 ),
      saved = (),
      soloSend = False,
      when = true,
      which = 8})
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8})
    {
      switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
        case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/False: {
           }
        case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/False: {
           }
        case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/False: {
           }
        case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/False: {
           }
        case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/False: {
           }
        case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/True: {
          setApiDetails("Voters_upvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_upvoted0_454, AIC_Case );
          checkPay(0, None);
          const num1/1835 : UInt! = data_id/1754[0];
          const num2/1836 : UInt! = data_id/1754[1];
          const v1837 : Null! = null;
          const .api444.rngl/1838 : Null* = emitLog(api("Voters_upvoted"))(v1837 );
          only(Right True) {
            local(Just v1840 : Null) if didPublish/690 then {
              protect<Null>("Voters_upvoted".interact.out(data_id/1754, .api444.rngl/1838 ));
               }
            else {
               };
             };
          const v1845 : Bytes(20)! = "upvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, that))(v1845, num1/1835, num2/1836 );
          fromConsensus 9 (continue []) ;
           } } }}}
CP {
  apis = {
    "Voters_claimRefund" = {
      6 = {
        compile = AIC_SpreadArg,
        mcase_id = Nothing,
        msg_tys = [Tuple()],
        ret = Struct([['"didRefund"', Bool], ['"balance"', UInt]]),
        which = 6}},
    "Voters_contribute" = {
      3 = {
        compile = AIC_Case,
        mcase_id = Just Voters_contribute0_90,
        msg_tys = [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
        ret = UInt,
        which = 3}},
    "Voters_contributed" = {
      8 = {
        compile = AIC_Case,
        mcase_id = Just Voters_contributed0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8}},
    "Voters_created" = {
      8 = {
        compile = AIC_Case,
        mcase_id = Just Voters_created0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8}},
    "Voters_downvote" = {
      3 = {
        compile = AIC_Case,
        mcase_id = Just Voters_downvote0_90,
        msg_tys = [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
        ret = UInt,
        which = 3}},
    "Voters_downvoted" = {
      8 = {
        compile = AIC_Case,
        mcase_id = Just Voters_downvoted0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8}},
    "Voters_projectDown" = {
      8 = {
        compile = AIC_Case,
        mcase_id = Just Voters_projectDown0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8}},
    "Voters_timedOut" = {
      8 = {
        compile = AIC_Case,
        mcase_id = Just Voters_timedOut0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8}},
    "Voters_upvote" = {
      3 = {
        compile = AIC_Case,
        mcase_id = Just Voters_upvote0_90,
        msg_tys = [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
        ret = UInt,
        which = 3}},
    "Voters_upvoted" = {
      8 = {
        compile = AIC_Case,
        mcase_id = Just Voters_upvoted0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8}}},
  events = {
    Nothing = {
      create = [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt],
      created = [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt],
      log = [Bytes(20), UInt],
      that = [Bytes(20), UInt, UInt]}},
  handlers = {
    0 = {
      Deployer/843 : Address,
      (between [Nothing] [Nothing]),
      last = 0,
      [],
      [],
      [description/844 : Bytes(180)*, isProposal/845 : Bool!],
      [Bytes(180), Bool],
      timev = thisConsensusTime/846 : UInt,
      secsv = thisConsensusSecs/847 : UInt,
      {
        checkPay(0, None);
        if isProposal/845 then {
          (from 1, (continue [(Deployer/843 : Address, Deployer/843), (description/844 : Bytes(180), description/844), (thisConsensusTime/846 : UInt, thisConsensusTime/846)])) }
        else {
          (jump! 7 [] {
            keepGoing/1185 : Bool = true,
            thisConsensusTime/1186 : UInt = thisConsensusTime/846}) }; }
       },
    1 = {
      Deployer/848 : Address,
      (between [Nothing] [Nothing]),
      last = 1,
      [Deployer/843 : Address*, description/844 : Bytes(180)!, thisConsensusTime/846 : UInt*],
      [Address, Bytes(180), UInt],
      [title/849 : Bytes(25)!, link/850 : Bytes(150)!, owner/851 : Address*, id/852 : UInt*, deadline/853 : UInt!],
      [Bytes(25), Bytes(150), Address, UInt, UInt],
      timev = thisConsensusTime/854 : UInt,
      secsv = thisConsensusSecs/855 : UInt,
      {
        checkPay(0, None);
        const v856 : Bool! = Deployer/843 == Deployer/848;
        claim(CT_Require)(v856, Just "sender correct");
        const v857 : Contract! = getContract()();
        const thisConsensusTime/858 : UInt! = thisConsensusTime/854;
        emitLog(event(Nothing, created))(id/852, title/849, link/850, description/844, owner/851, v857, thisConsensusTime/858 );
        const value/860 : UInt! = thisConsensusTime/846 + deadline/853;
        (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
          amtTotal/862 : UInt = 0,
          downvote/863 : UInt = 0,
          upvote/864 : UInt = 0,
          thisConsensusTime/865 : UInt = thisConsensusTime/854,
          lastConsensusTime/866 : UInt = thisConsensusTime/846,
          netBalance/872 : UInt = 0}) }
       },
    2 = {
      loop!,
      [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*],
      [amtTotal/862 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, thisConsensusTime/865 : UInt*, lastConsensusTime/866 : UInt!, netBalance/872 : UInt*],
      {
        const v876 : Bool! = value/860 > lastConsensusTime/866;
        if v876 then {
          (from 4, (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/862), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (thisConsensusTime/865 : UInt, thisConsensusTime/865), (netBalance/872 : UInt, netBalance/872)])) }
        else {
          transfer.(netBalance/872, None).to(Deployer/843);
          (from 3, (halt [])) }; }
       },
    3 = {
      v/918 : Address,
      (between [Nothing] [Just Left value/860]),
      last = 4,
      [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, amtTotal/862 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, thisConsensusTime/865 : UInt*, netBalance/872 : UInt*],
      [Address, Address, UInt, UInt, UInt, UInt, UInt, UInt, UInt],
      [.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})!],
      [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
      timev = thisConsensusTime/920 : UInt,
      secsv = thisConsensusSecs/921 : UInt,
      {
        switch (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) {
          case Voters_contribute0_90 as data_id/922 : Tuple(UInt)/True: {
            setApiDetails("Voters_contribute", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_contribute0_90, AIC_Case );
            const payment/927 : UInt* = data_id/922[0];
            const v928 : Bool! = payment/927 > 0;
            claim(CT_Require)(v928, Just "Contribution too small");
            const v933 : UInt* = netBalance/872 + payment/927;
            checkPay(payment/927, None);
            const netBalance/939 : UInt! = v933;
            emitLog(api("Voters_contribute"))(netBalance/939 );
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
              (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
                amtTotal/862 : UInt = amtTotal/954,
                downvote/863 : UInt = downvote/863,
                upvote/864 : UInt = upvote/864,
                thisConsensusTime/865 : UInt = thisConsensusTime/920,
                lastConsensusTime/866 : UInt = thisConsensusTime/865,
                netBalance/872 : UInt = v933}) }
            else {
              map0[v/918] = v/918;
              map1[v/918] = payment/927;
              map2[v/918] = null;
              const amtTotal/957 : UInt! = amtTotal/862 + payment/927;
              (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
                amtTotal/862 : UInt = amtTotal/957,
                downvote/863 : UInt = downvote/863,
                upvote/864 : UInt = upvote/864,
                thisConsensusTime/865 : UInt = thisConsensusTime/920,
                lastConsensusTime/866 : UInt = thisConsensusTime/865,
                netBalance/872 : UInt = v933}) }; }
          case Voters_downvote0_90 as data_id/977 : Tuple()/False: {
            setApiDetails("Voters_downvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_downvote0_90, AIC_Case );
            checkPay(0, None);
            const .api77.rng/1015 : UInt* = downvote/863 + 1;
            emitLog(api("Voters_downvote"))(.api77.rng/1015 );
            (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
              amtTotal/862 : UInt = amtTotal/862,
              downvote/863 : UInt = .api77.rng/1015,
              upvote/864 : UInt = upvote/864,
              thisConsensusTime/865 : UInt = thisConsensusTime/920,
              lastConsensusTime/866 : UInt = thisConsensusTime/865,
              netBalance/872 : UInt = netBalance/872}) }
          case Voters_upvote0_90 as data_id/1032 : Tuple()/False: {
            setApiDetails("Voters_upvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_upvote0_90, AIC_Case );
            checkPay(0, None);
            const .api76.rng/1079 : UInt* = upvote/864 + 1;
            emitLog(api("Voters_upvote"))(.api76.rng/1079 );
            (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
              amtTotal/862 : UInt = amtTotal/862,
              downvote/863 : UInt = downvote/863,
              upvote/864 : UInt = .api76.rng/1079,
              thisConsensusTime/865 : UInt = thisConsensusTime/920,
              lastConsensusTime/866 : UInt = thisConsensusTime/865,
              netBalance/872 : UInt = netBalance/872}) } } }
       },
    4 = {
      Deployer/1087 : Address,
      (between [Just Left value/860] [Nothing]),
      last = 4,
      [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, amtTotal/862 : UInt#, downvote/863 : UInt*, upvote/864 : UInt*, thisConsensusTime/865 : UInt*, netBalance/872 : UInt*],
      [Address, Address, UInt, UInt, UInt, UInt, UInt, UInt, UInt],
      [],
      [],
      timev = thisConsensusTime/1088 : UInt,
      secsv = thisConsensusSecs/1089 : UInt,
      {
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
          const v1100 : UInt* = netBalance/872 - netBalance/872;
          transfer.(netBalance/872, None).to(owner/851);
          (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
            amtTotal/862 : UInt = v1100,
            downvote/863 : UInt = downvote/863,
            upvote/864 : UInt = upvote/864,
            thisConsensusTime/865 : UInt = thisConsensusTime/1088,
            lastConsensusTime/866 : UInt = thisConsensusTime/865,
            netBalance/872 : UInt = v1100}) }
        else {
          const v1105 : Bool! = netBalance/872 > 0;
          if v1105 then {
            const v1106 : Bytes(20)! = "failed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v1106, id/852 );
            (jump! 5 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt] {
              currentBalance/1108 : UInt = netBalance/872,
              thisConsensusTime/1109 : UInt = thisConsensusTime/1088,
              lastConsensusTime/1110 : UInt = thisConsensusTime/865,
              netBalance/1116 : UInt = netBalance/872}) }
          else {
            const v1174 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v1174, id/852 );
            (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
              amtTotal/862 : UInt = netBalance/872,
              downvote/863 : UInt = downvote/863,
              upvote/864 : UInt = upvote/864,
              thisConsensusTime/865 : UInt = thisConsensusTime/1088,
              lastConsensusTime/866 : UInt = thisConsensusTime/865,
              netBalance/872 : UInt = netBalance/872}) }; }; }
       },
    5 = {
      loop!,
      [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*],
      [currentBalance/1108 : UInt*, thisConsensusTime/1109 : UInt*, lastConsensusTime/1110 : UInt!, netBalance/1116 : UInt*],
      {
        const v1119 : Bool! = currentBalance/1108 > 0;
        if v1119 then {
          (from 6, (continue [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (currentBalance/1108 : UInt, currentBalance/1108), (thisConsensusTime/1109 : UInt, thisConsensusTime/1109), (netBalance/1116 : UInt, netBalance/1116)])) }
        else {
          const v1170 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v1170, id/852 );
          (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
            amtTotal/862 : UInt = netBalance/1116,
            downvote/863 : UInt = downvote/863,
            upvote/864 : UInt = upvote/864,
            thisConsensusTime/865 : UInt = thisConsensusTime/1109,
            lastConsensusTime/866 : UInt = lastConsensusTime/1110,
            netBalance/872 : UInt = netBalance/1116}) }; }
       },
    6 = {
      v/1125 : Address,
      (between [Nothing] [Nothing]),
      last = 6,
      [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, currentBalance/1108 : UInt*, thisConsensusTime/1109 : UInt*, netBalance/1116 : UInt*],
      [Address, Address, UInt, UInt, UInt, UInt, UInt, UInt, UInt],
      [.fork359.msg/1126 : Tuple()#],
      [Tuple()],
      timev = thisConsensusTime/1127 : UInt,
      secsv = thisConsensusSecs/1128 : UInt,
      {
        setApiDetails("Voters_claimRefund", [Tuple()], None, AIC_SpreadArg );
        checkPay(0, None);
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
          const v1147 : UInt! = netBalance/1116 - amountTransferable/1131;
          transfer.(amountTransferable/1131, None).to(v1141);
          delete map2[v/1125];
          const v1149 : Bytes(20)! = "refundPassed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v1149, id/852 );
          const currentBal/1150 : UInt* = currentBalance/1108 - amountTransferable/1131;
          const v1151 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, true ), (balance, currentBal/1150 ) ];
          emitLog(api("Voters_claimRefund"))(v1151 );
          (jump! 5 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt] {
            currentBalance/1108 : UInt = currentBal/1150,
            thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
            lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
            netBalance/1116 : UInt = v1147}) }
        else {
          const v1160 : Bytes(20)! = "refundFailed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v1160, id/852 );
          const v1161 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, false ), (balance, currentBalance/1108 ) ];
          emitLog(api("Voters_claimRefund"))(v1161 );
          (jump! 5 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt] {
            currentBalance/1108 : UInt = currentBalance/1108,
            thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
            lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
            netBalance/1116 : UInt = netBalance/1116}) }; }
       },
    7 = {
      loop!,
      [],
      [keepGoing/1185 : Bool!, thisConsensusTime/1186 : UInt#],
      {
        if keepGoing/1185 then {
          (from 9, (continue [])) }
        else {
          (from 8, (halt [])) }; }
       },
    8 = {
      v1290 : Address,
      (between [Nothing] [Nothing]),
      last = 9,
      [],
      [],
      [.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})!],
      [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
      timev = thisConsensusTime/1292 : UInt,
      secsv = thisConsensusSecs/1293 : UInt,
      {
        switch (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) {
          case Voters_contributed0_454 as data_id/1294 : Tuple(UInt, UInt)/True: {
            setApiDetails("Voters_contributed", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_contributed0_454, AIC_Case );
            checkPay(0, None);
            const num1/1305 : UInt! = data_id/1294[0];
            const num2/1306 : UInt! = data_id/1294[1];
            const v1307 : Null! = null;
            emitLog(api("Voters_contributed"))(v1307 );
            const v1315 : Bytes(20)! = "contributed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, that))(v1315, num1/1305, num2/1306 );
            (jump! 7 [] {
              keepGoing/1185 : Bool = true,
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292}) }
          case Voters_created0_454 as data_id/1386 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))/True: {
            setApiDetails("Voters_created", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_created0_454, AIC_Case );
            checkPay(0, None);
            const obj/1409 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])* = data_id/1386[0];
            const v1410 : Null! = null;
            emitLog(api("Voters_created"))(v1410 );
            const v1424 : UInt! = obj/1409.id;
            const v1425 : Bytes(25)! = obj/1409.title;
            const v1426 : Bytes(150)! = obj/1409.link;
            const v1427 : Bytes(180)! = obj/1409.description;
            const v1428 : Address! = obj/1409.owner;
            const v1429 : Contract! = obj/1409.contractInfo;
            const v1430 : UInt! = obj/1409.blockCreated;
            emitLog(event(Nothing, create))(v1424, v1425, v1426, v1427, v1428, v1429, v1430 );
            (jump! 7 [] {
              keepGoing/1185 : Bool = true,
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292}) }
          case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/True: {
            setApiDetails("Voters_downvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_downvoted0_454, AIC_Case );
            checkPay(0, None);
            const num1/1524 : UInt! = data_id/1478[0];
            const num2/1525 : UInt! = data_id/1478[1];
            const v1526 : Null! = null;
            emitLog(api("Voters_downvoted"))(v1526 );
            const v1534 : Bytes(20)! = "downvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, that))(v1534, num1/1524, num2/1525 );
            (jump! 7 [] {
              keepGoing/1185 : Bool = true,
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292}) }
          case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/True: {
            setApiDetails("Voters_projectDown", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_projectDown0_454, AIC_Case );
            checkPay(0, None);
            const num1/1628 : UInt! = data_id/1570[0];
            const v1629 : Null! = null;
            emitLog(api("Voters_projectDown"))(v1629 );
            const v1636 : Bytes(20)! = "projectDown\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            const v1637 : UInt! = 0;
            emitLog(event(Nothing, that))(v1636, num1/1628, v1637 );
            (jump! 7 [] {
              keepGoing/1185 : Bool = true,
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292}) }
          case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/True: {
            setApiDetails("Voters_timedOut", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_timedOut0_454, AIC_Case );
            checkPay(0, None);
            const num1/1731 : UInt! = data_id/1662[0];
            const num2/1732 : UInt! = data_id/1662[1];
            const v1733 : Null! = null;
            emitLog(api("Voters_timedOut"))(v1733 );
            const v1741 : Bytes(20)! = "timedOut\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, that))(v1741, num1/1731, num2/1732 );
            (jump! 7 [] {
              keepGoing/1185 : Bool = true,
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292}) }
          case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/True: {
            setApiDetails("Voters_upvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_upvoted0_454, AIC_Case );
            checkPay(0, None);
            const num1/1835 : UInt! = data_id/1754[0];
            const num2/1836 : UInt! = data_id/1754[1];
            const v1837 : Null! = null;
            emitLog(api("Voters_upvoted"))(v1837 );
            const v1845 : Bytes(20)! = "upvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, that))(v1845, num1/1835, num2/1836 );
            (jump! 7 [] {
              keepGoing/1185 : Bool = true,
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292}) } } }
       }},
  init = // maps
  {
    map0 = Address,
    map1 = UInt,
    map2 = Null}
  // initialization
  ,
  views = {
    vis = {
      1 = (view [Deployer/843 : Address, description/844 : Bytes(180), thisConsensusTime/846 : UInt] {
        }),
      4 = (view [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt] {
        }),
      6 = (view [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt, currentBalance/1108 : UInt, thisConsensusTime/1109 : UInt, netBalance/1116 : UInt] {
        }),
      9 = (view [] {
        })},
    vs = {
      }}}
