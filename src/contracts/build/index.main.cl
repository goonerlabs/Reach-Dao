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
      upvoted = ("Voters_upvoted", IT_Fun [UInt,UInt] Null)
      }
    },
  exports = {
    
    },
  init = {
    maps = {
      map0 = Address,
      map1 = UInt,
      map2 = Null
      }
    },
  m = {
    ("Deployer", Nothing) = interact {
      getProposal = IT_Val Object({"deadline": UInt, "description": Bytes(180), "id": UInt, "isProposal": Bool, "link": Bytes(150), "owner": Address, "title": Bytes(25)})
      };
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
      which = 0
      })
    recv({
      didSendv = didPublish/58 : Bool,
      from = Deployer/843 : Address,
      lct = Just 0,
      msg = (description/844 : Bytes(180), isProposal/845 : Bool ),
      out = (),
      prev = 0,
      secsv = thisConsensusSecs/847 : UInt,
      timev = thisConsensusTime/846 : UInt,
      which = 0
      })
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
          which = 1
          })
        recv({
          didSendv = didPublish/68 : Bool,
          from = Deployer/848 : Address,
          lct = Just thisConsensusTime/846,
          msg = (title/849 : Bytes(25), link/850 : Bytes(150), owner/851 : Address, id/852 : UInt, deadline/853 : UInt ),
          out = (),
          prev = 1,
          secsv = thisConsensusSecs/855 : UInt,
          timev = thisConsensusTime/854 : UInt,
          which = 1
          })
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
            netBalance/872 : UInt = 0
            };
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
              which = 3
              })
            timeout(Just Left value/860, {
              send({
                amt = [0, ],
                as = (),
                saved = (Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt ),
                soloSend = True,
                when = true,
                which = 4
                })
              recv({
                didSendv = didPublish/336 : Bool,
                from = Deployer/1087 : Address,
                lct = Just thisConsensusTime/865,
                msg = (),
                out = (),
                prev = 4,
                secsv = thisConsensusSecs/1089 : UInt,
                timev = thisConsensusTime/1088 : UInt,
                which = 4
                })
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
                    netBalance/872 : UInt = v1100
                    }
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
                      netBalance/1116 : UInt = netBalance/872
                      };
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
                        which = 6
                        })
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
                            netBalance/1116 : UInt = v1147
                            }
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
                            netBalance/1116 : UInt = netBalance/1116
                            }
                          continue; }; } }
                    const v1170 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                    emitLog(event(Nothing, log))(v1170, id/852 );
                    {
                      amtTotal/862 : UInt = netBalance/1116,
                      downvote/863 : UInt = downvote/863,
                      upvote/864 : UInt = upvote/864,
                      thisConsensusTime/865 : UInt = thisConsensusTime/1109,
                      lastConsensusTime/866 : UInt = lastConsensusTime/1110,
                      netBalance/872 : UInt = netBalance/1116
                      }
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
                      netBalance/872 : UInt = netBalance/872
                      }
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
                      netBalance/872 : UInt = v933
                      }
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
                      netBalance/872 : UInt = v933
                      }
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
                    netBalance/872 : UInt = netBalance/872
                    }
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
                    netBalance/872 : UInt = netBalance/872
                    }
                  continue; } } } }
          transfer.(netBalance/872, None).to(Deployer/843);
          fromConsensus 3 (halt []) ;
           } }
      else {
        loopvar {
          keepGoing/1185 : Bool = true,
          thisConsensusTime/1186 : UInt = thisConsensusTime/846
          };
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
            which = 8
            })
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292
                  }
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292
                  }
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292
                  }
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292
                  }
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292
                  }
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
                  thisConsensusTime/1186 : UInt = thisConsensusTime/1292
                  }
                continue; } } } }
        fromConsensus 8 (halt []) ;
         }; },
    ("Voters_claimRefund", Just 6) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Struct([['"didRefund"', Bool], ['"balance"', UInt]])] Null
      };
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
      which = 6
      })
    recv({
      didSendv = didPublish/384 : Bool,
      from = v/1125 : Address,
      lct = Nothing,
      msg = (.fork359.msg/1126 : Tuple() ),
      out = (),
      prev = 6,
      secsv = thisConsensusSecs/1128 : UInt,
      timev = thisConsensusTime/1127 : UInt,
      which = 6
      })
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
      out = IT_Fun [Tuple(UInt),UInt] Null
      };
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
      which = 3
      })
    recv({
      didSendv = didPublish/252 : Bool,
      from = v/918 : Address,
      lct = Nothing,
      msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/921 : UInt,
      timev = thisConsensusTime/920 : UInt,
      which = 3
      })
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
      out = IT_Fun [Tuple(UInt, UInt),Null] Null
      };
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
      which = 8
      })
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8
      })
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
      out = IT_Fun [Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])),Null] Null
      };
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
      which = 8
      })
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8
      })
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
      out = IT_Fun [Tuple(),UInt] Null
      };
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
      which = 3
      })
    recv({
      didSendv = didPublish/252 : Bool,
      from = v/918 : Address,
      lct = Nothing,
      msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/921 : UInt,
      timev = thisConsensusTime/920 : UInt,
      which = 3
      })
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
      out = IT_Fun [Tuple(UInt, UInt),Null] Null
      };
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
      which = 8
      })
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8
      })
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
      out = IT_Fun [Tuple(UInt),Null] Null
      };
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
      which = 8
      })
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8
      })
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
      out = IT_Fun [Tuple(UInt, UInt),Null] Null
      };
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
      which = 8
      })
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8
      })
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
      out = IT_Fun [Tuple(),UInt] Null
      };
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
      which = 3
      })
    recv({
      didSendv = didPublish/252 : Bool,
      from = v/918 : Address,
      lct = Nothing,
      msg = (.fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/921 : UInt,
      timev = thisConsensusTime/920 : UInt,
      which = 3
      })
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
      out = IT_Fun [Tuple(UInt, UInt),Null] Null
      };
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
      which = 8
      })
    recv({
      didSendv = didPublish/690 : Bool,
      from = v1290 : Address,
      lct = Nothing,
      msg = (.fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ),
      out = (),
      prev = 9,
      secsv = thisConsensusSecs/1293 : UInt,
      timev = thisConsensusTime/1292 : UInt,
      which = 8
      })
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
           } } }
    }
  }
/*** OLD ***/
CP {
  apis = {
    "Voters_claimRefund" = {
      6 = {
        compile = AIC_SpreadArg,
        mcase_id = Nothing,
        msg_tys = [Tuple()],
        ret = Struct([['"didRefund"', Bool], ['"balance"', UInt]]),
        which = 6
        }
      },
    "Voters_contribute" = {
      4 = {
        compile = AIC_Case,
        mcase_id = Just Voters_contribute0_90,
        msg_tys = [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
        ret = UInt,
        which = 3
        }
      },
    "Voters_contributed" = {
      9 = {
        compile = AIC_Case,
        mcase_id = Just Voters_contributed0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8
        }
      },
    "Voters_created" = {
      9 = {
        compile = AIC_Case,
        mcase_id = Just Voters_created0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8
        }
      },
    "Voters_downvote" = {
      4 = {
        compile = AIC_Case,
        mcase_id = Just Voters_downvote0_90,
        msg_tys = [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
        ret = UInt,
        which = 3
        }
      },
    "Voters_downvoted" = {
      9 = {
        compile = AIC_Case,
        mcase_id = Just Voters_downvoted0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8
        }
      },
    "Voters_projectDown" = {
      9 = {
        compile = AIC_Case,
        mcase_id = Just Voters_projectDown0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8
        }
      },
    "Voters_timedOut" = {
      9 = {
        compile = AIC_Case,
        mcase_id = Just Voters_timedOut0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8
        }
      },
    "Voters_upvote" = {
      4 = {
        compile = AIC_Case,
        mcase_id = Just Voters_upvote0_90,
        msg_tys = [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})],
        ret = UInt,
        which = 3
        }
      },
    "Voters_upvoted" = {
      9 = {
        compile = AIC_Case,
        mcase_id = Just Voters_upvoted0_454,
        msg_tys = [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})],
        ret = Null,
        which = 8
        }
      }
    },
  events = {
    Nothing = {
      create = [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt],
      created = [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt],
      log = [Bytes(20), UInt],
      that = [Bytes(20), UInt, UInt]
      }
    },
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
            thisConsensusTime/1186 : UInt = thisConsensusTime/846
            }) }; }
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
          netBalance/872 : UInt = 0
          }) }
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
                netBalance/872 : UInt = v933
                }) }
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
                netBalance/872 : UInt = v933
                }) }; }
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
              netBalance/872 : UInt = netBalance/872
              }) }
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
              netBalance/872 : UInt = netBalance/872
              }) } } }
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
            netBalance/872 : UInt = v1100
            }) }
        else {
          const v1105 : Bool! = netBalance/872 > 0;
          if v1105 then {
            const v1106 : Bytes(20)! = "failed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v1106, id/852 );
            (jump! 5 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt] {
              currentBalance/1108 : UInt = netBalance/872,
              thisConsensusTime/1109 : UInt = thisConsensusTime/1088,
              lastConsensusTime/1110 : UInt = thisConsensusTime/865,
              netBalance/1116 : UInt = netBalance/872
              }) }
          else {
            const v1174 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v1174, id/852 );
            (jump! 2 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt] {
              amtTotal/862 : UInt = netBalance/872,
              downvote/863 : UInt = downvote/863,
              upvote/864 : UInt = upvote/864,
              thisConsensusTime/865 : UInt = thisConsensusTime/1088,
              lastConsensusTime/866 : UInt = thisConsensusTime/865,
              netBalance/872 : UInt = netBalance/872
              }) }; }; }
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
            netBalance/872 : UInt = netBalance/1116
            }) }; }
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
            netBalance/1116 : UInt = v1147
            }) }
        else {
          const v1160 : Bytes(20)! = "refundFailed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v1160, id/852 );
          const v1161 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, false ), (balance, currentBalance/1108 ) ];
          emitLog(api("Voters_claimRefund"))(v1161 );
          (jump! 5 [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt] {
            currentBalance/1108 : UInt = currentBalance/1108,
            thisConsensusTime/1109 : UInt = thisConsensusTime/1127,
            lastConsensusTime/1110 : UInt = thisConsensusTime/1109,
            netBalance/1116 : UInt = netBalance/1116
            }) }; }
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
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292
              }) }
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
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292
              }) }
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
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292
              }) }
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
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292
              }) }
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
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292
              }) }
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
              thisConsensusTime/1186 : UInt = thisConsensusTime/1292
              }) } } }
       }
    },
  init = {
    maps = {
      map0 = Address,
      map1 = UInt,
      map2 = Null
      }
    },
  views = {
    vis = {
      1 = (view [Deployer/843 : Address, description/844 : Bytes(180), thisConsensusTime/846 : UInt] {
        
        }),
      4 = (view [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/862 : UInt, downvote/863 : UInt, upvote/864 : UInt, thisConsensusTime/865 : UInt, netBalance/872 : UInt] {
        
        }),
      6 = (view [Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt, currentBalance/1108 : UInt, thisConsensusTime/1109 : UInt, netBalance/1116 : UInt] {
        
        }),
      9 = (view [] {
        
        })
      },
    vs = {
      
      }
    }
  }
/*** CL ***/
// Definitions:
{
  "_reachm_0" = map Address Address,
  "_reachm_1" = map Address UInt,
  "_reachm_2" = map Address Null,
  "_reachr_Voters_claimRefund" = mem Struct([['"didRefund"', Bool], ['"balance"', UInt]]),
  "_reachr_Voters_contribute" = mem UInt,
  "_reachr_Voters_contributed" = mem Null,
  "_reachr_Voters_created" = mem Null,
  "_reachr_Voters_downvote" = mem UInt,
  "_reachr_Voters_downvoted" = mem Null,
  "_reachr_Voters_projectDown" = mem Null,
  "_reachr_Voters_timedOut" = mem Null,
  "_reachr_Voters_upvote" = mem UInt,
  "_reachr_Voters_upvoted" = mem Null,
  "create" = evt [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt ],
  "created" = evt [UInt, Bytes(25), Bytes(150), Bytes(180), Address, Contract, UInt ],
  "log" = evt [Bytes(20), UInt ],
  "that" = evt [Bytes(20), UInt, UInt ]
  }
// Functions:
{
  "Voters_claimRefund"()Struct([['"didRefund"', Bool], ['"balance"', UInt]]) = external(Struct([['"didRefund"', Bool], ['"balance"', UInt]])) mut () => {
    jump "_reacha_Voters_claimRefund"() Just Just "_reachr_Voters_claimRefund" },
  "Voters_contribute"(UInt )UInt = external(UInt) mut (v3354 : UInt* ) => {
    jump "_reacha_Voters_contribute"(v3354 : UInt ) Just Just "_reachr_Voters_contribute" },
  "Voters_contributed"(UInt, UInt )Null = external(Null) mut (v3359 : UInt*, v3360 : UInt* ) => {
    jump "_reacha_Voters_contributed"(v3359 : UInt, v3360 : UInt ) Just Just "_reachr_Voters_contributed" },
  "Voters_created"(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]) )Null = external(Null) mut (v3365 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])* ) => {
    jump "_reacha_Voters_created"(v3365 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]) ) Just Just "_reachr_Voters_created" },
  "Voters_downvote"()UInt = external(UInt) mut () => {
    jump "_reacha_Voters_downvote"() Just Just "_reachr_Voters_downvote" },
  "Voters_downvoted"(UInt, UInt )Null = external(Null) mut (v3374 : UInt*, v3375 : UInt* ) => {
    jump "_reacha_Voters_downvoted"(v3374 : UInt, v3375 : UInt ) Just Just "_reachr_Voters_downvoted" },
  "Voters_projectDown"(UInt )Null = external(Null) mut (v3380 : UInt* ) => {
    jump "_reacha_Voters_projectDown"(v3380 : UInt ) Just Just "_reachr_Voters_projectDown" },
  "Voters_timedOut"(UInt, UInt )Null = external(Null) mut (v3385 : UInt*, v3386 : UInt* ) => {
    jump "_reacha_Voters_timedOut"(v3385 : UInt, v3386 : UInt ) Just Just "_reachr_Voters_timedOut" },
  "Voters_upvote"()UInt = external(UInt) mut () => {
    jump "_reacha_Voters_upvote"() Just Just "_reachr_Voters_upvote" },
  "Voters_upvoted"(UInt, UInt )Null = external(Null) mut (v3395 : UInt*, v3396 : UInt* ) => {
    jump "_reacha_Voters_upvoted"(v3395 : UInt, v3396 : UInt ) Just Just "_reachr_Voters_upvoted" },
  "_reacha_Voters_claimRefund"()Null = internal mut () => {
    v3351 : UInt := state
    const v3353 : UInt! = 0;
    const v3352 : Tuple()! = [];
    jump "_reachi_6"(v3353 : UInt, v3352 : Tuple() ) Nothing },
  "_reacha_Voters_contribute"(UInt )Null = internal mut (v3354 : UInt* ) => {
    v3355 : UInt := state
    const v3358 : UInt! = 0;
    const v3356 : Tuple(UInt)! = [v3354 ];
    const v3357 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_contribute0_90 v3356>;
    jump "_reachi_3"(v3358 : UInt, v3357 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ) Nothing },
  "_reacha_Voters_contributed"(UInt, UInt )Null = internal mut (v3359 : UInt*, v3360 : UInt* ) => {
    v3361 : UInt := state
    const v3364 : UInt! = 0;
    const v3362 : Tuple(UInt, UInt)! = [v3359, v3360 ];
    const v3363 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_contributed0_454 v3362>;
    jump "_reachi_8"(v3364 : UInt, v3363 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ) Nothing },
  "_reacha_Voters_created"(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]) )Null = internal mut (v3365 : Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])* ) => {
    v3366 : UInt := state
    const v3369 : UInt! = 0;
    const v3367 : Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]]))! = [v3365 ];
    const v3368 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_created0_454 v3367>;
    jump "_reachi_8"(v3369 : UInt, v3368 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ) Nothing },
  "_reacha_Voters_downvote"()Null = internal mut () => {
    v3370 : UInt := state
    const v3373 : UInt! = 0;
    const v3371 : Tuple()! = [];
    const v3372 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_downvote0_90 v3371>;
    jump "_reachi_3"(v3373 : UInt, v3372 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ) Nothing },
  "_reacha_Voters_downvoted"(UInt, UInt )Null = internal mut (v3374 : UInt*, v3375 : UInt* ) => {
    v3376 : UInt := state
    const v3379 : UInt! = 0;
    const v3377 : Tuple(UInt, UInt)! = [v3374, v3375 ];
    const v3378 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_downvoted0_454 v3377>;
    jump "_reachi_8"(v3379 : UInt, v3378 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ) Nothing },
  "_reacha_Voters_projectDown"(UInt )Null = internal mut (v3380 : UInt* ) => {
    v3381 : UInt := state
    const v3384 : UInt! = 0;
    const v3382 : Tuple(UInt)! = [v3380 ];
    const v3383 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_projectDown0_454 v3382>;
    jump "_reachi_8"(v3384 : UInt, v3383 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ) Nothing },
  "_reacha_Voters_timedOut"(UInt, UInt )Null = internal mut (v3385 : UInt*, v3386 : UInt* ) => {
    v3387 : UInt := state
    const v3390 : UInt! = 0;
    const v3388 : Tuple(UInt, UInt)! = [v3385, v3386 ];
    const v3389 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_timedOut0_454 v3388>;
    jump "_reachi_8"(v3390 : UInt, v3389 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ) Nothing },
  "_reacha_Voters_upvote"()Null = internal mut () => {
    v3391 : UInt := state
    const v3394 : UInt! = 0;
    const v3392 : Tuple()! = [];
    const v3393 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = <Voters_upvote0_90 v3392>;
    jump "_reachi_3"(v3394 : UInt, v3393 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}) ) Nothing },
  "_reacha_Voters_upvoted"(UInt, UInt )Null = internal mut (v3395 : UInt*, v3396 : UInt* ) => {
    v3397 : UInt := state
    const v3400 : UInt! = 0;
    const v3398 : Tuple(UInt, UInt)! = [v3395, v3396 ];
    const v3399 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = <Voters_upvoted0_454 v3398>;
    jump "_reachi_8"(v3400 : UInt, v3399 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}) ) Nothing },
  "_reachi_0"(Tuple(UInt, Bytes(180), Bool) )Null = internal mut (v3402 : Tuple(UInt, Bytes(180), Bool)* ) => {
    emitPublish(0, Tuple(UInt, Bytes(180), Bool) )
    {
      from = Deployer/843 : Address,
      secs = thisConsensusSecs/847 : UInt,
      time = thisConsensusTime/846 : UInt
      } := txn.metadata
    const v3401 : UInt* = v3402[0];
    const description/844 : Bytes(180)* = v3402[1];
    const isProposal/845 : Bool! = v3402[2];
    checkTime(v3401 : UInt )
    checkInterval(thisConsensusTime/846 : UInt, thisConsensusSecs/847 : UInt, (between [Nothing] [Nothing]) )
    checkPay(0, None);
    if isProposal/845 then {
      state1 <- [(Deployer/843 : Address, Deployer/843), (description/844 : Bytes(180), description/844), (thisConsensusTime/846 : UInt, thisConsensusTime/846)]
      exit() }
    else {
      const keepGoing/3403 : Bool! = true;
      const thisConsensusTime/3404 : UInt! = thisConsensusTime/846;
      jump "_reachl_7"(keepGoing/3403 : Bool, thisConsensusTime/3404 : UInt ) Nothing }; },
  "_reachi_1"(Tuple(UInt, Bytes(25), Bytes(150), Address, UInt, UInt) )Null = internal mut (v3406 : Tuple(UInt, Bytes(25), Bytes(150), Address, UInt, UInt)* ) => {
    emitPublish(1, Tuple(UInt, Bytes(25), Bytes(150), Address, UInt, UInt) )
    {
      from = Deployer/848 : Address,
      secs = thisConsensusSecs/855 : UInt,
      time = thisConsensusTime/854 : UInt
      } := txn.metadata
    [Deployer/843 : Address*, description/844 : Bytes(180)!, thisConsensusTime/846 : UInt*] := state1 False
    const v3405 : UInt* = v3406[0];
    const title/849 : Bytes(25)! = v3406[1];
    const link/850 : Bytes(150)! = v3406[2];
    const owner/851 : Address* = v3406[3];
    const id/852 : UInt* = v3406[4];
    const deadline/853 : UInt! = v3406[5];
    checkTime(v3405 : UInt )
    checkInterval(thisConsensusTime/854 : UInt, thisConsensusSecs/855 : UInt, (between [Nothing] [Nothing]) )
    checkPay(0, None);
    const v856 : Bool! = Deployer/843 == Deployer/848;
    claim(CT_Require)(v856, Just "sender correct");
    const v857 : Contract! = getContract()();
    const thisConsensusTime/858 : UInt! = thisConsensusTime/854;
    emitLog(event(Nothing, created))(id/852, title/849, link/850, description/844, owner/851, v857, thisConsensusTime/858 );
    const value/860 : UInt! = thisConsensusTime/846 + deadline/853;
    const amtTotal/3407 : UInt! = 0;
    const downvote/3408 : UInt! = 0;
    const upvote/3409 : UInt! = 0;
    const thisConsensusTime/3410 : UInt! = thisConsensusTime/854;
    const lastConsensusTime/3411 : UInt! = thisConsensusTime/846;
    const netBalance/3412 : UInt! = 0;
    jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3407 : UInt, downvote/3408 : UInt, upvote/3409 : UInt, thisConsensusTime/3410 : UInt, lastConsensusTime/3411 : UInt, netBalance/3412 : UInt ) Nothing },
  "_reachi_3"(Tuple(UInt, Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) )Null = internal mut (v3414 : Tuple(UInt, Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}))* ) => {
    emitPublish(3, Tuple(UInt, Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) )
    {
      from = v/918 : Address,
      secs = thisConsensusSecs/921 : UInt,
      time = thisConsensusTime/920 : UInt
      } := txn.metadata
    [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, amtTotal/862 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, thisConsensusTime/865 : UInt*, netBalance/872 : UInt*] := state4 False
    const v3413 : UInt* = v3414[0];
    const .fork90.msg/919 : Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})! = v3414[1];
    checkTime(v3413 : UInt )
    checkInterval(thisConsensusTime/920 : UInt, thisConsensusSecs/921 : UInt, (between [Nothing] [Just Left value/860]) )
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
          const amtTotal/3415 : UInt! = amtTotal/954;
          const downvote/3416 : UInt! = downvote/863;
          const upvote/3417 : UInt! = upvote/864;
          const thisConsensusTime/3418 : UInt! = thisConsensusTime/920;
          const lastConsensusTime/3419 : UInt! = thisConsensusTime/865;
          const netBalance/3420 : UInt! = v933;
          jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3415 : UInt, downvote/3416 : UInt, upvote/3417 : UInt, thisConsensusTime/3418 : UInt, lastConsensusTime/3419 : UInt, netBalance/3420 : UInt ) Nothing }
        else {
          map0[v/918] = v/918;
          map1[v/918] = payment/927;
          map2[v/918] = null;
          const amtTotal/957 : UInt! = amtTotal/862 + payment/927;
          const amtTotal/3421 : UInt! = amtTotal/957;
          const downvote/3422 : UInt! = downvote/863;
          const upvote/3423 : UInt! = upvote/864;
          const thisConsensusTime/3424 : UInt! = thisConsensusTime/920;
          const lastConsensusTime/3425 : UInt! = thisConsensusTime/865;
          const netBalance/3426 : UInt! = v933;
          jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3421 : UInt, downvote/3422 : UInt, upvote/3423 : UInt, thisConsensusTime/3424 : UInt, lastConsensusTime/3425 : UInt, netBalance/3426 : UInt ) Nothing }; }
      case Voters_downvote0_90 as data_id/977 : Tuple()/False: {
        setApiDetails("Voters_downvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_downvote0_90, AIC_Case );
        checkPay(0, None);
        const .api77.rng/1015 : UInt* = downvote/863 + 1;
        emitLog(api("Voters_downvote"))(.api77.rng/1015 );
        const amtTotal/3427 : UInt! = amtTotal/862;
        const downvote/3428 : UInt! = .api77.rng/1015;
        const upvote/3429 : UInt! = upvote/864;
        const thisConsensusTime/3430 : UInt! = thisConsensusTime/920;
        const lastConsensusTime/3431 : UInt! = thisConsensusTime/865;
        const netBalance/3432 : UInt! = netBalance/872;
        jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3427 : UInt, downvote/3428 : UInt, upvote/3429 : UInt, thisConsensusTime/3430 : UInt, lastConsensusTime/3431 : UInt, netBalance/3432 : UInt ) Nothing }
      case Voters_upvote0_90 as data_id/1032 : Tuple()/False: {
        setApiDetails("Voters_upvote", [Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})], Some Voters_upvote0_90, AIC_Case );
        checkPay(0, None);
        const .api76.rng/1079 : UInt* = upvote/864 + 1;
        emitLog(api("Voters_upvote"))(.api76.rng/1079 );
        const amtTotal/3433 : UInt! = amtTotal/862;
        const downvote/3434 : UInt! = downvote/863;
        const upvote/3435 : UInt! = .api76.rng/1079;
        const thisConsensusTime/3436 : UInt! = thisConsensusTime/920;
        const lastConsensusTime/3437 : UInt! = thisConsensusTime/865;
        const netBalance/3438 : UInt! = netBalance/872;
        jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3433 : UInt, downvote/3434 : UInt, upvote/3435 : UInt, thisConsensusTime/3436 : UInt, lastConsensusTime/3437 : UInt, netBalance/3438 : UInt ) Nothing } } },
  "_reachi_4"(Tuple(UInt) )Null = internal mut (v3440 : Tuple(UInt)* ) => {
    emitPublish(4, Tuple(UInt) )
    {
      from = Deployer/1087 : Address,
      secs = thisConsensusSecs/1089 : UInt,
      time = thisConsensusTime/1088 : UInt
      } := txn.metadata
    [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, amtTotal/862 : UInt#, downvote/863 : UInt*, upvote/864 : UInt*, thisConsensusTime/865 : UInt*, netBalance/872 : UInt*] := state4 False
    const v3439 : UInt* = v3440[0];
    checkTime(v3439 : UInt )
    checkInterval(thisConsensusTime/1088 : UInt, thisConsensusSecs/1089 : UInt, (between [Just Left value/860] [Nothing]) )
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
      const amtTotal/3441 : UInt! = v1100;
      const downvote/3442 : UInt! = downvote/863;
      const upvote/3443 : UInt! = upvote/864;
      const thisConsensusTime/3444 : UInt! = thisConsensusTime/1088;
      const lastConsensusTime/3445 : UInt! = thisConsensusTime/865;
      const netBalance/3446 : UInt! = v1100;
      jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3441 : UInt, downvote/3442 : UInt, upvote/3443 : UInt, thisConsensusTime/3444 : UInt, lastConsensusTime/3445 : UInt, netBalance/3446 : UInt ) Nothing }
    else {
      const v1105 : Bool! = netBalance/872 > 0;
      if v1105 then {
        const v1106 : Bytes(20)! = "failed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, log))(v1106, id/852 );
        const currentBalance/3447 : UInt! = netBalance/872;
        const thisConsensusTime/3448 : UInt! = thisConsensusTime/1088;
        const lastConsensusTime/3449 : UInt! = thisConsensusTime/865;
        const netBalance/3450 : UInt! = netBalance/872;
        jump "_reachl_5"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt, currentBalance/3447 : UInt, thisConsensusTime/3448 : UInt, lastConsensusTime/3449 : UInt, netBalance/3450 : UInt ) Nothing }
      else {
        const v1174 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, log))(v1174, id/852 );
        const amtTotal/3451 : UInt! = netBalance/872;
        const downvote/3452 : UInt! = downvote/863;
        const upvote/3453 : UInt! = upvote/864;
        const thisConsensusTime/3454 : UInt! = thisConsensusTime/1088;
        const lastConsensusTime/3455 : UInt! = thisConsensusTime/865;
        const netBalance/3456 : UInt! = netBalance/872;
        jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3451 : UInt, downvote/3452 : UInt, upvote/3453 : UInt, thisConsensusTime/3454 : UInt, lastConsensusTime/3455 : UInt, netBalance/3456 : UInt ) Nothing }; }; },
  "_reachi_6"(Tuple(UInt, Tuple()) )Null = internal mut (v3464 : Tuple(UInt, Tuple())* ) => {
    emitPublish(6, Tuple(UInt, Tuple()) )
    {
      from = v/1125 : Address,
      secs = thisConsensusSecs/1128 : UInt,
      time = thisConsensusTime/1127 : UInt
      } := txn.metadata
    [Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, currentBalance/1108 : UInt*, thisConsensusTime/1109 : UInt*, netBalance/1116 : UInt*] := state6 False
    const v3463 : UInt* = v3464[0];
    v3464[1];
    checkTime(v3463 : UInt )
    checkInterval(thisConsensusTime/1127 : UInt, thisConsensusSecs/1128 : UInt, (between [Nothing] [Nothing]) )
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
      const currentBalance/3465 : UInt! = currentBal/1150;
      const thisConsensusTime/3466 : UInt! = thisConsensusTime/1127;
      const lastConsensusTime/3467 : UInt! = thisConsensusTime/1109;
      const netBalance/3468 : UInt! = v1147;
      jump "_reachl_5"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt, currentBalance/3465 : UInt, thisConsensusTime/3466 : UInt, lastConsensusTime/3467 : UInt, netBalance/3468 : UInt ) Nothing }
    else {
      const v1160 : Bytes(20)! = "refundFailed\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
      emitLog(event(Nothing, log))(v1160, id/852 );
      const v1161 : Struct([['"didRefund"', Bool], ['"balance"', UInt]])! = struct[(didRefund, false ), (balance, currentBalance/1108 ) ];
      emitLog(api("Voters_claimRefund"))(v1161 );
      const currentBalance/3469 : UInt! = currentBalance/1108;
      const thisConsensusTime/3470 : UInt! = thisConsensusTime/1127;
      const lastConsensusTime/3471 : UInt! = thisConsensusTime/1109;
      const netBalance/3472 : UInt! = netBalance/1116;
      jump "_reachl_5"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, downvote/863 : UInt, upvote/864 : UInt, currentBalance/3469 : UInt, thisConsensusTime/3470 : UInt, lastConsensusTime/3471 : UInt, netBalance/3472 : UInt ) Nothing }; },
  "_reachi_8"(Tuple(UInt, Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) )Null = internal mut (v3474 : Tuple(UInt, Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}))* ) => {
    emitPublish(8, Tuple(UInt, Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) )
    {
      from = v1290 : Address,
      secs = thisConsensusSecs/1293 : UInt,
      time = thisConsensusTime/1292 : UInt
      } := txn.metadata
    [] := state9 False
    const v3473 : UInt* = v3474[0];
    const .fork454.msg/1291 : Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})! = v3474[1];
    checkTime(v3473 : UInt )
    checkInterval(thisConsensusTime/1292 : UInt, thisConsensusSecs/1293 : UInt, (between [Nothing] [Nothing]) )
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
        const keepGoing/3475 : Bool! = true;
        const thisConsensusTime/3476 : UInt! = thisConsensusTime/1292;
        jump "_reachl_7"(keepGoing/3475 : Bool, thisConsensusTime/3476 : UInt ) Nothing }
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
        const keepGoing/3477 : Bool! = true;
        const thisConsensusTime/3478 : UInt! = thisConsensusTime/1292;
        jump "_reachl_7"(keepGoing/3477 : Bool, thisConsensusTime/3478 : UInt ) Nothing }
      case Voters_downvoted0_454 as data_id/1478 : Tuple(UInt, UInt)/True: {
        setApiDetails("Voters_downvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_downvoted0_454, AIC_Case );
        checkPay(0, None);
        const num1/1524 : UInt! = data_id/1478[0];
        const num2/1525 : UInt! = data_id/1478[1];
        const v1526 : Null! = null;
        emitLog(api("Voters_downvoted"))(v1526 );
        const v1534 : Bytes(20)! = "downvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, that))(v1534, num1/1524, num2/1525 );
        const keepGoing/3479 : Bool! = true;
        const thisConsensusTime/3480 : UInt! = thisConsensusTime/1292;
        jump "_reachl_7"(keepGoing/3479 : Bool, thisConsensusTime/3480 : UInt ) Nothing }
      case Voters_projectDown0_454 as data_id/1570 : Tuple(UInt)/True: {
        setApiDetails("Voters_projectDown", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_projectDown0_454, AIC_Case );
        checkPay(0, None);
        const num1/1628 : UInt! = data_id/1570[0];
        const v1629 : Null! = null;
        emitLog(api("Voters_projectDown"))(v1629 );
        const v1636 : Bytes(20)! = "projectDown\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        const v1637 : UInt! = 0;
        emitLog(event(Nothing, that))(v1636, num1/1628, v1637 );
        const keepGoing/3481 : Bool! = true;
        const thisConsensusTime/3482 : UInt! = thisConsensusTime/1292;
        jump "_reachl_7"(keepGoing/3481 : Bool, thisConsensusTime/3482 : UInt ) Nothing }
      case Voters_timedOut0_454 as data_id/1662 : Tuple(UInt, UInt)/True: {
        setApiDetails("Voters_timedOut", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_timedOut0_454, AIC_Case );
        checkPay(0, None);
        const num1/1731 : UInt! = data_id/1662[0];
        const num2/1732 : UInt! = data_id/1662[1];
        const v1733 : Null! = null;
        emitLog(api("Voters_timedOut"))(v1733 );
        const v1741 : Bytes(20)! = "timedOut\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, that))(v1741, num1/1731, num2/1732 );
        const keepGoing/3483 : Bool! = true;
        const thisConsensusTime/3484 : UInt! = thisConsensusTime/1292;
        jump "_reachl_7"(keepGoing/3483 : Bool, thisConsensusTime/3484 : UInt ) Nothing }
      case Voters_upvoted0_454 as data_id/1754 : Tuple(UInt, UInt)/True: {
        setApiDetails("Voters_upvoted", [Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})], Some Voters_upvoted0_454, AIC_Case );
        checkPay(0, None);
        const num1/1835 : UInt! = data_id/1754[0];
        const num2/1836 : UInt! = data_id/1754[1];
        const v1837 : Null! = null;
        emitLog(api("Voters_upvoted"))(v1837 );
        const v1845 : Bytes(20)! = "upvoted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, that))(v1845, num1/1835, num2/1836 );
        const keepGoing/3485 : Bool! = true;
        const thisConsensusTime/3486 : UInt! = thisConsensusTime/1292;
        jump "_reachl_7"(keepGoing/3485 : Bool, thisConsensusTime/3486 : UInt ) Nothing } } },
  "_reachl_2"(Address, Address, UInt, UInt, UInt, UInt, UInt, UInt, UInt, UInt )Null = internal mut (Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, amtTotal/862 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, thisConsensusTime/865 : UInt*, lastConsensusTime/866 : UInt!, netBalance/872 : UInt* ) => {
    const v876 : Bool! = value/860 > lastConsensusTime/866;
    if v876 then {
      state4 <- [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (amtTotal/862 : UInt, amtTotal/862), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (thisConsensusTime/865 : UInt, thisConsensusTime/865), (netBalance/872 : UInt, netBalance/872)]
      exit() }
    else {
      transfer.(netBalance/872, None).to(Deployer/843);
      stateDestroy
      exit() }; },
  "_reachl_5"(Address, Address, UInt, UInt, UInt, UInt, UInt, UInt, UInt, UInt )Null = internal mut (Deployer/843 : Address*, owner/851 : Address*, id/852 : UInt*, value/860 : UInt*, downvote/863 : UInt*, upvote/864 : UInt*, currentBalance/1108 : UInt*, thisConsensusTime/1109 : UInt*, lastConsensusTime/1110 : UInt!, netBalance/1116 : UInt* ) => {
    const v1119 : Bool! = currentBalance/1108 > 0;
    if v1119 then {
      state6 <- [(Deployer/843 : Address, Deployer/843), (owner/851 : Address, owner/851), (id/852 : UInt, id/852), (value/860 : UInt, value/860), (downvote/863 : UInt, downvote/863), (upvote/864 : UInt, upvote/864), (currentBalance/1108 : UInt, currentBalance/1108), (thisConsensusTime/1109 : UInt, thisConsensusTime/1109), (netBalance/1116 : UInt, netBalance/1116)]
      exit() }
    else {
      const v1170 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
      emitLog(event(Nothing, log))(v1170, id/852 );
      const amtTotal/3457 : UInt! = netBalance/1116;
      const downvote/3458 : UInt! = downvote/863;
      const upvote/3459 : UInt! = upvote/864;
      const thisConsensusTime/3460 : UInt! = thisConsensusTime/1109;
      const lastConsensusTime/3461 : UInt! = lastConsensusTime/1110;
      const netBalance/3462 : UInt! = netBalance/1116;
      jump "_reachl_2"(Deployer/843 : Address, owner/851 : Address, id/852 : UInt, value/860 : UInt, amtTotal/3457 : UInt, downvote/3458 : UInt, upvote/3459 : UInt, thisConsensusTime/3460 : UInt, lastConsensusTime/3461 : UInt, netBalance/3462 : UInt ) Nothing }; },
  "_reachl_7"(Bool, UInt )Null = internal mut (keepGoing/1185 : Bool!, thisConsensusTime/1186 : UInt# ) => {
    if keepGoing/1185 then {
      state9 <- []
      exit() }
    else {
      stateDestroy
      exit() }; },
  "_reachp_0"(Tuple(UInt, Bytes(180), Bool) )Null = external(Null) mut (v3402 : Tuple(UInt, Bytes(180), Bool)* ) => {
    jump "_reachi_0"(v3402 : Tuple(UInt, Bytes(180), Bool) ) Just Nothing },
  "_reachp_1"(Tuple(UInt, Bytes(25), Bytes(150), Address, UInt, UInt) )Null = external(Null) mut (v3406 : Tuple(UInt, Bytes(25), Bytes(150), Address, UInt, UInt)* ) => {
    jump "_reachi_1"(v3406 : Tuple(UInt, Bytes(25), Bytes(150), Address, UInt, UInt) ) Just Nothing },
  "_reachp_3"(Tuple(UInt, Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) )Null = external(Null) mut (v3414 : Tuple(UInt, Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()}))* ) => {
    jump "_reachi_3"(v3414 : Tuple(UInt, Data({"Voters_contribute0_90": Tuple(UInt), "Voters_downvote0_90": Tuple(), "Voters_upvote0_90": Tuple()})) ) Just Nothing },
  "_reachp_4"(Tuple(UInt) )Null = external(Null) mut (v3440 : Tuple(UInt)* ) => {
    jump "_reachi_4"(v3440 : Tuple(UInt) ) Just Nothing },
  "_reachp_6"(Tuple(UInt, Tuple()) )Null = external(Null) mut (v3464 : Tuple(UInt, Tuple())* ) => {
    jump "_reachi_6"(v3464 : Tuple(UInt, Tuple()) ) Just Nothing },
  "_reachp_8"(Tuple(UInt, Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) )Null = external(Null) mut (v3474 : Tuple(UInt, Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)}))* ) => {
    jump "_reachi_8"(v3474 : Tuple(UInt, Data({"Voters_contributed0_454": Tuple(UInt, UInt), "Voters_created0_454": Tuple(Struct([['"id"', UInt], ['"title"', Bytes(25)], ['"link"', Bytes(150)], ['"description"', Bytes(180)], ['"owner"', Address], ['"contractInfo"', Contract], ['"blockCreated"', UInt]])), "Voters_downvoted0_454": Tuple(UInt, UInt), "Voters_projectDown0_454": Tuple(UInt), "Voters_timedOut0_454": Tuple(UInt, UInt), "Voters_upvoted0_454": Tuple(UInt, UInt)})) ) Just Nothing }
  }
