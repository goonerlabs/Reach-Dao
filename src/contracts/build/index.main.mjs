// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  return {
    create: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5, ctc0],
    created: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc5, ctc0],
    log: [ctc6, ctc0],
    that: [ctc6, ctc0, ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Data({
    None: ctc3,
    Some: ctc0
    });
  const ctc5 = stdlib.T_Data({
    None: ctc3,
    Some: ctc2
    });
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc3
    });
  const map0_ctc = ctc4;
  
  const map1_ctc = ctc5;
  
  const map2_ctc = ctc6;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      4: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc0, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2, ctc2],
      9: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc2, ctc4, ctc5]);
  return {
    mapDataTy: ctc6
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc10 = stdlib.T_Object({
    deadline: ctc3,
    description: ctc6,
    id: ctc3,
    isProposal: ctc7,
    link: ctc8,
    owner: ctc1,
    title: ctc9
    });
  const ctc11 = stdlib.T_Tuple([ctc3]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Voters_contribute0_90: ctc11,
    Voters_downvote0_90: ctc12,
    Voters_upvote0_90: ctc12
    });
  const ctc14 = stdlib.T_Struct([['didRefund', ctc7], ['balance', ctc3]]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc16 = stdlib.T_Contract;
  const ctc17 = stdlib.T_Struct([['id', ctc3], ['title', ctc9], ['link', ctc8], ['description', ctc6], ['owner', ctc1], ['contractInfo', ctc16], ['blockCreated', ctc3]]);
  const ctc18 = stdlib.T_Tuple([ctc17]);
  const ctc19 = stdlib.T_Data({
    Voters_contributed0_454: ctc15,
    Voters_created0_454: ctc18,
    Voters_downvoted0_454: ctc15,
    Voters_projectDown0_454: ctc11,
    Voters_timedOut0_454: ctc15,
    Voters_upvoted0_454: ctc15
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: false,
    ty: map2_ctc
    });
  
  
  const v826 = stdlib.protect(ctc10, interact.getProposal, 'for Deployer\'s interact field getProposal');
  const v827 = v826.deadline;
  const v828 = v826.description;
  const v829 = v826.id;
  const v830 = v826.isProposal;
  const v831 = v826.link;
  const v832 = v826.owner;
  const v833 = v826.title;
  
  const txn1 = await (ctc.sendrecv({
    args: [v828, v830],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/index.rsh:85:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6, ctc7],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:85:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v844, v845], secs: v847, time: v846, didSend: v58, from: v843 } = txn1;
      
      ;
      if (v845) {
        sim_r.isHalt = false;
        }
      else {
        const v1185 = true;
        const v1186 = v846;
        
        if (await (async () => {
          
          return v1185;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v844, v845], secs: v847, time: v846, didSend: v58, from: v843 } = txn1;
  ;
  if (v845) {
    const txn2 = await (ctc.sendrecv({
      args: [v843, v844, v846, v833, v831, v832, v829, v827],
      evt_cnt: 5,
      funcNum: 1,
      lct: v846,
      onlyIf: true,
      out_tys: [ctc9, ctc8, ctc1, ctc3, ctc3],
      pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:89:14:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        stdlib.simMapDupe(sim_r, 1, map1);
        stdlib.simMapDupe(sim_r, 2, map2);
        
        const {data: [v849, v850, v851, v852, v853], secs: v855, time: v854, didSend: v68, from: v848 } = txn2;
        
        ;
        const v857 = await ctc.getContractInfo();
        const v858 = v854;
        null;
        const v860 = stdlib.safeAdd(v846, v853);
        const v862 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:80:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        const v863 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:104:61:decimal', stdlib.UInt_max, '0');
        const v864 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:104:58:decimal', stdlib.UInt_max, '0');
        const v865 = v854;
        const v866 = v846;
        const v872 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:80:9:after expr stmt semicolon', stdlib.UInt_max, '0');
        
        if (await (async () => {
          const v876 = stdlib.gt(v860, v866);
          
          return v876;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v843,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc6, ctc3, ctc9, ctc8, ctc1, ctc3, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v849, v850, v851, v852, v853], secs: v855, time: v854, didSend: v68, from: v848 } = txn2;
    ;
    const v856 = stdlib.addressEq(v843, v848);
    stdlib.assert(v856, {
      at: './src/contracts/index.rsh:89:14:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v857 = await ctc.getContractInfo();
    const v858 = v854;
    null;
    const v860 = stdlib.safeAdd(v846, v853);
    let v862 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:80:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    let v863 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:104:61:decimal', stdlib.UInt_max, '0');
    let v864 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:104:58:decimal', stdlib.UInt_max, '0');
    let v865 = v854;
    let v866 = v846;
    let v872 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:80:9:after expr stmt semicolon', stdlib.UInt_max, '0');
    
    let txn3 = txn2;
    while (await (async () => {
      const v876 = stdlib.gt(v860, v866);
      
      return v876;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc13],
        timeoutAt: ['time', v860],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v843, v851, v852, v860, v862, v863, v864, v865, v872],
          evt_cnt: 0,
          funcNum: 4,
          lct: v865,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:140:18:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            stdlib.simMapDupe(sim_r, 0, map0);
            stdlib.simMapDupe(sim_r, 1, map1);
            stdlib.simMapDupe(sim_r, 2, map2);
            
            const {data: [], secs: v1089, time: v1088, didSend: v336, from: v1087 } = txn5;
            
            ;
            const v1092 = stdlib.gt(v863, v864);
            const v1093 = stdlib.eq(v864, v863);
            const v1849 = v1093 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v1091 = v1092 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '0') : v1849;
            const v1094 = stdlib.eq(v1091, stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '1'));
            if (v1094) {
              const v1095 = 'passed              ';
              null;
              const v1100 = stdlib.sub(v872, v872);
              sim_r.txns.push({
                kind: 'from',
                to: v851,
                tok: undefined /* Nothing */
                });
              const cv862 = v1100;
              const cv863 = v863;
              const cv864 = v864;
              const cv865 = v1088;
              const cv866 = v865;
              const cv872 = v1100;
              
              await (async () => {
                const v862 = cv862;
                const v863 = cv863;
                const v864 = cv864;
                const v865 = cv865;
                const v866 = cv866;
                const v872 = cv872;
                
                if (await (async () => {
                  const v876 = stdlib.gt(v860, v866);
                  
                  return v876;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'from',
                    to: v843,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}
            else {
              const v1105 = stdlib.gt(v872, stdlib.checkedBigNumberify('./src/contracts/index.rsh:145:27:decimal', stdlib.UInt_max, '0'));
              if (v1105) {
                const v1106 = 'failed              ';
                null;
                const v1108 = v872;
                const v1109 = v1088;
                const v1110 = v865;
                const v1116 = v872;
                
                if (await (async () => {
                  const v1119 = stdlib.gt(v1108, stdlib.checkedBigNumberify('./src/contracts/index.rsh:161:39:decimal', stdlib.UInt_max, '0'));
                  
                  return v1119;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v1170 = 'down                ';
                  null;
                  const cv862 = v1116;
                  const cv863 = v863;
                  const cv864 = v864;
                  const cv865 = v1109;
                  const cv866 = v1110;
                  const cv872 = v1116;
                  
                  await (async () => {
                    const v862 = cv862;
                    const v863 = cv863;
                    const v864 = cv864;
                    const v865 = cv865;
                    const v866 = cv866;
                    const v872 = cv872;
                    
                    if (await (async () => {
                      const v876 = stdlib.gt(v860, v866);
                      
                      return v876;})()) {
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v843,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }})();}}
              else {
                const v1174 = 'down                ';
                null;
                const cv862 = v872;
                const cv863 = v863;
                const cv864 = v864;
                const cv865 = v1088;
                const cv866 = v865;
                const cv872 = v872;
                
                await (async () => {
                  const v862 = cv862;
                  const v863 = cv863;
                  const v864 = cv864;
                  const v865 = cv865;
                  const v866 = cv866;
                  const v872 = cv872;
                  
                  if (await (async () => {
                    const v876 = stdlib.gt(v860, v866);
                    
                    return v876;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v843,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}}
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1089, time: v1088, didSend: v336, from: v1087 } = txn5;
        ;
        const v1090 = stdlib.addressEq(v843, v1087);
        stdlib.assert(v1090, {
          at: './src/contracts/index.rsh:140:18:dot',
          fs: ['at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v1092 = stdlib.gt(v863, v864);
        const v1093 = stdlib.eq(v864, v863);
        const v1849 = v1093 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v1091 = v1092 ? stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '0') : v1849;
        const v1094 = stdlib.eq(v1091, stdlib.checkedBigNumberify('./src/contracts/index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1094) {
          const v1095 = 'passed              ';
          null;
          const v1100 = stdlib.sub(v872, v872);
          ;
          const cv862 = v1100;
          const cv863 = v863;
          const cv864 = v864;
          const cv865 = v1088;
          const cv866 = v865;
          const cv872 = v1100;
          
          v862 = cv862;
          v863 = cv863;
          v864 = cv864;
          v865 = cv865;
          v866 = cv866;
          v872 = cv872;
          
          txn3 = txn5;
          continue;}
        else {
          const v1105 = stdlib.gt(v872, stdlib.checkedBigNumberify('./src/contracts/index.rsh:145:27:decimal', stdlib.UInt_max, '0'));
          if (v1105) {
            const v1106 = 'failed              ';
            null;
            let v1108 = v872;
            let v1109 = v1088;
            let v1110 = v865;
            let v1116 = v872;
            
            let txn6 = txn5;
            while (await (async () => {
              const v1119 = stdlib.gt(v1108, stdlib.checkedBigNumberify('./src/contracts/index.rsh:161:39:decimal', stdlib.UInt_max, '0'));
              
              return v1119;})()) {
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 1,
                funcNum: 6,
                out_tys: [ctc12],
                timeoutAt: undefined /* mto */,
                waitIfNotPresent: false
                }));
              const {data: [v1126], secs: v1128, time: v1127, didSend: v384, from: v1125 } = txn7;
              undefined /* setApiDetails */;
              ;
              const v1130 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1125), null);
              let v1131;
              switch (v1130[0]) {
                case 'None': {
                  const v1132 = v1130[1];
                  v1131 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:155:23:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v1133 = v1130[1];
                  v1131 = v1133;
                  
                  break;
                  }
                }
              const v1135 = stdlib.ge(v1116, v1131);
              const v1136 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1125), null);
              const v1137 = {
                None: 0,
                Some: 1
                }[v1136[0]];
              const v1138 = stdlib.eq(v1137, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
              const v1139 = v1135 ? v1138 : false;
              if (v1139) {
                const v1140 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1125), null);
                let v1141;
                switch (v1140[0]) {
                  case 'None': {
                    const v1142 = v1140[1];
                    v1141 = v843;
                    
                    break;
                    }
                  case 'Some': {
                    const v1143 = v1140[1];
                    v1141 = v1143;
                    
                    break;
                    }
                  }
                const v1147 = stdlib.sub(v1116, v1131);
                ;
                await stdlib.mapSet(map2, v1125, undefined /* Nothing */);
                const v1149 = 'refundPassed        ';
                null;
                const v1150 = stdlib.safeSub(v1108, v1131);
                const v1151 = {
                  balance: v1150,
                  didRefund: true
                  };
                await txn7.getOutput('Voters_claimRefund', 'v1151', ctc14, v1151);
                const cv1108 = v1150;
                const cv1109 = v1127;
                const cv1110 = v1109;
                const cv1116 = v1147;
                
                v1108 = cv1108;
                v1109 = cv1109;
                v1110 = cv1110;
                v1116 = cv1116;
                
                txn6 = txn7;
                continue;}
              else {
                const v1160 = 'refundFailed        ';
                null;
                const v1161 = {
                  balance: v1108,
                  didRefund: false
                  };
                await txn7.getOutput('Voters_claimRefund', 'v1161', ctc14, v1161);
                const cv1108 = v1108;
                const cv1109 = v1127;
                const cv1110 = v1109;
                const cv1116 = v1116;
                
                v1108 = cv1108;
                v1109 = cv1109;
                v1110 = cv1110;
                v1116 = cv1116;
                
                txn6 = txn7;
                continue;}
              
              }
            const v1170 = 'down                ';
            null;
            const cv862 = v1116;
            const cv863 = v863;
            const cv864 = v864;
            const cv865 = v1109;
            const cv866 = v1110;
            const cv872 = v1116;
            
            v862 = cv862;
            v863 = cv863;
            v864 = cv864;
            v865 = cv865;
            v866 = cv866;
            v872 = cv872;
            
            txn3 = txn6;
            continue;}
          else {
            const v1174 = 'down                ';
            null;
            const cv862 = v872;
            const cv863 = v863;
            const cv864 = v864;
            const cv865 = v1088;
            const cv866 = v865;
            const cv872 = v872;
            
            v862 = cv862;
            v863 = cv863;
            v864 = cv864;
            v865 = cv865;
            v866 = cv866;
            v872 = cv872;
            
            txn3 = txn5;
            continue;}}
        }
      else {
        const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn4;
        switch (v919[0]) {
          case 'Voters_contribute0_90': {
            const v922 = v919[1];
            undefined /* setApiDetails */;
            const v927 = v922[stdlib.checkedBigNumberify('./src/contracts/index.rsh:115:12:spread', stdlib.UInt_max, '0')];
            const v928 = stdlib.gt(v927, stdlib.checkedBigNumberify('./src/contracts/index.rsh:116:21:decimal', stdlib.UInt_max, '0'));
            stdlib.assert(v928, {
              at: 'reach standard library:57:5:application',
              fs: ['at ./src/contracts/index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:115:38:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)'],
              msg: 'Contribution too small',
              who: 'Deployer'
              });
            const v933 = stdlib.add(v872, v927);
            ;
            const v939 = v933;
            await txn4.getOutput('Voters_contribute', 'v939', ctc3, v939);
            const v946 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v918), null);
            const v947 = {
              None: 0,
              Some: 1
              }[v946[0]];
            const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
            if (v948) {
              const v949 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v918), null);
              let v950;
              switch (v949[0]) {
                case 'None': {
                  const v951 = v949[1];
                  v950 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:126:25:decimal', stdlib.UInt_max, '0');
                  
                  break;
                  }
                case 'Some': {
                  const v952 = v949[1];
                  v950 = v952;
                  
                  break;
                  }
                }
              const v953 = stdlib.safeAdd(v950, v927);
              await stdlib.mapSet(map1, v918, v953);
              const v954 = stdlib.safeAdd(v862, v927);
              const cv862 = v954;
              const cv863 = v863;
              const cv864 = v864;
              const cv865 = v920;
              const cv866 = v865;
              const cv872 = v933;
              
              v862 = cv862;
              v863 = cv863;
              v864 = cv864;
              v865 = cv865;
              v866 = cv866;
              v872 = cv872;
              
              txn3 = txn4;
              continue;}
            else {
              await stdlib.mapSet(map0, v918, v918);
              await stdlib.mapSet(map1, v918, v927);
              await stdlib.mapSet(map2, v918, null);
              const v957 = stdlib.safeAdd(v862, v927);
              const cv862 = v957;
              const cv863 = v863;
              const cv864 = v864;
              const cv865 = v920;
              const cv866 = v865;
              const cv872 = v933;
              
              v862 = cv862;
              v863 = cv863;
              v864 = cv864;
              v865 = cv865;
              v866 = cv866;
              v872 = cv872;
              
              txn3 = txn4;
              continue;}
            break;
            }
          case 'Voters_downvote0_90': {
            const v977 = v919[1];
            undefined /* setApiDetails */;
            ;
            const v1015 = stdlib.safeAdd(v863, stdlib.checkedBigNumberify('./src/contracts/index.rsh:112:27:decimal', stdlib.UInt_max, '1'));
            await txn4.getOutput('Voters_downvote', 'v1015', ctc3, v1015);
            const cv862 = v862;
            const cv863 = v1015;
            const cv864 = v864;
            const cv865 = v920;
            const cv866 = v865;
            const cv872 = v872;
            
            v862 = cv862;
            v863 = cv863;
            v864 = cv864;
            v865 = cv865;
            v866 = cv866;
            v872 = cv872;
            
            txn3 = txn4;
            continue;
            break;
            }
          case 'Voters_upvote0_90': {
            const v1032 = v919[1];
            undefined /* setApiDetails */;
            ;
            const v1079 = stdlib.safeAdd(v864, stdlib.checkedBigNumberify('./src/contracts/index.rsh:108:25:decimal', stdlib.UInt_max, '1'));
            await txn4.getOutput('Voters_upvote', 'v1079', ctc3, v1079);
            const cv862 = v862;
            const cv863 = v863;
            const cv864 = v1079;
            const cv865 = v920;
            const cv866 = v865;
            const cv872 = v872;
            
            v862 = cv862;
            v863 = cv863;
            v864 = cv864;
            v865 = cv865;
            v866 = cv866;
            v872 = cv872;
            
            txn3 = txn4;
            continue;
            break;
            }
          }}
      
      }
    ;
    return;
    
    
    }
  else {
    let v1185 = true;
    let v1186 = v846;
    
    let txn2 = txn1;
    while (await (async () => {
      
      return v1185;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 8,
        out_tys: [ctc19],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn3;
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          undefined /* setApiDetails */;
          ;
          const v1305 = v1294[stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:spread', stdlib.UInt_max, '0')];
          const v1306 = v1294[stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:spread', stdlib.UInt_max, '1')];
          const v1307 = null;
          await txn3.getOutput('Voters_contributed', 'v1307', ctc0, v1307);
          const v1315 = 'contributed         ';
          null;
          const cv1185 = true;
          const cv1186 = v1292;
          
          v1185 = cv1185;
          v1186 = cv1186;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          undefined /* setApiDetails */;
          ;
          const v1409 = v1386[stdlib.checkedBigNumberify('./src/contracts/index.rsh:200:11:spread', stdlib.UInt_max, '0')];
          const v1410 = null;
          await txn3.getOutput('Voters_created', 'v1410', ctc0, v1410);
          const v1424 = v1409.id;
          const v1425 = v1409.title;
          const v1426 = v1409.link;
          const v1427 = v1409.description;
          const v1428 = v1409.owner;
          const v1429 = v1409.contractInfo;
          const v1430 = v1409.blockCreated;
          null;
          const cv1185 = true;
          const cv1186 = v1292;
          
          v1185 = cv1185;
          v1186 = cv1186;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          undefined /* setApiDetails */;
          ;
          const v1524 = v1478[stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:spread', stdlib.UInt_max, '0')];
          const v1525 = v1478[stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:spread', stdlib.UInt_max, '1')];
          const v1526 = null;
          await txn3.getOutput('Voters_downvoted', 'v1526', ctc0, v1526);
          const v1534 = 'downvoted           ';
          null;
          const cv1185 = true;
          const cv1186 = v1292;
          
          v1185 = cv1185;
          v1186 = cv1186;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          undefined /* setApiDetails */;
          ;
          const v1628 = v1570[stdlib.checkedBigNumberify('./src/contracts/index.rsh:243:11:spread', stdlib.UInt_max, '0')];
          const v1629 = null;
          await txn3.getOutput('Voters_projectDown', 'v1629', ctc0, v1629);
          const v1636 = 'projectDown         ';
          const v1637 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:246:56:decimal', stdlib.UInt_max, '0');
          null;
          const cv1185 = true;
          const cv1186 = v1292;
          
          v1185 = cv1185;
          v1186 = cv1186;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          undefined /* setApiDetails */;
          ;
          const v1731 = v1662[stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:spread', stdlib.UInt_max, '0')];
          const v1732 = v1662[stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:spread', stdlib.UInt_max, '1')];
          const v1733 = null;
          await txn3.getOutput('Voters_timedOut', 'v1733', ctc0, v1733);
          const v1741 = 'timedOut            ';
          null;
          const cv1185 = true;
          const cv1186 = v1292;
          
          v1185 = cv1185;
          v1186 = cv1186;
          
          txn2 = txn3;
          continue;
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          undefined /* setApiDetails */;
          ;
          const v1835 = v1754[stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:spread', stdlib.UInt_max, '0')];
          const v1836 = v1754[stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:spread', stdlib.UInt_max, '1')];
          const v1837 = null;
          await txn3.getOutput('Voters_upvoted', 'v1837', ctc0, v1837);
          const v1845 = 'upvoted             ';
          null;
          const cv1185 = true;
          const cv1186 = v1292;
          
          v1185 = cv1185;
          v1186 = cv1186;
          
          txn2 = txn3;
          continue;
          break;
          }
        }
      
      }
    return;
    }
  
  };
export async function _Voters_claimRefund6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_claimRefund6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_claimRefund6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Struct([['didRefund', ctc7], ['balance', ctc3]]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v843, v851, v852, v860, v863, v864, v1108, v1109, v1116] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v1122 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:162:19:application call to [unknown function] (defined at: ./src/contracts/index.rsh:162:19:function exp)', 'at ./src/contracts/index.rsh:162:19:application call to [unknown function] (defined at: ./src/contracts/index.rsh:162:19:function exp)', 'at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)'],
    msg: 'in',
    who: 'Voters_claimRefund'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v843, v851, v852, v860, v863, v864, v1108, v1109, v1116, v1122],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:162:19:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1126], secs: v1128, time: v1127, didSend: v384, from: v1125 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Voters_claimRefund"
        });
      ;
      const v1130 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1125), null);
      let v1131;
      switch (v1130[0]) {
        case 'None': {
          const v1132 = v1130[1];
          v1131 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:155:23:decimal', stdlib.UInt_max, '0');
          
          break;
          }
        case 'Some': {
          const v1133 = v1130[1];
          v1131 = v1133;
          
          break;
          }
        }
      const v1135 = stdlib.ge(v1116, v1131);
      const v1136 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v1125), null);
      const v1137 = {
        None: 0,
        Some: 1
        }[v1136[0]];
      const v1138 = stdlib.eq(v1137, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      const v1139 = v1135 ? v1138 : false;
      if (v1139) {
        const v1140 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1125), null);
        let v1141;
        switch (v1140[0]) {
          case 'None': {
            const v1142 = v1140[1];
            v1141 = v843;
            
            break;
            }
          case 'Some': {
            const v1143 = v1140[1];
            v1141 = v1143;
            
            break;
            }
          }
        const v1147 = stdlib.sub(v1116, v1131);
        sim_r.txns.push({
          kind: 'from',
          to: v1141,
          tok: undefined /* Nothing */
          });
        await stdlib.simMapSet(sim_r, 2, v1125, undefined /* Nothing */);
        const v1149 = 'refundPassed        ';
        null;
        const v1150 = stdlib.safeSub(v1108, v1131);
        const v1151 = {
          balance: v1150,
          didRefund: true
          };
        const v1152 = await txn1.getOutput('Voters_claimRefund', 'v1151', ctc8, v1151);
        
        const v3169 = v1150;
        const v3170 = v1127;
        const v3172 = v1147;
        const v3173 = stdlib.gt(v1150, stdlib.checkedBigNumberify('./src/contracts/index.rsh:161:39:decimal', stdlib.UInt_max, '0'));
        if (v3173) {
          sim_r.isHalt = false;
          }
        else {
          const v3174 = 'down                ';
          null;
          const v3175 = v1147;
          const v3176 = v863;
          const v3177 = v864;
          const v3178 = v1127;
          const v3180 = v1147;
          const v3181 = stdlib.gt(v860, v1109);
          if (v3181) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v843,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      else {
        const v1160 = 'refundFailed        ';
        null;
        const v1161 = {
          balance: v1108,
          didRefund: false
          };
        const v1162 = await txn1.getOutput('Voters_claimRefund', 'v1161', ctc8, v1161);
        
        const v3182 = v1108;
        const v3183 = v1127;
        const v3185 = v1116;
        const v3186 = stdlib.gt(v1108, stdlib.checkedBigNumberify('./src/contracts/index.rsh:161:39:decimal', stdlib.UInt_max, '0'));
        if (v3186) {
          sim_r.isHalt = false;
          }
        else {
          const v3187 = 'down                ';
          null;
          const v3188 = v1116;
          const v3189 = v863;
          const v3190 = v864;
          const v3191 = v1127;
          const v3193 = v1116;
          const v3194 = stdlib.gt(v860, v1109);
          if (v3194) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v843,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1126], secs: v1128, time: v1127, didSend: v384, from: v1125 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1130 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1125), null);
  let v1131;
  switch (v1130[0]) {
    case 'None': {
      const v1132 = v1130[1];
      v1131 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:155:23:decimal', stdlib.UInt_max, '0');
      
      break;
      }
    case 'Some': {
      const v1133 = v1130[1];
      v1131 = v1133;
      
      break;
      }
    }
  const v1135 = stdlib.ge(v1116, v1131);
  const v1136 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v1125), null);
  const v1137 = {
    None: 0,
    Some: 1
    }[v1136[0]];
  const v1138 = stdlib.eq(v1137, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  const v1139 = v1135 ? v1138 : false;
  if (v1139) {
    const v1140 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1125), null);
    let v1141;
    switch (v1140[0]) {
      case 'None': {
        const v1142 = v1140[1];
        v1141 = v843;
        
        break;
        }
      case 'Some': {
        const v1143 = v1140[1];
        v1141 = v1143;
        
        break;
        }
      }
    const v1147 = stdlib.sub(v1116, v1131);
    ;
    await stdlib.mapSet(map2, v1125, undefined /* Nothing */);
    const v1149 = 'refundPassed        ';
    null;
    const v1150 = stdlib.safeSub(v1108, v1131);
    const v1151 = {
      balance: v1150,
      didRefund: true
      };
    const v1152 = await txn1.getOutput('Voters_claimRefund', 'v1151', ctc8, v1151);
    if (v384) {
      stdlib.protect(ctc0, await interact.out(v1126, v1152), {
        at: './src/contracts/index.rsh:162:20:application',
        fs: ['at ./src/contracts/index.rsh:162:20:application call to [unknown function] (defined at: ./src/contracts/index.rsh:162:20:function exp)', 'at ./src/contracts/index.rsh:178:25:application call to "notify" (defined at: ./src/contracts/index.rsh:162:49:function exp)', 'at ./src/contracts/index.rsh:162:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:162:49:function exp)', 'at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)'],
        msg: 'out',
        who: 'Voters_claimRefund'
        });
      }
    else {
      }
    
    const v3169 = v1150;
    const v3170 = v1127;
    const v3172 = v1147;
    const v3173 = stdlib.gt(v1150, stdlib.checkedBigNumberify('./src/contracts/index.rsh:161:39:decimal', stdlib.UInt_max, '0'));
    if (v3173) {
      return;
      }
    else {
      const v3174 = 'down                ';
      null;
      const v3175 = v1147;
      const v3176 = v863;
      const v3177 = v864;
      const v3178 = v1127;
      const v3180 = v1147;
      const v3181 = stdlib.gt(v860, v1109);
      if (v3181) {
        return;
        }
      else {
        ;
        return;
        }}}
  else {
    const v1160 = 'refundFailed        ';
    null;
    const v1161 = {
      balance: v1108,
      didRefund: false
      };
    const v1162 = await txn1.getOutput('Voters_claimRefund', 'v1161', ctc8, v1161);
    if (v384) {
      stdlib.protect(ctc0, await interact.out(v1126, v1162), {
        at: './src/contracts/index.rsh:162:20:application',
        fs: ['at ./src/contracts/index.rsh:162:20:application call to [unknown function] (defined at: ./src/contracts/index.rsh:162:20:function exp)', 'at ./src/contracts/index.rsh:186:25:application call to "notify" (defined at: ./src/contracts/index.rsh:162:49:function exp)', 'at ./src/contracts/index.rsh:162:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:162:49:function exp)', 'at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)'],
        msg: 'out',
        who: 'Voters_claimRefund'
        });
      }
    else {
      }
    
    const v3182 = v1108;
    const v3183 = v1127;
    const v3185 = v1116;
    const v3186 = stdlib.gt(v1108, stdlib.checkedBigNumberify('./src/contracts/index.rsh:161:39:decimal', stdlib.UInt_max, '0'));
    if (v3186) {
      return;
      }
    else {
      const v3187 = 'down                ';
      null;
      const v3188 = v1116;
      const v3189 = v863;
      const v3190 = v864;
      const v3191 = v1127;
      const v3193 = v1116;
      const v3194 = stdlib.gt(v860, v1109);
      if (v3194) {
        return;
        }
      else {
        ;
        return;
        }}}
  
  
  };
export async function _Voters_contribute4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_contribute4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_contribute4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Voters_contribute0_90: ctc6,
    Voters_downvote0_90: ctc7,
    Voters_upvote0_90: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v843, v851, v852, v860, v862, v863, v864, v865, v872] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v900 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:115:38:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to "runVoters_contribute0_90" (defined at: ./src/contracts/index.rsh:115:12:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)'],
    msg: 'in',
    who: 'Voters_contribute'
    });
  const v901 = v900[stdlib.checkedBigNumberify('./src/contracts/index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v903 = stdlib.gt(v901, stdlib.checkedBigNumberify('./src/contracts/index.rsh:116:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v903, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:115:38:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to "runVoters_contribute0_90" (defined at: ./src/contracts/index.rsh:115:12:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)'],
    msg: 'Contribution too small',
    who: 'Voters_contribute'
    });
  const v910 = ['Voters_contribute0_90', v900];
  
  const txn1 = await (ctc.sendrecv({
    args: [v843, v851, v852, v860, v862, v863, v864, v865, v872, v910],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [v901, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn1;
      
      switch (v919[0]) {
        case 'Voters_contribute0_90': {
          const v922 = v919[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_contribute"
            });
          const v927 = v922[stdlib.checkedBigNumberify('./src/contracts/index.rsh:115:12:spread', stdlib.UInt_max, '0')];
          const v933 = stdlib.add(v872, v927);
          sim_r.txns.push({
            amt: v927,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v939 = v933;
          const v940 = await txn1.getOutput('Voters_contribute', 'v939', ctc3, v939);
          
          const v946 = stdlib.protect(map2_ctc, await stdlib.simMapRef(sim_r, 2, v918), null);
          const v947 = {
            None: 0,
            Some: 1
            }[v946[0]];
          const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
          if (v948) {
            const v949 = stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v918), null);
            let v950;
            switch (v949[0]) {
              case 'None': {
                const v951 = v949[1];
                v950 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:126:25:decimal', stdlib.UInt_max, '0');
                
                break;
                }
              case 'Some': {
                const v952 = v949[1];
                v950 = v952;
                
                break;
                }
              }
            const v953 = stdlib.safeAdd(v950, v927);
            await stdlib.simMapSet(sim_r, 1, v918, v953);
            const v954 = stdlib.safeAdd(v862, v927);
            const v3195 = v954;
            const v3196 = v863;
            const v3197 = v864;
            const v3198 = v920;
            const v3200 = v933;
            const v3201 = stdlib.gt(v860, v865);
            if (v3201) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v843,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            await stdlib.simMapSet(sim_r, 0, v918, v918);
            await stdlib.simMapSet(sim_r, 1, v918, v927);
            await stdlib.simMapSet(sim_r, 2, v918, null);
            const v957 = stdlib.safeAdd(v862, v927);
            const v3202 = v957;
            const v3203 = v863;
            const v3204 = v864;
            const v3205 = v920;
            const v3207 = v933;
            const v3208 = stdlib.gt(v860, v865);
            if (v3208) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v843,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Voters_downvote0_90': {
          const v977 = v919[1];
          
          break;
          }
        case 'Voters_upvote0_90': {
          const v1032 = v919[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn1;
  switch (v919[0]) {
    case 'Voters_contribute0_90': {
      const v922 = v919[1];
      undefined /* setApiDetails */;
      const v927 = v922[stdlib.checkedBigNumberify('./src/contracts/index.rsh:115:12:spread', stdlib.UInt_max, '0')];
      const v928 = stdlib.gt(v927, stdlib.checkedBigNumberify('./src/contracts/index.rsh:116:21:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v928, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/index.rsh:116:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/index.rsh:115:38:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:38:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)'],
        msg: 'Contribution too small',
        who: 'Voters_contribute'
        });
      const v933 = stdlib.add(v872, v927);
      ;
      const v939 = v933;
      const v940 = await txn1.getOutput('Voters_contribute', 'v939', ctc3, v939);
      if (v252) {
        stdlib.protect(ctc0, await interact.out(v922, v940), {
          at: './src/contracts/index.rsh:115:13:application',
          fs: ['at ./src/contracts/index.rsh:115:13:application call to [unknown function] (defined at: ./src/contracts/index.rsh:115:13:function exp)', 'at ./src/contracts/index.rsh:121:19:application call to "notify" (defined at: ./src/contracts/index.rsh:120:20:function exp)', 'at ./src/contracts/index.rsh:120:20:application call to [unknown function] (defined at: ./src/contracts/index.rsh:120:20:function exp)'],
          msg: 'out',
          who: 'Voters_contribute'
          });
        }
      else {
        }
      
      const v946 = stdlib.protect(map2_ctc, await stdlib.mapRef(map2, v918), null);
      const v947 = {
        None: 0,
        Some: 1
        }[v946[0]];
      const v948 = stdlib.eq(v947, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      if (v948) {
        const v949 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v918), null);
        let v950;
        switch (v949[0]) {
          case 'None': {
            const v951 = v949[1];
            v950 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:126:25:decimal', stdlib.UInt_max, '0');
            
            break;
            }
          case 'Some': {
            const v952 = v949[1];
            v950 = v952;
            
            break;
            }
          }
        const v953 = stdlib.safeAdd(v950, v927);
        await stdlib.mapSet(map1, v918, v953);
        const v954 = stdlib.safeAdd(v862, v927);
        const v3195 = v954;
        const v3196 = v863;
        const v3197 = v864;
        const v3198 = v920;
        const v3200 = v933;
        const v3201 = stdlib.gt(v860, v865);
        if (v3201) {
          return;
          }
        else {
          ;
          return;
          }}
      else {
        await stdlib.mapSet(map0, v918, v918);
        await stdlib.mapSet(map1, v918, v927);
        await stdlib.mapSet(map2, v918, null);
        const v957 = stdlib.safeAdd(v862, v927);
        const v3202 = v957;
        const v3203 = v863;
        const v3204 = v864;
        const v3205 = v920;
        const v3207 = v933;
        const v3208 = stdlib.gt(v860, v865);
        if (v3208) {
          return;
          }
        else {
          ;
          return;
          }}
      break;
      }
    case 'Voters_downvote0_90': {
      const v977 = v919[1];
      return;
      break;
      }
    case 'Voters_upvote0_90': {
      const v1032 = v919[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_contributed9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_contributed9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_contributed9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10], ['blockCreated', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_454: ctc6,
    Voters_created0_454: ctc12,
    Voters_downvoted0_454: ctc6,
    Voters_projectDown0_454: ctc13,
    Voters_timedOut0_454: ctc6,
    Voters_upvoted0_454: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1247 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:229:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:229:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to "runVoters_contributed0_454" (defined at: ./src/contracts/index.rsh:229:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:197:37:function exp)'],
    msg: 'in',
    who: 'Voters_contributed'
    });
  const v1257 = ['Voters_contributed0_454', v1247];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1257],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
      
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_contributed"
            });
          ;
          const v1305 = v1294[stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:spread', stdlib.UInt_max, '0')];
          const v1306 = v1294[stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:spread', stdlib.UInt_max, '1')];
          const v1307 = null;
          const v1308 = await txn1.getOutput('Voters_contributed', 'v1307', ctc0, v1307);
          
          const v1315 = 'contributed         ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
  switch (v1291[0]) {
    case 'Voters_contributed0_454': {
      const v1294 = v1291[1];
      undefined /* setApiDetails */;
      ;
      const v1305 = v1294[stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:spread', stdlib.UInt_max, '0')];
      const v1306 = v1294[stdlib.checkedBigNumberify('./src/contracts/index.rsh:229:11:spread', stdlib.UInt_max, '1')];
      const v1307 = null;
      const v1308 = await txn1.getOutput('Voters_contributed', 'v1307', ctc0, v1307);
      if (v690) {
        stdlib.protect(ctc0, await interact.out(v1294, v1308), {
          at: './src/contracts/index.rsh:229:12:application',
          fs: ['at ./src/contracts/index.rsh:229:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:229:12:function exp)', 'at ./src/contracts/index.rsh:230:15:application call to "notify" (defined at: ./src/contracts/index.rsh:229:53:function exp)', 'at ./src/contracts/index.rsh:229:53:application call to [unknown function] (defined at: ./src/contracts/index.rsh:229:53:function exp)'],
          msg: 'out',
          who: 'Voters_contributed'
          });
        }
      else {
        }
      
      const v1315 = 'contributed         ';
      null;
      return;
      
      break;
      }
    case 'Voters_created0_454': {
      const v1386 = v1291[1];
      return;
      break;
      }
    case 'Voters_downvoted0_454': {
      const v1478 = v1291[1];
      return;
      break;
      }
    case 'Voters_projectDown0_454': {
      const v1570 = v1291[1];
      return;
      break;
      }
    case 'Voters_timedOut0_454': {
      const v1662 = v1291[1];
      return;
      break;
      }
    case 'Voters_upvoted0_454': {
      const v1754 = v1291[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_created9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_created9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_created9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc9 = stdlib.T_Contract;
  const ctc10 = stdlib.T_Struct([['id', ctc3], ['title', ctc6], ['link', ctc7], ['description', ctc8], ['owner', ctc1], ['contractInfo', ctc9], ['blockCreated', ctc3]]);
  const ctc11 = stdlib.T_Tuple([ctc10]);
  const ctc12 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_454: ctc12,
    Voters_created0_454: ctc11,
    Voters_downvoted0_454: ctc12,
    Voters_projectDown0_454: ctc13,
    Voters_timedOut0_454: ctc12,
    Voters_upvoted0_454: ctc12
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1194 = stdlib.protect(ctc11, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:200:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:200:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to "runVoters_created0_454" (defined at: ./src/contracts/index.rsh:200:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:197:37:function exp)'],
    msg: 'in',
    who: 'Voters_created'
    });
  const v1215 = ['Voters_created0_454', v1194];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1215],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:200:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
      
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_created"
            });
          ;
          const v1409 = v1386[stdlib.checkedBigNumberify('./src/contracts/index.rsh:200:11:spread', stdlib.UInt_max, '0')];
          const v1410 = null;
          const v1411 = await txn1.getOutput('Voters_created', 'v1410', ctc0, v1410);
          
          const v1424 = v1409.id;
          const v1425 = v1409.title;
          const v1426 = v1409.link;
          const v1427 = v1409.description;
          const v1428 = v1409.owner;
          const v1429 = v1409.contractInfo;
          const v1430 = v1409.blockCreated;
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
  switch (v1291[0]) {
    case 'Voters_contributed0_454': {
      const v1294 = v1291[1];
      return;
      break;
      }
    case 'Voters_created0_454': {
      const v1386 = v1291[1];
      undefined /* setApiDetails */;
      ;
      const v1409 = v1386[stdlib.checkedBigNumberify('./src/contracts/index.rsh:200:11:spread', stdlib.UInt_max, '0')];
      const v1410 = null;
      const v1411 = await txn1.getOutput('Voters_created', 'v1410', ctc0, v1410);
      if (v690) {
        stdlib.protect(ctc0, await interact.out(v1386, v1411), {
          at: './src/contracts/index.rsh:200:12:application',
          fs: ['at ./src/contracts/index.rsh:200:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:200:12:function exp)', 'at ./src/contracts/index.rsh:201:15:application call to "notify" (defined at: ./src/contracts/index.rsh:200:42:function exp)', 'at ./src/contracts/index.rsh:200:42:application call to [unknown function] (defined at: ./src/contracts/index.rsh:200:42:function exp)'],
          msg: 'out',
          who: 'Voters_created'
          });
        }
      else {
        }
      
      const v1424 = v1409.id;
      const v1425 = v1409.title;
      const v1426 = v1409.link;
      const v1427 = v1409.description;
      const v1428 = v1409.owner;
      const v1429 = v1409.contractInfo;
      const v1430 = v1409.blockCreated;
      null;
      return;
      
      break;
      }
    case 'Voters_downvoted0_454': {
      const v1478 = v1291[1];
      return;
      break;
      }
    case 'Voters_projectDown0_454': {
      const v1570 = v1291[1];
      return;
      break;
      }
    case 'Voters_timedOut0_454': {
      const v1662 = v1291[1];
      return;
      break;
      }
    case 'Voters_upvoted0_454': {
      const v1754 = v1291[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_downvote4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_downvote4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_downvote4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    Voters_contribute0_90: ctc7,
    Voters_downvote0_90: ctc6,
    Voters_upvote0_90: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v843, v851, v852, v860, v862, v863, v864, v865, v872] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v892 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:111:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:111:11:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to "runVoters_downvote0_90" (defined at: ./src/contracts/index.rsh:111:11:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)'],
    msg: 'in',
    who: 'Voters_downvote'
    });
  const v896 = ['Voters_downvote0_90', v892];
  
  const txn1 = await (ctc.sendrecv({
    args: [v843, v851, v852, v860, v862, v863, v864, v865, v872, v896],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:111:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn1;
      
      switch (v919[0]) {
        case 'Voters_contribute0_90': {
          const v922 = v919[1];
          
          break;
          }
        case 'Voters_downvote0_90': {
          const v977 = v919[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_downvote"
            });
          ;
          const v1015 = stdlib.safeAdd(v863, stdlib.checkedBigNumberify('./src/contracts/index.rsh:112:27:decimal', stdlib.UInt_max, '1'));
          const v1016 = await txn1.getOutput('Voters_downvote', 'v1015', ctc3, v1015);
          
          const v3261 = v862;
          const v3262 = v1015;
          const v3263 = v864;
          const v3264 = v920;
          const v3266 = v872;
          const v3267 = stdlib.gt(v860, v865);
          if (v3267) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v843,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Voters_upvote0_90': {
          const v1032 = v919[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn1;
  switch (v919[0]) {
    case 'Voters_contribute0_90': {
      const v922 = v919[1];
      return;
      break;
      }
    case 'Voters_downvote0_90': {
      const v977 = v919[1];
      undefined /* setApiDetails */;
      ;
      const v1015 = stdlib.safeAdd(v863, stdlib.checkedBigNumberify('./src/contracts/index.rsh:112:27:decimal', stdlib.UInt_max, '1'));
      const v1016 = await txn1.getOutput('Voters_downvote', 'v1015', ctc3, v1015);
      if (v252) {
        stdlib.protect(ctc0, await interact.out(v977, v1016), {
          at: './src/contracts/index.rsh:111:12:application',
          fs: ['at ./src/contracts/index.rsh:111:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:111:12:function exp)', 'at ./src/contracts/index.rsh:112:15:application call to "notify" (defined at: ./src/contracts/index.rsh:111:38:function exp)', 'at ./src/contracts/index.rsh:111:38:application call to [unknown function] (defined at: ./src/contracts/index.rsh:111:38:function exp)'],
          msg: 'out',
          who: 'Voters_downvote'
          });
        }
      else {
        }
      
      const v3261 = v862;
      const v3262 = v1015;
      const v3263 = v864;
      const v3264 = v920;
      const v3266 = v872;
      const v3267 = stdlib.gt(v860, v865);
      if (v3267) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    case 'Voters_upvote0_90': {
      const v1032 = v919[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_downvoted9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_downvoted9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_downvoted9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10], ['blockCreated', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_454: ctc6,
    Voters_created0_454: ctc12,
    Voters_downvoted0_454: ctc6,
    Voters_projectDown0_454: ctc13,
    Voters_timedOut0_454: ctc6,
    Voters_upvoted0_454: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1233 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:222:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:222:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to "runVoters_downvoted0_454" (defined at: ./src/contracts/index.rsh:222:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:197:37:function exp)'],
    msg: 'in',
    who: 'Voters_downvoted'
    });
  const v1243 = ['Voters_downvoted0_454', v1233];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1243],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
      
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_downvoted"
            });
          ;
          const v1524 = v1478[stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:spread', stdlib.UInt_max, '0')];
          const v1525 = v1478[stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:spread', stdlib.UInt_max, '1')];
          const v1526 = null;
          const v1527 = await txn1.getOutput('Voters_downvoted', 'v1526', ctc0, v1526);
          
          const v1534 = 'downvoted           ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
  switch (v1291[0]) {
    case 'Voters_contributed0_454': {
      const v1294 = v1291[1];
      return;
      break;
      }
    case 'Voters_created0_454': {
      const v1386 = v1291[1];
      return;
      break;
      }
    case 'Voters_downvoted0_454': {
      const v1478 = v1291[1];
      undefined /* setApiDetails */;
      ;
      const v1524 = v1478[stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:spread', stdlib.UInt_max, '0')];
      const v1525 = v1478[stdlib.checkedBigNumberify('./src/contracts/index.rsh:222:11:spread', stdlib.UInt_max, '1')];
      const v1526 = null;
      const v1527 = await txn1.getOutput('Voters_downvoted', 'v1526', ctc0, v1526);
      if (v690) {
        stdlib.protect(ctc0, await interact.out(v1478, v1527), {
          at: './src/contracts/index.rsh:222:12:application',
          fs: ['at ./src/contracts/index.rsh:222:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:222:12:function exp)', 'at ./src/contracts/index.rsh:223:15:application call to "notify" (defined at: ./src/contracts/index.rsh:222:51:function exp)', 'at ./src/contracts/index.rsh:222:51:application call to [unknown function] (defined at: ./src/contracts/index.rsh:222:51:function exp)'],
          msg: 'out',
          who: 'Voters_downvoted'
          });
        }
      else {
        }
      
      const v1534 = 'downvoted           ';
      null;
      return;
      
      break;
      }
    case 'Voters_projectDown0_454': {
      const v1570 = v1291[1];
      return;
      break;
      }
    case 'Voters_timedOut0_454': {
      const v1662 = v1291[1];
      return;
      break;
      }
    case 'Voters_upvoted0_454': {
      const v1754 = v1291[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_projectDown9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_projectDown9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_projectDown9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc10 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc11 = stdlib.T_Contract;
  const ctc12 = stdlib.T_Struct([['id', ctc3], ['title', ctc8], ['link', ctc9], ['description', ctc10], ['owner', ctc1], ['contractInfo', ctc11], ['blockCreated', ctc3]]);
  const ctc13 = stdlib.T_Tuple([ctc12]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_454: ctc7,
    Voters_created0_454: ctc13,
    Voters_downvoted0_454: ctc7,
    Voters_projectDown0_454: ctc6,
    Voters_timedOut0_454: ctc7,
    Voters_upvoted0_454: ctc7
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1275 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:243:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:243:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to "runVoters_projectDown0_454" (defined at: ./src/contracts/index.rsh:243:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:197:37:function exp)'],
    msg: 'in',
    who: 'Voters_projectDown'
    });
  const v1282 = ['Voters_projectDown0_454', v1275];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1282],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:243:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
      
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_projectDown"
            });
          ;
          const v1628 = v1570[stdlib.checkedBigNumberify('./src/contracts/index.rsh:243:11:spread', stdlib.UInt_max, '0')];
          const v1629 = null;
          const v1630 = await txn1.getOutput('Voters_projectDown', 'v1629', ctc0, v1629);
          
          const v1636 = 'projectDown         ';
          const v1637 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:246:56:decimal', stdlib.UInt_max, '0');
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
  switch (v1291[0]) {
    case 'Voters_contributed0_454': {
      const v1294 = v1291[1];
      return;
      break;
      }
    case 'Voters_created0_454': {
      const v1386 = v1291[1];
      return;
      break;
      }
    case 'Voters_downvoted0_454': {
      const v1478 = v1291[1];
      return;
      break;
      }
    case 'Voters_projectDown0_454': {
      const v1570 = v1291[1];
      undefined /* setApiDetails */;
      ;
      const v1628 = v1570[stdlib.checkedBigNumberify('./src/contracts/index.rsh:243:11:spread', stdlib.UInt_max, '0')];
      const v1629 = null;
      const v1630 = await txn1.getOutput('Voters_projectDown', 'v1629', ctc0, v1629);
      if (v690) {
        stdlib.protect(ctc0, await interact.out(v1570, v1630), {
          at: './src/contracts/index.rsh:243:12:application',
          fs: ['at ./src/contracts/index.rsh:243:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:243:12:function exp)', 'at ./src/contracts/index.rsh:244:15:application call to "notify" (defined at: ./src/contracts/index.rsh:243:47:function exp)', 'at ./src/contracts/index.rsh:243:47:application call to [unknown function] (defined at: ./src/contracts/index.rsh:243:47:function exp)'],
          msg: 'out',
          who: 'Voters_projectDown'
          });
        }
      else {
        }
      
      const v1636 = 'projectDown         ';
      const v1637 = stdlib.checkedBigNumberify('./src/contracts/index.rsh:246:56:decimal', stdlib.UInt_max, '0');
      null;
      return;
      
      break;
      }
    case 'Voters_timedOut0_454': {
      const v1662 = v1291[1];
      return;
      break;
      }
    case 'Voters_upvoted0_454': {
      const v1754 = v1291[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_timedOut9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_timedOut9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_timedOut9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10], ['blockCreated', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_454: ctc6,
    Voters_created0_454: ctc12,
    Voters_downvoted0_454: ctc6,
    Voters_projectDown0_454: ctc13,
    Voters_timedOut0_454: ctc6,
    Voters_upvoted0_454: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1261 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:236:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:236:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to "runVoters_timedOut0_454" (defined at: ./src/contracts/index.rsh:236:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:197:37:function exp)'],
    msg: 'in',
    who: 'Voters_timedOut'
    });
  const v1271 = ['Voters_timedOut0_454', v1261];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1271],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
      
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_timedOut"
            });
          ;
          const v1731 = v1662[stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:spread', stdlib.UInt_max, '0')];
          const v1732 = v1662[stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:spread', stdlib.UInt_max, '1')];
          const v1733 = null;
          const v1734 = await txn1.getOutput('Voters_timedOut', 'v1733', ctc0, v1733);
          
          const v1741 = 'timedOut            ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
  switch (v1291[0]) {
    case 'Voters_contributed0_454': {
      const v1294 = v1291[1];
      return;
      break;
      }
    case 'Voters_created0_454': {
      const v1386 = v1291[1];
      return;
      break;
      }
    case 'Voters_downvoted0_454': {
      const v1478 = v1291[1];
      return;
      break;
      }
    case 'Voters_projectDown0_454': {
      const v1570 = v1291[1];
      return;
      break;
      }
    case 'Voters_timedOut0_454': {
      const v1662 = v1291[1];
      undefined /* setApiDetails */;
      ;
      const v1731 = v1662[stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:spread', stdlib.UInt_max, '0')];
      const v1732 = v1662[stdlib.checkedBigNumberify('./src/contracts/index.rsh:236:11:spread', stdlib.UInt_max, '1')];
      const v1733 = null;
      const v1734 = await txn1.getOutput('Voters_timedOut', 'v1733', ctc0, v1733);
      if (v690) {
        stdlib.protect(ctc0, await interact.out(v1662, v1734), {
          at: './src/contracts/index.rsh:236:12:application',
          fs: ['at ./src/contracts/index.rsh:236:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:236:12:function exp)', 'at ./src/contracts/index.rsh:237:15:application call to "notify" (defined at: ./src/contracts/index.rsh:236:50:function exp)', 'at ./src/contracts/index.rsh:236:50:application call to [unknown function] (defined at: ./src/contracts/index.rsh:236:50:function exp)'],
          msg: 'out',
          who: 'Voters_timedOut'
          });
        }
      else {
        }
      
      const v1741 = 'timedOut            ';
      null;
      return;
      
      break;
      }
    case 'Voters_upvoted0_454': {
      const v1754 = v1291[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Voters_upvote4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_upvote4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_upvote4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Data({
    Voters_contribute0_90: ctc7,
    Voters_downvote0_90: ctc6,
    Voters_upvote0_90: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [v843, v851, v852, v860, v862, v863, v864, v865, v872] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v884 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:107:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:107:11:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to "runVoters_upvote0_90" (defined at: ./src/contracts/index.rsh:107:11:function exp)', 'at ./src/contracts/index.rsh:104:56:application call to [unknown function] (defined at: ./src/contracts/index.rsh:104:56:function exp)'],
    msg: 'in',
    who: 'Voters_upvote'
    });
  const v888 = ['Voters_upvote0_90', v884];
  
  const txn1 = await (ctc.sendrecv({
    args: [v843, v851, v852, v860, v862, v863, v864, v865, v872, v888],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:107:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn1;
      
      switch (v919[0]) {
        case 'Voters_contribute0_90': {
          const v922 = v919[1];
          
          break;
          }
        case 'Voters_downvote0_90': {
          const v977 = v919[1];
          
          break;
          }
        case 'Voters_upvote0_90': {
          const v1032 = v919[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_upvote"
            });
          ;
          const v1079 = stdlib.safeAdd(v864, stdlib.checkedBigNumberify('./src/contracts/index.rsh:108:25:decimal', stdlib.UInt_max, '1'));
          const v1080 = await txn1.getOutput('Voters_upvote', 'v1079', ctc3, v1079);
          
          const v3332 = v862;
          const v3333 = v863;
          const v3334 = v1079;
          const v3335 = v920;
          const v3337 = v872;
          const v3338 = stdlib.gt(v860, v865);
          if (v3338) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v843,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc1, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v919], secs: v921, time: v920, didSend: v252, from: v918 } = txn1;
  switch (v919[0]) {
    case 'Voters_contribute0_90': {
      const v922 = v919[1];
      return;
      break;
      }
    case 'Voters_downvote0_90': {
      const v977 = v919[1];
      return;
      break;
      }
    case 'Voters_upvote0_90': {
      const v1032 = v919[1];
      undefined /* setApiDetails */;
      ;
      const v1079 = stdlib.safeAdd(v864, stdlib.checkedBigNumberify('./src/contracts/index.rsh:108:25:decimal', stdlib.UInt_max, '1'));
      const v1080 = await txn1.getOutput('Voters_upvote', 'v1079', ctc3, v1079);
      if (v252) {
        stdlib.protect(ctc0, await interact.out(v1032, v1080), {
          at: './src/contracts/index.rsh:107:12:application',
          fs: ['at ./src/contracts/index.rsh:107:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:107:12:function exp)', 'at ./src/contracts/index.rsh:108:15:application call to "notify" (defined at: ./src/contracts/index.rsh:107:36:function exp)', 'at ./src/contracts/index.rsh:107:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:107:36:function exp)'],
          msg: 'out',
          who: 'Voters_upvote'
          });
        }
      else {
        }
      
      const v3332 = v862;
      const v3333 = v863;
      const v3334 = v1079;
      const v3335 = v920;
      const v3337 = v872;
      const v3338 = stdlib.gt(v860, v865);
      if (v3338) {
        return;
        }
      else {
        ;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Voters_upvoted9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Voters_upvoted9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Voters_upvoted9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc6 = stdlib.T_Tuple([ctc3, ctc3]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '25'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '150'));
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '180'));
  const ctc10 = stdlib.T_Contract;
  const ctc11 = stdlib.T_Struct([['id', ctc3], ['title', ctc7], ['link', ctc8], ['description', ctc9], ['owner', ctc1], ['contractInfo', ctc10], ['blockCreated', ctc3]]);
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Tuple([ctc3]);
  const ctc14 = stdlib.T_Data({
    Voters_contributed0_454: ctc6,
    Voters_created0_454: ctc12,
    Voters_downvoted0_454: ctc6,
    Voters_projectDown0_454: ctc13,
    Voters_timedOut0_454: ctc6,
    Voters_upvoted0_454: ctc6
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc4;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  const map2_ctc = ctc5;
  const map2 = stdlib.newMap({
    ctc: ctc,
    idx: 2,
    isAPI: true,
    ty: map2_ctc
    });
  
  
  const [] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), []);
  const v1219 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/index.rsh:1:23:application',
    fs: ['at ./src/contracts/index.rsh:215:11:application call to [unknown function] (defined at: ./src/contracts/index.rsh:215:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to "runVoters_upvoted0_454" (defined at: ./src/contracts/index.rsh:215:11:function exp)', 'at ./src/contracts/index.rsh:197:37:application call to [unknown function] (defined at: ./src/contracts/index.rsh:197:37:function exp)'],
    msg: 'in',
    who: 'Voters_upvoted'
    });
  const v1229 = ['Voters_upvoted0_454', v1219];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1229],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc14],
    pay: [stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      stdlib.simMapDupe(sim_r, 2, map2);
      
      const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
      
      switch (v1291[0]) {
        case 'Voters_contributed0_454': {
          const v1294 = v1291[1];
          
          break;
          }
        case 'Voters_created0_454': {
          const v1386 = v1291[1];
          
          break;
          }
        case 'Voters_downvoted0_454': {
          const v1478 = v1291[1];
          
          break;
          }
        case 'Voters_projectDown0_454': {
          const v1570 = v1291[1];
          
          break;
          }
        case 'Voters_timedOut0_454': {
          const v1662 = v1291[1];
          
          break;
          }
        case 'Voters_upvoted0_454': {
          const v1754 = v1291[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Voters_upvoted"
            });
          ;
          const v1835 = v1754[stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:spread', stdlib.UInt_max, '0')];
          const v1836 = v1754[stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:spread', stdlib.UInt_max, '1')];
          const v1837 = null;
          const v1838 = await txn1.getOutput('Voters_upvoted', 'v1837', ctc0, v1837);
          
          const v1845 = 'upvoted             ';
          null;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc14],
    waitIfNotPresent: false
    }));
  const {data: [v1291], secs: v1293, time: v1292, didSend: v690, from: v1290 } = txn1;
  switch (v1291[0]) {
    case 'Voters_contributed0_454': {
      const v1294 = v1291[1];
      return;
      break;
      }
    case 'Voters_created0_454': {
      const v1386 = v1291[1];
      return;
      break;
      }
    case 'Voters_downvoted0_454': {
      const v1478 = v1291[1];
      return;
      break;
      }
    case 'Voters_projectDown0_454': {
      const v1570 = v1291[1];
      return;
      break;
      }
    case 'Voters_timedOut0_454': {
      const v1662 = v1291[1];
      return;
      break;
      }
    case 'Voters_upvoted0_454': {
      const v1754 = v1291[1];
      undefined /* setApiDetails */;
      ;
      const v1835 = v1754[stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:spread', stdlib.UInt_max, '0')];
      const v1836 = v1754[stdlib.checkedBigNumberify('./src/contracts/index.rsh:215:11:spread', stdlib.UInt_max, '1')];
      const v1837 = null;
      const v1838 = await txn1.getOutput('Voters_upvoted', 'v1837', ctc0, v1837);
      if (v690) {
        stdlib.protect(ctc0, await interact.out(v1754, v1838), {
          at: './src/contracts/index.rsh:215:12:application',
          fs: ['at ./src/contracts/index.rsh:215:12:application call to [unknown function] (defined at: ./src/contracts/index.rsh:215:12:function exp)', 'at ./src/contracts/index.rsh:216:15:application call to "notify" (defined at: ./src/contracts/index.rsh:215:49:function exp)', 'at ./src/contracts/index.rsh:215:49:application call to [unknown function] (defined at: ./src/contracts/index.rsh:215:49:function exp)'],
          msg: 'out',
          who: 'Voters_upvoted'
          });
        }
      else {
        }
      
      const v1845 = 'upvoted             ';
      null;
      return;
      
      break;
      }
    }
  
  
  };
export async function Voters_claimRefund(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_claimRefund expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_claimRefund expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Voters_claimRefund6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_contribute(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_contribute expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_contribute expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Voters_contribute4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_contributed(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_contributed expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_contributed expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Voters_contributed9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_created(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_created expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_created expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Voters_created9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_downvote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_downvote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_downvote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Voters_downvote4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_downvoted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_downvoted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_downvoted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Voters_downvoted9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_projectDown(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_projectDown expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_projectDown expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Voters_projectDown9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_timedOut(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_timedOut expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_timedOut expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Voters_timedOut9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_upvote(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_upvote expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_upvote expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Voters_upvote4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Voters_upvoted(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voters_upvoted expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voters_upvoted expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Voters_upvoted9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Voters_claimRefund()(byte,uint64)`, `Voters_contribute(uint64)uint64`, `Voters_contributed(uint64,uint64)byte[0]`, `Voters_created((uint64,byte[25],byte[150],byte[180],address,uint64,uint64))byte[0]`, `Voters_downvote()uint64`, `Voters_downvoted(uint64,uint64)byte[0]`, `Voters_projectDown(uint64)byte[0]`, `Voters_timedOut(uint64,uint64)byte[0]`, `Voters_upvote()uint64`, `Voters_upvoted(uint64,uint64)byte[0]`],
    pure: [],
    sigs: [`Voters_claimRefund()(byte,uint64)`, `Voters_contribute(uint64)uint64`, `Voters_contributed(uint64,uint64)byte[0]`, `Voters_created((uint64,byte[25],byte[150],byte[180],address,uint64,uint64))byte[0]`, `Voters_downvote()uint64`, `Voters_downvoted(uint64,uint64)byte[0]`, `Voters_projectDown(uint64)byte[0]`, `Voters_timedOut(uint64,uint64)byte[0]`, `Voters_upvote()uint64`, `Voters_upvoted(uint64,uint64)byte[0]`]
    },
  appApproval: `ByAcAAEIBIsDBgMFAkBIWGBocCvz0M6WBvyl3fUHn8WKywyn+8LTDJMDjZ+6uQbfsJmOA9Sw2fsE6Ziv/gSDtcrDAQlQJgUBAAABAQECGLUOO3Jkb3duAAAAAAAAAAAAAAAAAAAAACI1ADEYQQm1KWRJIls1ASRbNQIxGSMSQQAKMQAoIQ+vZkIJgjYaABdJQQENIjUEIzUGSSEQDEAAdUkhEQxAAE5JIRIMQAA3SSETDEAAGiETEkQ2GgE2GgJQNf+AAQU0/1AhBK9QQgD0IRISRDYaATX/gAEDNP9QIRSvUEIA3iEREkQ2GgE1/yg0/1BCBU9JIRUMQAAIIRUSRClCAqwhEBJEKTX/KjT/UCSvUEIFL0khFgxAAFhJIRcMQAA3SSEYDEAAGCEYEkQ2GgE2GgJQNf8rNP9QIQSvUEIAgSEXEkQ2GgE2GgJQNf8oNP9QIQSvUEIAaSEWEkQ2GgE2GgJQNf+AAQQ0/1AhBK9QQgBPSSEZDEAAECEZEkQ2GgE1/yo0/1BCADiBpeXXkgESRCk1/ys0/1Akr1BCBKQ2GgIXNQQ2GgM2GgEXSSUMQASDSSEFDEADakkkDEAB7CQSRCEaNAESRDQESSISTDQCEhFESTUFNf+ABJPeuDE0/1CwNP8iVUkhBgxAANNJJQxAAJBJIQcMQABGIQcSRDT/VwEQNf6ACAAAAAAAAActsCk1B4AYUISrsHVwdm90ZWQAAAAAAAAAAAAAAAAANP5XAAhQNP5XCAhQsCMyBkIHfUg0/1cBEDX+gAgAAAAAAAAGxbApNQeAGFCEq7B0aW1lZE91dAAAAAAAAAAAAAAAADT+VwAIUDT+VwgIULAjMgZCBzpINP9XAQg1/oAIAAAAAAAABl2wKTUHgBhQhKuwcHJvamVjdERvd24AAAAAAAAAAAA0/lAkr1CwIzIGQgb9SSMMQACiSSEIDEAAQ0g0/1cBEDX+gAgAAAAAAAAF9rApNQeAGFCEq7Bkb3dudm90ZWQAAAAAAAAAAAAAADT+VwAIUDT+VwgIULAjMgZCBq1INP8jgZsDWDX+NP41/YAIAAAAAAAABYKwKTUHgARtj167NP1XAAhQNP1XCBlQNP1XIZZQNP1Xt7RQNP2B6wKBIFhQNP0hBCRYUDT9IRQkWFCwIzIGQgZVSDT/VwEQNf6ACAAAAAAAAAUbsCk1B4AYUISrsGNvbnRyaWJ1dGVkAAAAAAAAAAAANP5XAAhQNP5XCAhQsCMyBkIGEiEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSklXACA1/1cgIDX+IQlbNf0hCls1/CEbWzX7IQtbNfohDFs1+SENWzX4IQ5bNfdJNQU19oAEyeiNDDT2ULAxAIgGNlchCUk19CJVQAAGIjX1QgAMNPQjW0k18zX1QgAANPc09Q8xAIgGD1cqASJVIxIQQQCYMQCIBf9XACFJNfMiVUAABzT/NfRCAA0081cBIEk18jX0QgAAsSKyATT1sggjshA09LIHszEAKDEAiAXIKFwqZoAYtQ47cnJlZnVuZFBhc3NlZAAAAAAAAAAANP0WULA0+TT1CTXzgAgAAAAAAAAEfyo08xZQULAqNPMWUDUHNP80/jT9NPw0+zT6NPMyBjT4NPc09QlCBHuAGLUOO3JyZWZ1bmRGYWlsZWQAAAAAAAAAADT9FlCwgAgAAAAAAAAEiSg0+RZQULAoNPkWUDUHNP80/jT9NPw0+zT6NPkyBjT4NPdCBC0lEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSkpKVwAgNf9XICA1/iEJWzX9IQpbNfwhC1s1+yEMWzX6IQ1bNfkhDls1+IAEkSc087AyBjT8D0Q0/zEAEkQjIjT6NPsSTSI0+zT6DU0jEkEATIAYtQ47cnBhc3NlZAAAAAAAAAAAAAAAAAAANP0WULA0+EkJNfexIrIBNPiyCCOyEDT+sgezNP80/jT9NPw09zT7NPoyBjT5NPdCAxQ0+CINQQA2gBi1DjtyZmFpbGVkAAAAAAAAAAAAAAAAAAA0/RZQsDT/NP40/TT8NPs0+jT4MgY0+TT4QgM5JwQ0/RZQsDT/NP40/TT8NPg0+zT6MgY0+TT4QgK5SSMMQAJOSSEGDEABqUglNAESRDQESSISTDQCEhFEKGRJNQNJSkpKSVcAIDX/VyAgNf4hCVs1/SEKWzX8IRtbNfshC1s1+iEMWzX5IQ1bNfghDls190k1BTX2gASR8aeaNPZQsDIGNPwMRDT2IlVJIwxAAG5JIQgMQAA1IQgSRDT5Iwg19YAIAAAAAAAABDc09RZQsDT1FjUHNP80/jT9NPw0+zT6NPUyBjT4NPdCAglINPojCDX1gAgAAAAAAAAD9zT1FlCwNPUWNQc0/zT+NP00/DT7NPU0+TIGNPg090IB10g09lcBCDX1NPUXSTX0Ig1ENPc09Ag18zT0iAMcgAgAAAAAAAADqzTzFlCwNPMWNQcxAIgC9FcqASJVIxJBAE8xAIgC5VchCUk18SJVQAAGIjXyQgAMNPEjW0k18DXyQgAAMQAoMQCIAsAqNPI09AgWUFwhZjT/NP40/TT8NPs09Ag0+jT5MgY0+DTzQgFIMQAoMQCIApMqMQBQXABmMQAoMQCIAoQqNPQWUFwhZjEAKDEAiAJ0KlwqZjT/NP40/TT8NPs09Ag0+jT5MgY0+DTzQgEDIxJEIzQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSVcAIDX/gdQBWzX+STUFSUpJVwAZNf1XGZY1/FevIDX7gc8BWzX6gdcBWzX5gARG3NbCNP1QNPxQNPtQNPoWUDT5FlCwNP8xABJEgAQeGwGJNPoWUDT9UDT8UDQDVyC0UDT7UDEYFlAyBhZQsDT/NPs0+jT+NPkIIiIiMgY0/iJCAGVIgaCNBogBvyI0ARJENARJIhJMNAISEURJNQVJVwC0Nf9XtAEXNf6ABJ5Jq/Y0/1A0/hZRBwhQsDT+QQAiMQA0/1AyBhZQKEsBVwB/ZypLAVd/XWdIIzUBMgY1AkIBByMyBkIAzzX/Nf41/TX8Nfs1+jX5Nfg19zX2NPk0/g1BADM09jT3UDT4FlA0+RZQNPoWUDT7FlA0/BZQNP0WUDT/FlAoSwFXAHhnSCU1ATIGNQJCALKxIrIBNP+yCCOyEDT2sgezQgCDNf81/jX9Nfw1+zX6Nfk1+DX3NfY0/CINQQA0NPY091A0+BZQNPkWUDT6FlA0+xZQNPwWUDT9FlA0/xZQKEsBVwB4Z0ghBTUBMgY1AkIAUCcENPgWULA09jT3NPg0+TT/NPo0+zT9NP40/0L/MTX/STX+QQALIRo1ATIGNQJCAB9CAAAxGSEHEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAAVIIQ+viShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 1,
  mapDataSize: 43,
  stateKeys: 2,
  stateSize: 220,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes20",
                    "name": "elem5",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T3",
                "name": "v844",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v845",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem4",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes20",
                    "name": "elem5",
                    "type": "bytes20"
                  }
                ],
                "internalType": "struct T3",
                "name": "v844",
                "type": "tuple"
              },
              {
                "internalType": "bool",
                "name": "v845",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes25",
                "name": "v849",
                "type": "bytes25"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes22",
                    "name": "elem4",
                    "type": "bytes22"
                  }
                ],
                "internalType": "struct T10",
                "name": "v850",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v851",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v852",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v853",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Voters_contribute0_90",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_downvote0_90",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_upvote0_90",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v919",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1126",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T33",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_contributed0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "internalType": "bytes25",
                            "name": "title",
                            "type": "bytes25"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockCreated",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T31",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T32",
                    "name": "_Voters_created0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_downvoted0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Voters_projectDown0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_timedOut0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_upvoted0_454",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T33",
                "name": "v1291",
                "type": "tuple"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1015",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1079",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "didRefund",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1151",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "didRefund",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1161",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1307",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1410",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1526",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1629",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1733",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1837",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v939",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes25",
        "name": "v1",
        "type": "bytes25"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v6",
        "type": "uint256"
      }
    ],
    "name": "create",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes25",
        "name": "v1",
        "type": "bytes25"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes22",
            "name": "elem4",
            "type": "bytes22"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "v2",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem4",
            "type": "bytes32"
          },
          {
            "internalType": "bytes20",
            "name": "elem5",
            "type": "bytes20"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "v3",
        "type": "tuple"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v4",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v5",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v6",
        "type": "uint256"
      }
    ],
    "name": "created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes20",
        "name": "v0",
        "type": "bytes20"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes20",
        "name": "v0",
        "type": "bytes20"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v1",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v2",
        "type": "uint256"
      }
    ],
    "name": "that",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Voters_claimRefund",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "didRefund",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "internalType": "struct T27",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Voters_contribute",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_contributed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "bytes25",
            "name": "title",
            "type": "bytes25"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes22",
                "name": "elem4",
                "type": "bytes22"
              }
            ],
            "internalType": "struct T10",
            "name": "link",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes20",
                "name": "elem5",
                "type": "bytes20"
              }
            ],
            "internalType": "struct T3",
            "name": "description",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "contractInfo",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "blockCreated",
            "type": "uint256"
          }
        ],
        "internalType": "struct T31",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Voters_created",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Voters_downvote",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_downvoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Voters_projectDown",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_timedOut",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Voters_upvote",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_a1",
        "type": "uint256"
      }
    ],
    "name": "Voters_upvoted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "_Some",
            "type": "address"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap2Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T2",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes25",
                "name": "v849",
                "type": "bytes25"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes22",
                    "name": "elem4",
                    "type": "bytes22"
                  }
                ],
                "internalType": "struct T10",
                "name": "v850",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v851",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v852",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v853",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Voters_contribute0_90",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_downvote0_90",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Voters_upvote0_90",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v919",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v1126",
                "type": "bool"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T33",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_contributed0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "id",
                            "type": "uint256"
                          },
                          {
                            "internalType": "bytes25",
                            "name": "title",
                            "type": "bytes25"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes22",
                                "name": "elem4",
                                "type": "bytes22"
                              }
                            ],
                            "internalType": "struct T10",
                            "name": "link",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes20",
                                "name": "elem5",
                                "type": "bytes20"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "description",
                            "type": "tuple"
                          },
                          {
                            "internalType": "address payable",
                            "name": "owner",
                            "type": "address"
                          },
                          {
                            "internalType": "address payable",
                            "name": "contractInfo",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "blockCreated",
                            "type": "uint256"
                          }
                        ],
                        "internalType": "struct T31",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T32",
                    "name": "_Voters_created0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_downvoted0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_Voters_projectDown0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_timedOut0_454",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem1",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T30",
                    "name": "_Voters_upvoted0_454",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T33",
                "name": "v1291",
                "type": "tuple"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003ef038038062003ef083398101604081905262000026916200038a565b60008055436003556040517fd810a3a9ebc6a081197c2d2e5e6f787dc808de45e539470739c188af7647390c906200006290339084906200045c565b60405180910390a1620000783415600762000165565b806020015160200151156200013757620000d860408051606080820183526000808352835160c08101855281815260208181018390529481018290529182018190526080820181905260a082015290918201908152602001600081525090565b33815260208083015151818301524360408084018290526001600081905591909155516200010991839101620004dc565b604051602081830303815290604052600290805190602001906200012f929190620001f3565b50506200015e565b6200014162000282565b602080820180516001905251439101526200015c816200018f565b505b506200058c565b816200018b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515115620001d85760096000908155436001556040805160208082018490528251808303820181529183019092528051620001d3926002920190620001f3565b505050565b60008080556001819055620001f090600290620002bb565b50565b82805462000201906200054f565b90600052602060002090601f01602090048101928262000225576000855562000270565b82601f106200024057805160ff191683800117855562000270565b8280016001018555821562000270579182015b828111156200027057825182559160200191906001019062000253565b506200027e929150620002f5565b5090565b6040518060400160405280600015158152602001620002b66040518060400160405280600015158152602001600081525090565b905290565b508054620002c9906200054f565b6000825580601f10620002da575050565b601f016020900490600052602060002090810190620001f091905b5b808211156200027e5760008155600101620002f6565b604080519081016001600160401b03811182821017156200033d57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160c081016001600160401b03811182821017156200033d57634e487b7160e01b600052604160045260246000fd5b805180151581146200038557600080fd5b919050565b60008183036101008112156200039f57600080fd5b620003a96200030c565b83518152601f198201915060e0821215620003c357600080fd5b620003cd6200030c565b60c0831215620003dc57600080fd5b620003e662000343565b92506020850151835260408501516020840152606085015160408401526080850151606084015260a0850151608084015260c085015160018060601b0319811681146200043257600080fd5b60a08401528281526200044860e0860162000374565b602082810191909152820152949350505050565b60006101208201905060018060a01b0384168252825160208301526020830151620004c7604084018251805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b60208101511515610100840152509392505050565b81516001600160a01b031681526020808301516101008301916200053e90840182805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b50604083015160e083015292915050565b600181811c908216806200056457607f821691505b602082108114156200058657634e487b7160e01b600052602260045260246000fd5b50919050565b613954806200059c6000396000f3fe6080604052600436106101225760003560e01c806383230757116100a5578063cadc2e7a1161006c578063cadc2e7a146102ab578063d02f3fa9146102d8578063d1fc69c8146102eb578063d6f30eb0146102fe578063e886badc14610311578063f3b956931461032457005b806383230757146102285780638759128e1461023d578063a594c15914610262578063a7661d5414610275578063ab53f2c61461028857005b80635bc4fb89116100e95780635bc4fb89146101ba5780636a959486146101cd5780636da017a0146101d557806377e51f4b146101e8578063817d57f3146101fb57005b80631e93b0f11461012b578063245981431461014f57806332a48165146101725780633425537e146101855780633bc5b7bf1461018d57005b3661012957005b005b34801561013757600080fd5b506003545b6040519081526020015b60405180910390f35b61016261015d366004612b27565b610337565b6040519015158152602001610146565b610129610180366004612b49565b61034c565b61013c610370565b34801561019957600080fd5b506101ad6101a8366004612b77565b61037f565b6040516101469190612bc1565b6101296101c8366004612bf9565b610390565b61013c6103b0565b6101296101e3366004612c1d565b6103ba565b6101626101f6366004612b27565b6103da565b34801561020757600080fd5b5061021b610216366004612b77565b6103e6565b6040516101469190612c39565b34801561023457600080fd5b5060015461013c565b6102456103f7565b604080518251151581526020928301519281019290925201610146565b610162610270366004612c6b565b610413565b610129610283366004612c1d565b61041e565b34801561029457600080fd5b5061029d61043e565b604051610146929190612c84565b3480156102b757600080fd5b506102cb6102c6366004612b77565b6104db565b6040516101469190612ce1565b61013c6102e6366004612c6b565b6104ec565b6101626102f9366004612b27565b6104f7565b61012961030c366004612d11565b610503565b61016261031f366004612b27565b610523565b610162610332366004613034565b61052f565b6000610343838361053a565b90505b92915050565b6103546125e9565b61036c610366368490038401846130d4565b82610583565b5050565b600061037a610b30565b905090565b61038761264c565b61034682610b61565b6103986125e9565b61036c6103aa368490038401846131bc565b82610c28565b600061037a611212565b6103c26125e9565b61036c6103d43684900384018461325c565b82611242565b600061034383836117d8565b6103ee61264c565b6103468261181e565b604080518082019091526000808252602082015261037a6118d2565b600061034682611910565b6104266125e9565b61036c610438368490038401846132b6565b8261194b565b600060606000546002808054610453906132ee565b80601f016020809104026020016040519081016040528092919081815260200182805461047f906132ee565b80156104cc5780601f106104a1576101008083540402835291602001916104cc565b820191906000526020600020905b8154815290600101906020018083116104af57829003601f168201915b50505050509050915091509091565b6104e361264c565b61034682611da1565b600061034682611e4f565b60006103438383611e89565b61050b6125e9565b61036c61051d36849003840184613323565b82611ed3565b600061034383836120f3565b60006103468261213c565b600061054461266f565b60208181018051516002905280515160609081015187905290515101510183905261056d6125e9565b6105778282610583565b60a00151949350505050565b6105936009600054146021612177565b81516105ae9015806105a757508251600154145b6022612177565b6000808055600280546105c0906132ee565b80601f01602080910402602001604051908101604052809291908181526020018280546105ec906132ee565b80156106395780601f1061060e57610100808354040283529160200191610639565b820191906000526020600020905b81548152906001019060200180831161061c57829003601f168201915b505050505080602001905181019061065191906133b3565b905061065b61268e565b7f5ebb9a11ff8254b474cecc2b65611c204f4d49ea9fc83f3ed1b711ee2f738081338560405161068c929190613451565b60405180910390a160006020850151515160058111156106ae576106ae612b9b565b14156107745760208085015151015181526106cb3415601b612177565b604051600081527f2b5e229f25e1ec089dba1fa01c19adeb46c77297c22c0ae22e2ad03b10b1cc8b9060200160405180910390a160006040808501919091526a18dbdb9d1c9a589d5d195960aa1b60208084018290528351805191015192516000805160206138ff83398151915293610745939291613569565b60405180910390a161075561276d565b6020808201805160019052514391015261076e8161219d565b50610b2a565b600160208501515151600581111561078e5761078e612b9b565b141561084957602084015151604090810151908201526107b03415601c612177565b604051600081527f83a0f5451e2a86ed5c7012155ec752628b3e5896b1bf19169276704c659a63079060200160405180910390a1600060608085019190915260408083015151805160208201518284015194830151608084015160a085015160c09095015195517f450bb4e01af39e58d4a7b076d231b8e5471c98fcfce7377ecbe233dcd75f19b897610745979596949590949161358b565b600260208501515151600581111561086357610863612b9b565b141561090257602084015151606090810151908201526108853415601d612177565b604051600081527f21e015075526b03e740fedb9ce33fa0d8a5ff6516b38060da9102154578367489060200160405180910390a1600060a084015268191bdddb9d9bdd195960ba1b6080820181905260608201518051602091909101516040516000805160206138ff833981519152936107459390929091613569565b600360208501515151600581111561091c5761091c612b9b565b14156109b4576020840151516080015160a082015261093d3415601e612177565b604051600081527f7af215970419582603a9d7364dec6b04e66d45a9c88aeab152c49604bcab333e9060200160405180910390a1600060c08085018290526a383937b532b1ba2237bbb760a91b90830181905260a0830151516040516000805160206138ff83398151915293610745939291613569565b60046020850151515160058111156109ce576109ce612b9b565b1415610a6e5760208401515160a0015160e08201526109ef3415601f612177565b604051600081527fc33d614791a1e04408b0872a1301cb4e49affb2e04e219dd3b4acf0131218a049060200160405180910390a1600060e080850191909152671d1a5b595913dd5d60c21b61010083018190529082015180516020909101516040516000805160206138ff833981519152936107459390929091613569565b6005602085015151516005811115610a8857610a88612b9b565b1415610b2a576020808501515160c00151610120830152610aab90341590612177565b604051600081527f83316873f82d5121b846c793c34b6aaa3f3a7679d91efecaec860016c5c3c6229060200160405180910390a1600061012080850191909152661d5c1d9bdd195960ca1b61014083018190529082015180516020909101516040516000805160206138ff833981519152936107459390929091613569565b50505050565b6000610b3a6127a0565b60208101515160029052610b4c6125e9565b610b568282610c28565b610100015192915050565b610b6961264c565b60016001600160a01b03831660009081526004602052604090205460ff166001811115610b9857610b98612b9b565b1415610c18576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610bd957610bd9612b9b565b6001811115610bea57610bea612b9b565b81529054610100810460ff16151560208301526201000090046001600160a01b031660409091015292915050565b600080825260208201525b919050565b610c386004600054146010612177565b8151610c53901580610c4c57508251600154145b6011612177565b600080805560028054610c65906132ee565b80601f0160208091040260200160405190810160405280929190818152602001828054610c91906132ee565b8015610cde5780601f10610cb357610100808354040283529160200191610cde565b820191906000526020600020905b815481529060010190602001808311610cc157829003601f168201915b5050505050806020019051810190610cf6919061367c565b9050610d3a6040805160e08101909152600060c082019081528190815260200160008152602001600081526020016000815260200160008152602001600081525090565b610d4b826060015143106012612177565b7fdd7466f900de4f47c6643f109aa37456eaed0fc6ef7ca57aa8d57ee9fff49cf13385604051610d7c929190613699565b60405180910390a16000602085015151516002811115610d9e57610d9e612b9b565b1415610fef5760208085015151015180825251610dbe901515600c612177565b610100820151815151016020820152805151610ddd903414600d612177565b7f38b411d948052e0cd8d1b0866c52470e584b730449c225492e73d97940571fff8160200151604051610e1291815260200190565b60405180910390a1602080820151908401526001610e2f3361181e565b516001811115610e4157610e41612b9b565b1415610f89576000610e5233611da1565b516001811115610e6457610e64612b9b565b1415610e765760006040820152610eb4565b6001610e8133611da1565b516001811115610e9357610e93612b9b565b1415610eb457610ea233611da1565b60409081015160608301819052908201525b3360009081526005602052604090819020805460ff19166001179055810151815151610ee09190612202565b33600090815260056020526040902060010155610efb6127ba565b825181516001600160a01b039182169052602080850151835192169101526040808401518251909101526060808401518251909101526080830151825151610f439190612202565b602080830180519290925260a080860151835183015260c086015183516040015282514360609091015260e0860151835160800152908401519151015261076e8161224f565b3360008181526004602090815260408083208054600161ff01600160b01b031990911662010000909602959095178517905560058252808320805460ff1916851781558551519085015560069091529020805462ff00ff19169091179055610efb6127ba565b600160208501515151600281111561100957611009612b9b565b14156110fe5761101b3415600e612177565b61102a8260a001516001612202565b608082018190526040519081527f59bc49a041e70594bcf6550ab8260280fead26288a2e1b10ebca1a53098ac7479060200160405180910390a1608080820151908401526110766127ba565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201526080808701518486018051919091528682015181519095019490945260c087015184519093019290925282514391015260e0850151825190910152610100840151905160a0015261076e8161224f565b600260208501515151600281111561111857611118612b9b565b1415610b2a5761112a3415600f612177565b6111398260c001516001612202565b60a082018190526040519081527fc60b7c0de3c558a27e6878c001d698cfce7c86b56d7e7cd6a3b2fcb1def1c4d99060200160405180910390a160a08101516101008401526111866127ba565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015184860180519190915260a0808901518251909601959095528685015181519094019390935282514392019190915260e086015182519091015261010085015190519091015261076e8161224f565b600061121c6127a0565b6020810151516001905261122e6125e9565b6112388282610c28565b6080015192915050565b6112526006600054146019612177565b815161126d90158061126657508251600154145b601a612177565b60008080556002805461127f906132ee565b80601f01602080910402602001604051908101604052809291908181526020018280546112ab906132ee565b80156112f85780601f106112cd576101008083540402835291602001916112f8565b820191906000526020600020905b8154815290600101906020018083116112db57829003601f168201915b5050505050806020019051810190611310919061367c565b905061137e604080516101208101825260008082526020808301829052828401829052606083018290526080830182905260a083018290528351808501855282815280820183905260c084015260e08301829052835180850190945281845283015261010081019190915290565b6040805133815285516020808301919091528601515115158183015290517f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe9181900360600190a16113d234156018612177565b60006113dd33611da1565b5160018111156113ef576113ef612b9b565b14156113fe5760008152611438565b600161140933611da1565b51600181111561141b5761141b612b9b565b14156114385761142a33611da1565b604001516020820181905281525b8051610100830151101561144d57600061146c565b60016114583361181e565b51600181111561146a5761146a612b9b565b145b1561169657600061147c33610b61565b51600181111561148e5761148e612b9b565b14156114a95781516001600160a01b031660408201526114f0565b60016114b433610b61565b5160018111156114c6576114c6612b9b565b14156114f0576114d533610b61565b6040908101516001600160a01b031660608301819052908201525b604080820151825191516001600160a01b039091169180156108fc02916000818181858888f1935050505015801561152c573d6000803e3d6000fd5b503360009081526006602052604090819020805462ffffff191690556b1c99599d5b9914185cdcd95960a21b608083018190528382015191516000805160206138df8339815191529261157f92916136fe565b60405180910390a16115998260c0015182600001516123a2565b60a0820190815260c082018051600190529051815160200152516040517fc796103e8b9e2bb8d5af42aa22daa3aa16ac2e11b95bae3e79dceb1b699e59fa916115f5918151151581526020918201519181019190915260400190565b60405180910390a160c0810151835261160c612823565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184519091015260808086015184519091015260a080860151845182015284015182840180519190915280514393019290925260e0850151915101526101008301518251900360208201516060015261076e816123f1565b6b1c99599d5b9911985a5b195960a21b60e0820181905260408084015190516000805160206138df833981519152926116d09290916136fe565b60405180910390a1610100810180516000905260c0830151815160200152516040517fe3d816ae0ae91343fab6f34b50d29bbf0455b3b5fefd986c4d6f274d2363b2f191611731918151151581526020918201519181019190915260400190565b60405180910390a16101008101518352611749612823565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260808087015185519091015260a08087015185519091015260c086015183850180519190915280514394019390935260e0860151835190920191909152610100850151915101526117d1816123f1565b5050505050565b60006117e261266f565b6020818101805151600090528051518201518690525151810151018390526118086125e9565b6118128282610583565b60400151949350505050565b61182661264c565b60016001600160a01b03831660009081526006602052604090205460ff16600181111561185557611855612b9b565b1415610c18576001600160a01b038216600090815260066020526040908190208151606081019092528054829060ff16600181111561189657611896612b9b565b60018111156118a7576118a7612b9b565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60408051808201909152600080825260208201526118ee61288d565b6020810151600090526118ff6125e9565b6119098282611242565b5192915050565b600061191a61266f565b60208101805151600390525151608001518390526119366125e9565b6119408282610583565b60c001519392505050565b61195b6004600054146015612177565b815161197690158061196f57508251600154145b6016612177565b600080805560028054611988906132ee565b80601f01602080910402602001604051908101604052809291908181526020018280546119b4906132ee565b8015611a015780601f106119d657610100808354040283529160200191611a01565b820191906000526020600020905b8154815290600101906020018083116119e457829003601f168201915b5050505050806020019051810190611a19919061367c565b604080516080810182526000808252602082018190529181018290526060810191909152909150611a5282606001514310156017612177565b60408051338152855160208083019190915286015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1611aa534156013612177565b8151611abd906001600160a01b031633146014612177565b60018260c001518360a0015111611aeb578260a001518360c0015114611ae4576001611aee565b6000611aee565b60005b1415611c0357651c185cdcd95960d21b80825260408084015190516000805160206138df83398151915292611b249290916136fe565b60405180910390a1600060208281018290528301516101008401516040516001600160a01b03909216926108fc8215029290818181858888f19350505050158015611b73573d6000803e3d6000fd5b50611b7c6127ba565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201526060808601518451820152848301805184860180519190915260a08089015182519096019590955260c088015181519094019390935282514392019190915260e08601518251608001525190519091015261076e8161224f565b61010082015115611cd6576519985a5b195960d21b60408083018290528381015190516000805160206138df83398151915292611c419290916136fe565b60405180910390a1611c51612823565b825181516001600160a01b03918216905260208085015183519216918101919091526040808501518351820152606080860151845182015260a08087015185516080015260c08701518551909101526101008601805184860180519190915280514395019490945260e087015184519093019290925290519151015261076e816123f1565b633237bbb760e11b6060820181905260408084015190516000805160206138df83398151915292611d089290916136fe565b60405180910390a1611d186127ba565b825181516001600160a01b0391821690526020808501518351921691810191909152604080850151835182015260608086015184518201526101008601805184860180519190915260a08089015182519096019590955260c088015181519094019390935282514392019190915260e0860151825160800152519051909101526117d18161224f565b611da961264c565b60016001600160a01b03831660009081526005602052604090205460ff166001811115611dd857611dd8612b9b565b1415610c18576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff166001811115611e1957611e19612b9b565b6001811115611e2a57611e2a612b9b565b81528154610100900460ff161515602082015260019091015460409091015292915050565b6000611e596127a0565b60208181018051516000905251510151839052611e746125e9565b611e7e8282610c28565b602001519392505050565b6000611e9361266f565b60208181018051516005905280515160c090810151879052905151015101839052611ebc6125e9565b611ec68282610583565b6101200151949350505050565b611ee3600160005414600a612177565b8151611efe901580611ef757508251600154145b600b612177565b600080805560028054611f10906132ee565b80601f0160208091040260200160405190810160405280929190818152602001828054611f3c906132ee565b8015611f895780601f10611f5e57610100808354040283529160200191611f89565b820191906000526020600020905b815481529060010190602001808311611f6c57829003601f168201915b5050505050806020019051810190611fa19190613718565b90507f47636ae4bb017e23345421b5a685880c6e96eba09f33c61e779c950b1fe6dfbe3384604051611fd49291906137b9565b60405180910390a1611fe834156008612177565b8051612000906001600160a01b031633146009612177565b60208084015160608101518151828401519385015160409384015193517f374257462de77cbc216cb91aa2210c3ebccb28324ebe4664f1a9832a8756f3d19561204f959092913090439061358b565b60405180910390a161205f6127ba565b815181516001600160a01b0391821690526020808601805160409081015185519416939092019290925281516060015183518201528301519051608001516120a79190612202565b81516060908101919091526020808301805160009081905281519092018290528051604090810183905281514394019390935291840151825160800152905160a00152610b2a8161224f565b60006120fd61266f565b60208181018051516004905280515160a0908101518790529051510151018390526121266125e9565b6121308282610583565b60e00151949350505050565b600061214661266f565b60208101805151600190525151604001518390526121626125e9565b61216c8282610583565b606001519392505050565b8161036c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b602081015151156121e95760096000908155436001556040805160208101839052015b604051602081830303815290604052600290805190602001906121e49291906128b7565b505050565b600080805560018190556121ff9060029061293b565b50565b60008261220f8382613842565b91508110156103465760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612194565b6020810151608001518151606001511115612349576122c560405180610120016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0390811682528251602090810151909116818301528251604090810151818401528351606090810151818501528285018051516080860152805184015160a080870191909152815184015160c087015281519092015160e0860152510151610100840152600460005543600155516121c09183910161385a565b805151602082015160a001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561238b573d6000803e3d6000fd5b50600080805560018190556121ff9060029061293b565b6000826123af83826138c7565b91508111156103465760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401612194565b604080516020810190915260008152602082015151156125135761246c60405180610120016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b039081168252835160209081015190911681830152835160409081015181840152845160609081015181850152855160809081015190850152855160a0908101519085015282860180515160c0860152805184015160e0860152510151610100840152600660005543600155516124ef9183910161385a565b60405160208183030381529060405260029080519060200190610b2a9291906128b7565b633237bbb760e11b808252825160409081015190516000805160206138df833981519152926125439290916136fe565b60405180910390a16125536127ba565b82515181516001600160a01b039182169052835160209081015183519216918101919091528351604090810151835182015284516060908101518451820152828601805182015184860180519190915287516080908101518251870152885160a090810151835187015283519096015182518501528251909401518151909401939093525101519051909101526121e48161224f565b6040805161018081018252600061014082018181526101608301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806040016040528060008152602001612689612975565b905290565b604080516101a081018252600061016082018181526101808301829052825260208201529081016126bd612988565b81526020016126df604051806040016040528060008152602001600081525090565b815260006020808301829052604080519182018152918152910190815260200160006001600160601b031916815260200161272d604051806040016040528060008152602001600081525090565b815260200160006001600160601b0319168152602001612760604051806040016040528060008152602001600081525090565b8152600060209091015290565b60405180604001604052806000151581526020016126896040518060400160405280600015158152602001600081525090565b604051806040016040528060008152602001612689612a18565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016126896040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610100810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082019290925290819081526020016126896040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180604001604052806000815260200161268960405180602001604052806000151581525090565b8280546128c3906132ee565b90600052602060002090601f0160209004810192826128e5576000855561292b565b82601f106128fe57805160ff191683800117855561292b565b8280016001018555821561292b579182015b8281111561292b578251825591602001919060010190612910565b50612937929150612a2b565b5090565b508054612947906132ee565b6000825580601f10612957575050565b601f0160209004906000526020600020908101906121ff9190612a2b565b6040518060200160405280612689612a40565b604080516101008101825260006020808301828152838501839052845160a080820187528482528184018590528187018590526060808301869052608080840187905281880193909352875160c08082018a52878252958101879052978801869052870185905286820185905286810185905290850195909552938301829052820181905260e082015290815290565b6040518060200160405280612689612afe565b5b808211156129375760008155600101612a2c565b6040805160e081019091528060008152602001612a70604051806040016040528060008152602001600081525090565b8152602001612a7d612988565b8152602001612a9f604051806040016040528060008152602001600081525090565b8152602001612aba6040518060200160405280600081525090565b8152602001612adc604051806040016040528060008152602001600081525090565b8152602001612689604051806040016040528060008152602001600081525090565b6040805160808101909152806000815260200161265b6040518060200160405280600081525090565b60008060408385031215612b3a57600080fd5b50508035926020909101359150565b60006103608284031215612b5c57600080fd5b50919050565b6001600160a01b03811681146121ff57600080fd5b600060208284031215612b8957600080fd5b8135612b9481612b62565b9392505050565b634e487b7160e01b600052602160045260246000fd5b600281106121ff576121ff612b9b565b81516060820190612bd181612bb1565b82526020838101511515908301526040928301516001600160a01b0316929091019190915290565b600060a08284031215612b5c57600080fd5b600060408284031215612b5c57600080fd5b600060408284031215612c2f57600080fd5b6103438383612c0b565b81516060820190612c4981612bb1565b8083525060208301511515602083015260408301511515604083015292915050565b600060208284031215612c7d57600080fd5b5035919050565b82815260006020604081840152835180604085015260005b81811015612cb857858101830151858201606001528201612c9c565b81811115612cca576000606083870101525b50601f01601f191692909201606001949350505050565b81516060820190612cf181612bb1565b808352506020830151151560208301526040830151604083015292915050565b60006101408284031215612b5c57600080fd5b60405160a0810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e0810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715612d5557634e487b7160e01b600052604160045260246000fd5b803566ffffffffffffff1981168114610c2357600080fd5b600060a08284031215612edd57600080fd5b612ee5612d24565b905081358152602082013560208201526040820135604082015260608201356060820152608082013569ffffffffffffffffffff1981168114612f2757600080fd5b608082015292915050565b6001600160601b0319811681146121ff57600080fd5b8035610c2381612b62565b6000818303610200811215612f6757600080fd5b612f6f612d5b565b915082358252612f8160208401612eb3565b6020830152612f938460408501612ecb565b604083015260c060df1982011215612faa57600080fd5b50612fb3612d8c565b60e083013581526101008301356020820152610120830135604082015261014083013560608201526101608301356080820152610180830135612ff581612f32565b60a0820152606082015261300c6101a08301612f48565b608082015261301e6101c08301612f48565b60a08201526101e082013560c082015292915050565b6000610200828403121561304757600080fd5b6103438383612f53565b60006040828403121561306357600080fd5b61306b612dbd565b9050813581526020820135602082015292915050565b6000610200828403121561309457600080fd5b61309c612dee565b90506130a88383612f53565b815292915050565b6000602082840312156130c257600080fd5b6130ca612dee565b9135825250919050565b60008183036103608112156130e857600080fd5b6130f0612dbd565b83358152610340601f198301121561310757600080fd5b61310f612dee565b9150613119612d5b565b60208501356006811061312b57600080fd5b815261313a8660408701613051565b602082015261314c8660808701613081565b604082015261315f866102808701613051565b6060820152613172866102c087016130b0565b6080820152613185866102e08701613051565b60a0820152613198866103208701613051565b60c0820152825260208101919091529392505050565b80151581146121ff57600080fd5b600081830360a08112156131cf57600080fd5b6131d7612dbd565b833581526080601f19830112156131ed57600080fd5b6131f5612dee565b91506131ff612e1f565b60208501356003811061321157600080fd5b815261322086604087016130b0565b60208201526060850135613233816131ae565b60408201526080850135613246816131ae565b6060820152825260208101919091529392505050565b6000818303604081121561326f57600080fd5b613277612dbd565b833581526020601f198301121561328d57600080fd5b613295612dee565b915060208401356132a5816131ae565b825260208101919091529392505050565b6000604082840312156132c857600080fd5b6132d0612dbd565b8235815260208301356132e2816131ae565b60208201529392505050565b600181811c9082168061330257607f821691505b60208210811415612b5c57634e487b7160e01b600052602260045260246000fd5b600081830361014081121561333757600080fd5b61333f612dbd565b8335815261012080601f198401121561335757600080fd5b61335f612d24565b925061336d60208601612eb3565b835261337c8660408701612ecb565b602084015260e085013561338f81612b62565b60408401526101008501356060840152909301356080820152602083015250919050565b6000602082840312156133c557600080fd5b8151612b94816131ae565b8051825260208101516020830152604081015160408301526060810151606083015269ffffffffffffffffffff1960808201511660808301525050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301526001600160601b031960a08201511660a08301525050565b6001600160a01b038381168252825160208084019190915283015151805161038084019291906006811061348757613487612b9b565b60408501526020818101518051606087015290810151608086015250604081015151805160a086015266ffffffffffffff1960208201511660c086015260408101516134d660e08701826133d0565b5060608101516134ea61018087018261340d565b50608081810151841661024087015260a08083015190941661026087015260c091820151610280870152606083015180516102a08801526020908101516102c088015290830151516102e08701529282015180516103008701528301516103208601520151805161034085015201516103609092019190915292915050565b6001600160601b03199390931683526020830191909152604082015260600190565b87815266ffffffffffffff198716602082015261020081016135b060408301886133d0565b6135bd60e083018761340d565b6001600160a01b039485166101a0830152929093166101c08401526101e090920191909152949350505050565b8051610c2381612b62565b6000610120828403121561360857600080fd5b613610612e50565b905061361b826135ea565b8152613629602083016135ea565b602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b6000610120828403121561368f57600080fd5b61034383836135f5565b6001600160a01b0383168152815160208083019190915282015151805160c083019190600381106136cc576136cc612b9b565b8060408501525060208101515160608401526040810151151560808401526060810151151560a0840152509392505050565b6001600160601b0319929092168252602082015260400190565b600081830361010081121561372c57600080fd5b613734612e82565b835161373f81612b62565b815260c0601f198301121561375357600080fd5b61375b612d8c565b91506020840151825260408401516020830152606084015160408301526080840151606083015260a0840151608083015260c084015161379a81612f32565b60a0830152602081019190915260e09290920151604083015250919050565b6001600160a01b038381168252825160208084019190915280840151805166ffffffffffffff191660408501529081015161016084019291906137ff60608601826133d0565b50816040820151166101008501526060810151610120850152608081015161014085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156138555761385561382c565b500190565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e0808301519082015261010080830151908201526101208101610346565b6000828210156138d9576138d961382c565b50039056fe613a70ac8f42dbfde05a0b252a17edc94a6a2b2dd71ba6a9181d0b1c895955c2491c0740fba8ff630ae5eed16981215689f0b4c28063b2eefba6e00c66f2d4c5a2646970667358221220caf492b16f9120e0935fdc51bcb288dee95713ccb0ddfa3e5449707b8a9b29d864736f6c634300080c0033`,
  BytecodeLen: 16112,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/index.rsh:88:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './src/contracts/index.rsh:250:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/index.rsh:104:56:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/index.rsh:159:50:after expr stmt semicolon',
    fs: ['at ./src/contracts/index.rsh:139:36:application call to [unknown function] (defined at: ./src/contracts/index.rsh:139:36:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './src/contracts/index.rsh:250:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './src/contracts/index.rsh:197:37:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Voters_claimRefund": Voters_claimRefund,
  "Voters_contribute": Voters_contribute,
  "Voters_contributed": Voters_contributed,
  "Voters_created": Voters_created,
  "Voters_downvote": Voters_downvote,
  "Voters_downvoted": Voters_downvoted,
  "Voters_projectDown": Voters_projectDown,
  "Voters_timedOut": Voters_timedOut,
  "Voters_upvote": Voters_upvote,
  "Voters_upvoted": Voters_upvoted
  };
export const _APIs = {
  Voters: {
    claimRefund: Voters_claimRefund,
    contribute: Voters_contribute,
    contributed: Voters_contributed,
    created: Voters_created,
    downvote: Voters_downvote,
    downvoted: Voters_downvoted,
    projectDown: Voters_projectDown,
    timedOut: Voters_timedOut,
    upvote: Voters_upvote,
    upvoted: Voters_upvoted
    }
  };
