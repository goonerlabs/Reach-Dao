// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 1,
  LocalNumUint: 0,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"internalType":"struct T7","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"}],"internalType":"struct T16","name":"v3402","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"internalType":"struct T7","name":"elem1","type":"tuple"},{"internalType":"bool","name":"elem2","type":"bool"}],"indexed":false,"internalType":"struct T16","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes25","name":"elem1","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"internalType":"struct T6","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"}],"indexed":false,"internalType":"struct T19","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T11","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"_Voters_contribute0_90","type":"tuple"},{"internalType":"bool","name":"_Voters_downvote0_90","type":"bool"},{"internalType":"bool","name":"_Voters_upvote0_90","type":"bool"}],"internalType":"struct T11","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T12","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T14","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_contributed0_454","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes25","name":"title","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"internalType":"struct T6","name":"link","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"internalType":"struct T7","name":"description","type":"tuple"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"}],"internalType":"struct T8","name":"elem0","type":"tuple"}],"internalType":"struct T13","name":"_Voters_created0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_downvoted0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"_Voters_projectDown0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_timedOut0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_upvoted0_454","type":"tuple"}],"internalType":"struct T14","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v1015","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v1079","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"didRefund","type":"bool"},{"internalType":"uint256","name":"balance","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v1151","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"bool","name":"didRefund","type":"bool"},{"internalType":"uint256","name":"balance","type":"uint256"}],"indexed":false,"internalType":"struct T3","name":"v0","type":"tuple"}],"name":"_reach_oe_v1161","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1307","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1410","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1526","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1629","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1733","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1837","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v939","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"bytes25","name":"v1","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"indexed":false,"internalType":"struct T7","name":"v3","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"address payable","name":"v5","type":"address"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"}],"name":"create","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"bytes25","name":"v1","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"indexed":false,"internalType":"struct T6","name":"v2","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"indexed":false,"internalType":"struct T7","name":"v3","type":"tuple"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"address payable","name":"v5","type":"address"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"that","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Voters_claimRefund","outputs":[{"components":[{"internalType":"bool","name":"didRefund","type":"bool"},{"internalType":"uint256","name":"balance","type":"uint256"}],"internalType":"struct T3","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3354","type":"uint256"}],"name":"Voters_contribute","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3359","type":"uint256"},{"internalType":"uint256","name":"v3360","type":"uint256"}],"name":"Voters_contributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes25","name":"title","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"internalType":"struct T6","name":"link","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"internalType":"struct T7","name":"description","type":"tuple"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"}],"internalType":"struct T8","name":"v3365","type":"tuple"}],"name":"Voters_created","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Voters_downvote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3374","type":"uint256"},{"internalType":"uint256","name":"v3375","type":"uint256"}],"name":"Voters_downvoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3380","type":"uint256"}],"name":"Voters_projectDown","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3385","type":"uint256"},{"internalType":"uint256","name":"v3386","type":"uint256"}],"name":"Voters_timedOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Voters_upvote","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3395","type":"uint256"},{"internalType":"uint256","name":"v3396","type":"uint256"}],"name":"Voters_upvoted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_0Ref","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_1Ref","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"uint256","name":"_Some","type":"uint256"}],"internalType":"struct T1","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"_reachm_2Ref","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"bool","name":"_Some","type":"bool"}],"internalType":"struct T2","name":"res","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes25","name":"elem1","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"internalType":"struct T6","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"}],"internalType":"struct T19","name":"v3406","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T11","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"_Voters_contribute0_90","type":"tuple"},{"internalType":"bool","name":"_Voters_downvote0_90","type":"bool"},{"internalType":"bool","name":"_Voters_upvote0_90","type":"bool"}],"internalType":"struct T11","name":"elem1","type":"tuple"}],"internalType":"struct T12","name":"v3414","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"v3440","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T9","name":"v3464","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T14","name":"which","type":"uint8"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_contributed0_454","type":"tuple"},{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes25","name":"title","type":"bytes25"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes22","name":"elem4","type":"bytes22"}],"internalType":"struct T6","name":"link","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes20","name":"elem5","type":"bytes20"}],"internalType":"struct T7","name":"description","type":"tuple"},{"internalType":"address payable","name":"owner","type":"address"},{"internalType":"address payable","name":"contractInfo","type":"address"},{"internalType":"uint256","name":"blockCreated","type":"uint256"}],"internalType":"struct T8","name":"elem0","type":"tuple"}],"internalType":"struct T13","name":"_Voters_created0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_downvoted0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T10","name":"_Voters_projectDown0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_timedOut0_454","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Voters_upvoted0_454","type":"tuple"}],"internalType":"struct T14","name":"elem1","type":"tuple"}],"internalType":"struct T15","name":"v3474","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620052e390813803601f19601f90808284011684019460018060401b039385871085881117620004da578086926040988952833981010361010094858212620004f05760c0838851936200005585620004f5565b835185520112620004f0578651926200006e8462000511565b60209182810151855288810151838601526060810151898601526080810151606086015260a0810151608086015260c08101519060018060601b031982168203620004f05760e09160a08701528385019586520151928315158403620004f057888101938452436003558851610160810181811089821117620004da578a52600094858252620000fd6200052d565b85830152858b8301528560608301528560808301528560a08301528560c08301528560e0830152858a83015285610140610120938285820152015260049260ff845416620004c3577f7815fd441ee471a217efac15a3de2b16666fae30134a9fd334d4e6f700026bed838d6200018481519133835285518b8401528c519083019062000557565b84511515818f0152a1518015908115620004b6575b50156200049f5734620004885751156200036b57895198620001bb8a620004f5565b858a52848a01968b51620001cf8162000511565b8781528787820152878d8201528760608201528760808201528760a082015288528b8b019a878c52339052518752438a526001998a8755438b55620002208c519833888b0152518d8a019062000557565b518188015286528501858110888211176200035857895284519687116200034557506200024f60025462000598565b85811162000309575b5081948611600114620002a15750509183949184939462000295575b50501b916000199060031b1c1916176002555b51614cf49081620005ef8239f35b01519250388062000274565b600283528183209493928692918316915b88838310620002ee5750505010620002d4575b505050811b0160025562000287565b015160001960f88460031b161c19169055388080620002c5565b858701518855909601959485019487935090810190620002b2565b62000334906002855283852087808a0160051c820192868b106200033b575b0160051c0190620005d5565b3862000258565b9250819262000328565b634e487b7160e01b845260419052602483fd5b634e487b7160e01b855260418252602485fd5b50935095506200037a6200052d565b95600196878152824391015260098355438755875193838386015282855288850185811088821117620003585789528451968711620003455750620003c160025462000598565b85811162000457575b50819486116001146200040a57505091839491849394620003fe575b50501b916000199060031b1c19161760025562000287565b015192503880620003e6565b600283528183209493928692918316915b888383106200043c5750505010620002d457505050811b0160025562000287565b8587015188559096019594850194879350908101906200041b565b62000481906002855283852087808a0160051c820192868b106200033b570160051c0190620005d5565b38620003ca565b8a5163100960cb60e01b8152600981850152602490fd5b8a5163100960cb60e01b8152600881850152602490fd5b9050600154143862000199565b8b5163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620004da57604052565b60c081019081106001600160401b03821117620004da57604052565b60408051919082016001600160401b03811183821017620004da5760405260006020838281520152565b805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b90600182811c92168015620005ca575b6020831014620005b457565b634e487b7160e01b600052602260045260246000fd5b91607f1691620005a8565b818110620005e1575050565b60008155600101620005d556fe60806040526004361015610018575b361561001657005b005b60003560e01c80631ad4ef2814611af05780631bd73909146115a45780631e93b0f11461158657806324598143146115295780633425537e146114ea57806336e56ea514611488578063435b8f541461121c5780636a959486146111de578063746235351461117d57806377e51f4b1461112157806383230757146111035780638759128e1461108c5780638d9e1a121461104b578063a594c15914610fe9578063ab53f2c614610f75578063c5d86f6f14610f16578063d02f3fa914610e9e578063d1fc69c814610e40578063d3c64a7a146102ee578063e886badc146102905763f3b956930361000e5761020036600319011261028b57610119611f98565b60405161012581611c5e565b60043581526024359166ffffffffffffff198316830361028b576020928383015260a060431936011261028b5760405161015e81611ce6565b604435815260643584820152608435604082015260a435606082015260c4356001600160501b03198116810361028b576080820152604083015260c03660e319011261028b576040516101b081611c43565b60e43581526101043584820152610124356040820152610144356060820152610164356080820152610184356001600160601b03198116810361028b5760a082015260608301526001600160a01b03916101a435838116810361028b5760808201526101c435928316830361028b57818160809460a061027f9401526101e43560c082015260405161024181611c28565b610249612053565b81528681019161025761210e565b83528151526001825152516040825101526102706121d8565b90600082525186820152613dd0565b01511515604051908152f35b600080fd5b602061010061027f6102a136611ba0565b91906102ab611f98565b928391604051916102bb83611c28565b87830191835281526102cb6121a7565b91518251525186825101528581019060048251525160a0825101526102706121d8565b602036600319011261028b57610302611f98565b5060405161030f81611c79565b60043581526040519061032182611c94565b6000825260006020830152600060408301526000606083015260ff60045416610e27577fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d46040805133815283516020820152a1600460005403610e0e57610386611d39565b80518101906101208183031261028b576020806103a593019101612208565b90518015908115610e02575b5015610de95760608101514310610dd05734610db7578051336001600160a01b0390911603610d9e5760a081015160c082015180821115610d88575050600160005b036106e757651c185cdcd95960d21b80835260408281015181519283526020830152600080516020614ca883398151915291a1600060208381018290528201516101008301518291829182916001600160a01b03168282156106de575bf1156106c95761045e6122a5565b9160018060a01b038251169081845260018060a01b03602084015116602085015260408301516040850152602060e060608501519485606088015282840151608088015260a081015160a088015260c081015160c0880152438288015201519182610100870152015192836101208601521160001461069c5750506101206104e4614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e08401520151610100820152600460005543600155610561604051916020830190614c27565b610120815261056f81611d1d565b80516001600160401b0381116106865761058a600254611bee565b601f811161063e575b50602091601f82116001146105d9579181926000926105ce575b50508160011b916000199060031b1c1916176002555b602060405160008152f35b0151905082806105ad565b601f19821692600260005260206000209160005b8581106106265750836001951061060d575b505050811b016002556105c3565b015160001960f88460031b161c191690558280806105ff565b919260206001819286850151815501940192016105ed565b600260005261067690600080516020614c88833981519152601f840160051c8101916020851061067c575b601f0160051c0190614b53565b82610593565b9091508190610669565b634e487b7160e01b600052604160045260246000fd5b6000809350809281928282156106d5575bf1156106c9576000805560006001556106c4614b6a565b6105c3565b6040513d6000823e3d90fd5b506108fc6106ad565b506108fc610450565b61010081015115610b5f57610100906040926519985a5b195960d21b9384910152600080516020614ca8833981519152604080830194855182519182526020820152a16107326122a5565b9260018060a01b03825116845260018060a01b0360208301511660208501525160408401526060810151606084015260a0810151608084015260c081015160a08401528181015160c08401524360e084015260e08101518284015201516101208201526040516107a181611c79565b6000815260c08201511561093157506101206107bb614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e08401520151610100820152600660005543600155610838604051916020830190614c27565b610120815261084681611d1d565b80516001600160401b03811161068657610861600254611bee565b601f81116108f4575b50602091601f82116001146108a95791819260009261089e575b50508160011b916000199060031b1c1916176002556105c3565b015190508280610884565b601f19821692600260005260206000209160005b8581106108dc5750836001951061060d57505050811b016002556105c3565b919260206001819286850151815501940192016108bd565b600260005261092b90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b8261086a565b633237bbb760e11b9081905260408281015181519283526020830152600080516020614ca883398151915291a16109666122a5565b9060018060a01b0381511680835260018060a01b036020830151166020840152604082015160408401526060820151918260608501526101208101516080850152608081015160a085015260a081015160c085015260e081015160e08501526101206101008201519182610100870152015192836101208601521160001461069c5750506101206109f5614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e08401520151610100820152600460005543600155610a72604051916020830190614c27565b6101208152610a8081611d1d565b80516001600160401b03811161068657610a9b600254611bee565b601f8111610b22575b50602091601f8211600114610ad75791819260009261089e5750508160011b916000199060031b1c1916176002556105c3565b601f19821692600260005260206000209160005b858110610b0a5750836001951061060d57505050811b016002556105c3565b91926020600181928685015181550194019201610aeb565b6002600052610b5990600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b82610aa4565b606091633237bbb760e11b9283910152600080516020614ca8833981519152604080830193845182519182526020820152a1610b996122a5565b9160018060a01b038251169081845260018060a01b036020840151166020850152516040840152606082015191826060850152610100810151608085015260a081015160a085015260c081015160c08501524360e085015261010060e0820151918282870152015192836101208601521160001461069c575050610120610c1e614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e08401520151610100820152600460005543600155610c9b604051916020830190614c27565b6101208152610ca981611d1d565b80516001600160401b03811161068657610cc4600254611bee565b601f8111610d4b575b50602091601f8211600114610d005791819260009261089e5750508160011b916000199060031b1c1916176002556105c3565b601f19821692600260005260206000209160005b858110610d335750836001951061060d57505050811b016002556105c3565b91926020600181928685015181550194019201610d14565b6002600052610d8290600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b82610ccd565b03610d9657600160006103f3565b6001806103f3565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b905060015414836103b1565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b602061014061027f610e5136611ba0565b9190610e5b611f98565b92839160405191610e6b83611c28565b8783019183528152610e7b6121a7565b91518251525186825101528581019060058251525160c0825101526102706121d8565b602036600319011261028b5760206040610eb6611f98565b610f0c818351610ec581611c28565b8451610ed081611c79565b60008152815285810190610ee2611fff565b82526004358151526000825152518682510152610efd612032565b90600082525186820152612302565b0151604051908152f35b3461028b57602036600319011261028b576004356001600160a01b038116810361028b57610f4e606091610f48611dee565b50611e9a565b60408051918051610f5e81611bb6565b835260208101511515602084015201516040820152f35b3461028b57600036600319011261028b57600054610f91611d39565b6040519182528160206040818301528251908160408401526000935b828510610fd0575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610fad565b602036600319011261028b57602060e0611001611f98565b61027f8160405161101181611c28565b60405161101d81611c79565b6000815281528581019061102f61210e565b82526004358151526003825152516080825101526102706121d8565b604036600319011261028b5761105f611f98565b6040519061106c82611c28565b600435825260243591821515830361028b576105c3926020820152613076565b600036600319011261028b57600060206040516110a881611c28565b82815201526110ff60206110ba611f98565b6110f1816040516110ca81611c79565b60008152604051906110db82611c28565b8582019060008252600083525115159052613076565b015160405191829182611bd6565b0390f35b3461028b57600036600319011261028b576020600154604051908152f35b606061112c36611ba0565b919061027f611139611f98565b80926040519061114882611c28565b602096878301918352815261115b6121a7565b91518251525186825101528581019060008251525186825101526102706121d8565b3461028b57602036600319011261028b576004356001600160a01b038116810361028b576111b56060916111af611dee565b50611f1d565b604080519180516111c581611bb6565b8352602081015115156020840152015115156040820152f35b600036600319011261028b57602060a06111f6611f98565b610f0c81611202612032565b858101906001825152511515604082510152610efd612032565b61036036600319011261028b57611231611f98565b6040519061123e82611c28565b600435825261034036602319011261028b576040519061125d82611c5e565b602435600681101561028b578252604036604319011261028b576040519261128484611c28565b6044358452602093606435858201528484015261020060831936011261028b576040516112b081611c79565b6040516112bc81611c5e565b608435815260a43566ffffffffffffff198116810361028b578187015260a03660c319011261028b576040516112f181611ce6565b60c435815260e43587820152610104356040820152610124356060820152610144356001600160501b03198116810361028b576080820152604082015260c03661016319011261028b5760405161134781611c43565b61016435815261018435878201526101a43560408201526101c43560608201526101e4356080820152610204356001600160601b03198116810361028b5760a082015260608201526001600160a01b0361022435818116810361028b57608083015261024435908116810361028b5760a08201526102643560c08201528152604084015260406102831936011261028b576040516113e481611c28565b6102843581526102a435858201526060840152836102c31936011261028b5760405161140f81611c79565b6102c435815260808401526040366102e319011261028b5760405161143381611c28565b6102e4358152610304358582015260a084015260403661032319011261028b5761147f9260405161146381611c28565b610324358152610344358682015260c082015284820152613dd0565b60405160008152f35b3461028b57602036600319011261028b576004356001600160a01b03808216820361028b576114c16060926114bb611dee565b50611e0d565b90604080519280516114d281611bb6565b84526020810151151560208501520151166040820152f35b600036600319011261028b576020610120611503611f98565b610f0c8161150f612032565b858101906002825152511515606082510152610efd612032565b602060c061027f61153936611ba0565b9190611543611f98565b9283916040519161155383611c28565b87830191835281526115636121a7565b9151825152518682510152858101906002825152516060825101526102706121d8565b3461028b57600036600319011261028b576020600354604051908152f35b61014036600319011261028b576115b9611f98565b506040516115c681611c43565b600435815260243566ffffffffffffff198116810361028b57602082015260a036604319011261028b576040516115fc81611ce6565b60443581526064356020820152608435604082015260a435606082015260c4356001600160501b03198116810361028b576080820152604082015260e4356001600160a01b038116810361028b5760608201526101043560808201526101243560a082015260ff60045416611ad7577f4ff01c8036538093ba16245e8cb66f56f343b405d82072eb408ede12227c3e316101606040513381528351602082015266ffffffffffffff1960208501511660408201526116c260408501516060830190613cf3565b60608401516001600160a01b0316610100820152608084015161012082015260a0840151610140820152a1600160005403611abe576116ff611d39565b80805181010390610100821261028b57604051916001600160401b0360608401908111908411176106865760c09060608401604052611740602084016121f4565b8452601f19011261028b576040519061175882611c43565b60408101518252606081015160208301526080810151604083015260a0810151606083015260c0810151608083015260e08101519160018060601b03198316830361028b576101009260a082015260208401520151604082015281518015908115611ab2575b5015611a995734611a80578051336001600160a01b0390911603611a67577f374257462de77cbc216cb91aa2210c3ebccb28324ebe4664f1a9832a8756f3d1608083015166ffffffffffffff1960208501511661183d60408601519160208601519360018060a01b036060890151166040519586954394309488613d78565b0390a1604061188161184d6122a5565b83516001600160a01b03908116825260608601511660208201526080850151838201528284015160a0909501519094613062565b9182606085015260006080850152600060a0850152600060c08501524360e085015201519081610100840152600061012084015211600014611a38576101206118c8614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e08401520151610100820152600460005543600155611945604051916020830190614c27565b610120815261195381611d1d565b80516001600160401b0381116106865761196e600254611bee565b601f81116119fb575b50602091601f82116001146119b0579181926000926105ce5750508160011b916000199060031b1c191617600255602060405160008152f35b601f19821692600260005260206000209160005b8581106119e35750836001951061060d57505050811b016002556105c3565b919260206001819286850151815501940192016119c4565b6002600052611a3290600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b82611977565b5160009081908190819081906001600160a01b03166108fcf1156106c9576000805560006001556106c4614b6a565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b905060015414836117be565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b60a036600319011261028b57611b04611f98565b60405190611b1182611c28565b6004358252608036602319011261028b5760405191608083016001600160401b0381118482101761068657604052602435600381101561028b578352602036604319011261028b57604051611b6581611c79565b60443581526020840152606435801515810361028b57604084015260843592831515840361028b576105c39360608201526020820152612302565b604090600319011261028b576004359060243590565b60021115611bc057565b634e487b7160e01b600052602160045260246000fd5b91909160208060408301948051151584520151910152565b90600182811c92168015611c1e575b6020831014611c0857565b634e487b7160e01b600052602260045260246000fd5b91607f1691611bfd565b604081019081106001600160401b0382111761068657604052565b60c081019081106001600160401b0382111761068657604052565b60e081019081106001600160401b0382111761068657604052565b602081019081106001600160401b0382111761068657604052565b608081019081106001600160401b0382111761068657604052565b606081019081106001600160401b0382111761068657604052565b61016081019081106001600160401b0382111761068657604052565b60a081019081106001600160401b0382111761068657604052565b61012081019081106001600160401b0382111761068657604052565b61014081019081106001600160401b0382111761068657604052565b604051906000600254611d4b81611bee565b808552600191808316908115611dcf5750600114611d89575b5050829003601f01601f191682016001600160401b0381118382101761068657604052565b60026000908152602093509183600080516020614c888339815191525b838510611dbb57505050508301013880611d64565b805488860183015293019284908201611da6565b919250506020925060ff191682850152151560051b8301013880611d64565b60405190611dfb82611caf565b60006040838281528260208201520152565b611e15611dee565b6001600160a01b0391821660008181526005602052604081205490929060019060ff16611e4181611bb6565b03611e8b57509060409181526005602052209060405191611e6183611caf565b5460ff8116611e6f81611bb6565b835260ff8160081c161515602084015260101c16604082015290565b80949350829150526020830152565b90611ea3611dee565b9160018060a01b03166000908082526006602052600160ff604084205416611eca81611bb6565b03611f125760409293508152600660205220600160405191611eeb83611caf565b60ff8154818116611efb81611bb6565b855260081c16151560208401520154604082015290565b508083526020830152565b90611f26611dee565b9160018060a01b03166000908082526007602052600160ff604084205416611f4d81611bb6565b03611f12576040929350815260076020522060ff60405191611f6e83611caf565b54818116611f7b81611bb6565b8352818160081c161515602084015260101c161515604082015290565b60405190611fa582611cca565b81610140600091828152604051611fbb81611c28565b83815283602082015260208201528260408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201520152565b6040519061200c82611c94565b600060608382815260405161202081611c79565b83815260208201528260408201520152565b6040519061203f82611c28565b8160008152602061204e611fff565b910152565b60409081519161206283611c79565b8281519161206f83611c5e565b600080845260208401819052815190919060a081016001600160401b038111828210176120fa578252828152826020820152828282015282606082015282608082015281850152818151916120c383611c43565b8183528160208401528201528160608201528160808201528160a082015260608401528060808401528060a084015260c083015252565b634e487b7160e01b84526041600452602484fd5b60409081519161211d83611c5e565b60c083600092838252805161213181611c28565b8481528460208201526020830152612147612053565b81830152805161215681611c28565b8481528460208201526060830152805161216f81611c79565b8481526080830152805161218281611c28565b84815284602082015260a0830152519261219b84611c28565b80845260208401520152565b604051906121b482611c28565b816040516121c181611c28565b60008152600060208201528152602061204e61210e565b604051906121e582611c28565b8160008152602061204e61210e565b51906001600160a01b038216820361028b57565b809291610120918291031261028b576040519081016001600160401b0381118282101761068657604052809261223d816121f4565b825261224b602082016121f4565b602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080910151910152565b516003811015611bc05790565b6040519061014082016001600160401b0381118382101761068657604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b91906040519061231182611c43565b60405161231d81611c79565b60008152825260006020830152600060408301526000606083015260006080830152600060a083015260ff6004541661301e576040513381528451602082015260208501518051916003831015611bc057606060c0927f7146322068d47776d11a14502ba39cc2b8f2e0de86e0aba8bcda584e530c3bae946040840152602081015151828401526040810151151560808401520151151560a0820152a1600460005403613005576123cc611d39565b80518101906101208183031261028b576020806123eb93019101612208565b9380518015908115612ff9575b5015612fe0576060850151431015612fc7576124176020820151612298565b6003811015611bc057612a455760208091015101518083525115612a2c576101008401518251908151016020840152513403612a13577f38b411d948052e0cd8d1b0866c52470e584b730449c225492e73d97940571fff602080840151604051908152a160406020830151910152600161249033611f1d565b5161249a81611bb6565b6124a381611bb6565b036127af576124b133611e9a565b516124bb81611bb6565b6124c481611bb6565b61276f57600060408201525b3360005260066020526040600020600160ff198254161790556124fa604082015182515190613062565b336000526006602052600160406000200155602060e06125186122a5565b85516001600160a01b0390811682528387015116838201526040808701519082015260608087015190820152608086015184515191969161255891613062565b608087015260a081015160a087015260c081015160c08701524382870152015191826101008601520151908161012085015260608401511160001461273057506101206125a3614be2565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501520151610100830152600460005543600155612620604051926020840190614c27565b610120825261262e82611d1d565b81516001600160401b03811161068657612649600254611bee565b601f81116126f3575b50602092601f82116001146126905792819293600092612685575b50508160011b916000199060031b1c1916176002555b565b01519050388061266d565b601f19821693600260005260206000209160005b8681106126db57508360019596106126c2575b505050811b01600255565b015160001960f88460031b161c191690553880806126b7565b919260206001819286850151815501940192016126a4565b600260005261272a90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38612652565b91519091600091829182918291906001600160a01b0316828215612766575bf1156106c957600080556000600155612683614b6a565b506108fc61274f565b600161277a33611e9a565b5161278481611bb6565b61278d81611bb6565b036124d057604061279d33611e9a565b015180606083015260408201526124d0565b336000818152600560209081526040808320805461ff01600160b01b03191660109590951b62010000600160b01b031694909417600190811790945560068252808320805460ff1916851781558551519085015560078252909120805462ff00ff191690921790915560e06128226122a5565b85516001600160a01b0390811682528387015116838201526040808701519082015260608087015190820152608086015184515191969161286291613062565b608087015260a081015160a087015260c081015160c08701524382870152015191826101008601520151908161012085015260608401511160001461273057506101206128ad614be2565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e0850152015161010083015260046000554360015561292a604051926020840190614c27565b610120825261293882611d1d565b81516001600160401b03811161068657612953600254611bee565b601f81116129d6575b50602092601f821160011461298d57928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129be57508360019596106126c257505050811b01600255565b919260206001819286850151815501940192016129a1565b6002600052612a0d90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b3861295c565b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b612a526020820151612298565b6003811015611bc057600103612ce3575034612cca577f59bc49a041e70594bcf6550ab8260280fead26288a2e1b10ebca1a53098ac7476020612a9860a0870151613037565b806080860152604051908152a160a06080830151910152612ab76122a5565b9260018060a01b038151169081855260018060a01b0360208201511660208601526040810151604086015260806060820151938460608801528183015182880152015160a086015260c081015160c08601524360e086015261010060e08201519182828801520151928361012087015211600014612ca2575050610120612b3c614be2565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501520151610100830152600460005543600155612bb9604051926020840190614c27565b6101208252612bc782611d1d565b81516001600160401b03811161068657612be2600254611bee565b601f8111612c65575b50602092601f8211600114612c1c57928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612c4d57508360019596106126c257505050811b01600255565b91926020600181928685015181550194019201612c30565b6002600052612c9c90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38612beb565b6000809394508092819282821561276657f1156106c957600080556000600155612683614b6a565b60405163100960cb60e01b815260156004820152602490fd5b6020612cf0910151612298565b6003811015611bc057600214612d07575b50509050565b34612fae577fc60b7c0de3c558a27e6878c001d698cfce7c86b56d7e7cd6a3b2fcb1def1c4d96020612d3c60c0870151613037565b8060a0860152604051908152a161012060a0830151910152612d5c6122a5565b9260018060a01b038151169081855260018060a01b0360208201511660208601526040810151604086015260a0606082015193846060880152608083015160808801528183015182880152015160c08601524360e086015261010060e08201519182828801520151928361012087015211600014612f77575050610120612de1614be2565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501520151610100830152600460005543600155612e5e604051926020840190614c27565b6101208252612e6c82611d1d565b81516001600160401b03811161068657612e87600254611bee565b601f8111612f3a575b50602092601f8211600114612ed45792819293600092612ec9575b50508160011b916000199060031b1c1916176002555b803880612d01565b015190503880612eab565b601f19821693600260005260206000209160005b868110612f225750836001959610612f09575b505050811b01600255612ec1565b015160001960f88460031b161c19169055388080612efb565b91926020600181928685015181550194019201612ee8565b6002600052612f7190600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38612e90565b60008093945080928192828215612fa5575bf1156106c957600080556000600155612fa0614b6a565b612ec1565b506108fc612f89565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b905060015414386123f8565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b90600182019182811161304c57821061028b57565b634e487b7160e01b600052601160045260246000fd5b919082019182811161304c57821061028b57565b91906040519061308582611d01565b6000825260006020830152600060408301526000606083015260006080830152600060a08301526040516130b881611c28565b600081526000602082015260c0830152600060e08301526040516130db81611c28565b600081526000602082015261010083015260ff60045416613cda577fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae606060405133815286516020820152602087015115156040820152a1600660005403613cc157613145611d39565b80518101906101208183031261028b5760208061316493019101612208565b93518015908115613cb5575b5015613c9c5734613c835761318433611e9a565b5161318e81611bb6565b61319781611bb6565b613c4657600082525b610100840151825111613c3f5760016131b833611f1d565b516131c281611bb6565b6131cb81611bb6565b145b15613753576131db33611e0d565b516131e581611bb6565b6131ee81611bb6565b61370a5783516001600160a01b031660408301525b600080808060018060a01b03604087015116865190828215613701575bf1156106c95733600052600760205260006040812055600080516020614ca883398151915260406b1c99599d5b9914185cdcd95960a21b8060808601528187015182519182526020820152a160c08401518251810390811161304c5760a0830190815260c083018051600190529051815160200152516040517fc796103e8b9e2bb8d5af42aa22daa3aa16ac2e11b95bae3e79dceb1b699e59fa9181906132c79082611bd6565b0390a1602060c08301519101526101006132df6122a5565b9360018060a01b03815116855260018060a01b03602082015116602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260a083015160c08601524360e086015260e08101518286015201519051900361012083015260405161335781611c79565b6000815260c0830151156134d75750610120613371614be2565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e085015201516101008301526006600055436001556133ee604051926020840190614c27565b61012082526133fc82611d1d565b81516001600160401b03811161068657613417600254611bee565b601f811161349a575b50602092601f821160011461345157928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061348257508360019596106126c257505050811b01600255565b91926020600181928685015181550194019201613465565b60026000526134d190600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38613420565b633237bbb760e11b9081905260408381015181519283526020830152600080516020614ca883398151915291a161350c6122a5565b9160018060a01b0381511680845260018060a01b036020830151166020850152604082015160408501526060820151918260608601526101208101516080860152608081015160a086015260a081015160c086015260e081015160e086015261012061010082015191826101008801520151928361012087015211600014612ca257505061012061359b614be2565b9260018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015160c085015260e081015160e08501520151610100830152600460005543600155613618604051926020840190614c27565b610120825261362682611d1d565b81516001600160401b03811161068657613641600254611bee565b601f81116136c4575b50602092601f821160011461367b57928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106136ac57508360019596106126c257505050811b01600255565b9192602060018192868501518155019401920161368f565b60026000526136fb90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b3861364a565b506108fc613220565b600161371533611e0d565b5161371f81611bb6565b61372881611bb6565b03613203576001600160a01b03604061374033611e0d565b0151168060608401526040830152613203565b90610100602091600080516020614ca883398151915260406b1c99599d5b9911985a5b195960a29897981b8060e085015281880151825191825286820152a180820180516000905260c08601518151850152516040517fe3d816ae0ae91343fab6f34b50d29bbf0455b3b5fefd986c4d6f274d2363b2f19181906137d79082611bd6565b0390a101519101526101006137ea6122a5565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c08401524360e084015260e081015182840152015161012082015260405161385e81611c79565b6000815260c0820151156139ec5750610120613878614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e0840152015161010082015260066000556001904382556138f7604051916020830190614c27565b610120815261390581611d1d565b8051906001600160401b03821161068657613921600254611bee565b601f81116139af575b50602090601f83116001146139665792829391839260009461395b575b50501b916000199060031b1c191617600255565b015192503880613947565b90601f1983169160026000528360206000209360005b87828210613996575050106126c257505050811b01600255565b848601518755909501946020948501948793500161397c565b60026000526139e690600080516020614c88833981519152601f850160051c8101916020861061067c57601f0160051c0190614b53565b3861392a565b633237bbb760e11b9081905260408281015181519283526020830152600080516020614ca883398151915291a1613a216122a5565b9060018060a01b0381511680835260018060a01b036020830151166020840152604082015160408401526060820151918260608501526101208101516080850152608081015160a085015260a081015160c085015260e081015160e085015261012061010082015191826101008701520151928361012086015211600014613c18575050610120613ab0614be2565b9160018060a01b03815116835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e081015160e084015201516101008201526004600055600190438255613b2f604051916020830190614c27565b6101208152613b3d81611d1d565b8051906001600160401b03821161068657613b59600254611bee565b601f8111613bdb575b50602090601f8311600114613b925792829391839260009461395b5750501b916000199060031b1c191617600255565b90601f1983169160026000528360206000209360005b87828210613bc2575050106126c257505050811b01600255565b8486015187559095019460209485019487935001613ba8565b6002600052613c1290600080516020614c88833981519152601f850160051c8101916020861061067c57601f0160051c0190614b53565b38613b62565b60008093508092819282821561276657f1156106c957600080556000600155612683614b6a565b60006131cd565b6001613c5133611e9a565b51613c5b81611bb6565b613c6481611bb6565b036131a0576040613c7433611e9a565b015180602084015282526131a0565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b90506001541438613170565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b805182526020808201519083015260408082015190830152606080820151908301526080908101516001600160501b031916910152565b805182526020808201519083015260408082015190830152606080820151908301526080808201519083015260a0908101516001600160601b031916910152565b516006811015611bc05790565b93613daa6101e09694613db4939a99989461020088019b885266ffffffffffffff191660208801526040870190613cf3565b60e0850190613d2a565b6001600160a01b039182166101a0840152166101c08201520152565b9060405191613dde83611cca565b604051613dea81611c28565b6000815260006020820152835260006020840152613e06612053565b6040840152604051613e1781611c28565b6000815260006020820152606084015260006080840152604051613e3a81611c79565b6000815260a0840152600060c0840152604051613e5681611c28565b600081526000602082015260e08401526000610100840152604051613e7a81611c28565b6000815260006020820152610120840152600061014084015260ff60045416614b3a57604051338152815160208201526020820151908151906006821015611bc057602060c07ff958cb58900b785b71719a9d60af44e4b79bf88ebf22be16c88fe9cd28022b91946103809460408501528280820151805160608701520151608085015281604082015151805160a087015266ffffffffffffff19858201511682870152613f30604082015160e0880190613cf3565b613f436060820151610180880190613d2a565b6080818101516001600160a01b0390811661024089015260a0838101519091166102608901529290910151610280870152606083015180516102a08801528501516102c0870152820151516102e08601528101518051610300860152830151610320850152015180516103408401520151610360820152a1600960005403614b2157613fcd611d39565b60208180518101031261028b57602001518015150361028b5780518015908115614b15575b5015614afc576140056020820151613d6b565b6006811015611bc0576141bc5760208091015101518252346141a557600080516020614cc8833981519152916000606080937f2b5e229f25e1ec089dba1fa01c19adeb46c77297c22c0ae22e2ad03b10b1cc8b6020604051858152a101526a18dbdb9d1c9a589d5d195960aa1b9081602082015251602081519101519060405192835260208301526040820152a160405161409f81611c28565b600190818152602043910152600960005543815560405160006020820152602081526140ca81611c28565b8051906001600160401b038211610686576140e6600254611bee565b601f8111614168575b50602090601f831160011461411f5792829391839260009461395b5750501b916000199060031b1c191617600255565b90601f1983169160026000528360206000209360005b8782821061414f575050106126c257505050811b01600255565b8486015187559095019460209485019487935001614135565b600260005261419f90600080516020614c88833981519152601f850160051c8101916020861061067c57601f0160051c0190614b53565b386140ef565b602460405163100960cb60e01b8152816004820152fd5b6141c96020820151613d6b565b6006811015611bc0576001036143bf576020604091015101516040830152346143a6577f450bb4e01af39e58d4a7b076d231b8e5471c98fcfce7377ecbe233dcd75f19b891600060806040937f83a0f5451e2a86ed5c7012155ec752628b3e5896b1bf19169276704c659a630760208651858152a10152015151805160208201516040808401516060850151608086015160a087015160c0909701519351968796614291966001600160a01b039283169592909316939266ffffffffffffff19169088613d78565b0390a16040516142a081611c28565b600181526020439101526009600055436001556040519060006020830152602082526142cb82611c28565b81516001600160401b038111610686576142e6600254611bee565b601f8111614369575b50602092601f821160011461432057928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061435157508360019596106126c257505050811b01600255565b91926020600181928685015181550194019201614334565b60026000526143a090600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b386142ef565b60405163100960cb60e01b815260256004820152602490fd5b6143cc6020820151613d6b565b6006811015611bc05760020361458d5760206060910151015160608301523461457457600080516020614cc883398151915291600060c06060937f21e015075526b03e740fedb9ce33fa0d8a5ff6516b38060da9102154578367486020604051858152a101528168191bdddb9d9bdd195960ba1b918260808201520151602081519101519060405192835260208301526040820152a160405161446e81611c28565b6001815260204391015260096000554360015560405190600060208301526020825261449982611c28565b81516001600160401b038111610686576144b4600254611bee565b601f8111614537575b50602092601f82116001146144ee57928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b86811061451f57508360019596106126c257505050811b01600255565b91926020600181928685015181550194019201614502565b600260005261456e90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b386144bd565b60405163100960cb60e01b815260266004820152602490fd5b61459a6020820151613d6b565b6006811015611bc05760030361475857602001516080015160a08301523461473f57600080516020614cc883398151915291600060e06060937f7af215970419582603a9d7364dec6b04e66d45a9c88aeab152c49604bcab333e6020604051858152a1015260a06a383937b532b1ba2237bbb760a91b918260c0820152015151604051918252602082015260006040820152a160405161463981611c28565b6001815260204391015260096000554360015560405190600060208301526020825261466482611c28565b81516001600160401b0381116106865761467f600254611bee565b601f8111614702575b50602092601f82116001146146b957928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106146ea57508360019596106126c257505050811b01600255565b919260206001819286850151815501940192016146cd565b600260005261473990600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38614688565b60405163100960cb60e01b815260276004820152602490fd5b6147656020820151613d6b565b6006811015611bc057600403614927576020015160a0015160e08301523461490e57600080516020614cc88339815191529160006101006060937fc33d614791a1e04408b0872a1301cb4e49affb2e04e219dd3b4acf0131218a046020604051858152a1015260e0671d1a5b595913dd5d60c21b91826101008201520151602081519101519060405192835260208301526040820152a160405161480881611c28565b6001815260204391015260096000554360015560405190600060208301526020825261483382611c28565b81516001600160401b0381116106865761484e600254611bee565b601f81116148d1575b50602092601f821160011461488857928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106148b957508360019596106126c257505050811b01600255565b9192602060018192868501518155019401920161489c565b600260005261490890600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38614857565b60405163100960cb60e01b815260286004820152602490fd5b6149346020820151613d6b565b6006811015611bc05760051461494957505050565b6020015160c0015161012083015234614ae357600080516020614cc88339815191529160006101406060937f83316873f82d5121b846c793c34b6aaa3f3a7679d91efecaec860016c5c3c6226020604051858152a10152610120661d5c1d9bdd195960ca1b91826101408201520151602081519101519060405192835260208301526040820152a16040516149dd81611c28565b60018152602043910152600960005543600155604051906000602083015260208252614a0882611c28565b81516001600160401b03811161068657614a23600254611bee565b601f8111614aa6575b50602092601f8211600114614a5d57928192936000926126855750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110614a8e57508360019596106126c257505050811b01600255565b91926020600181928685015181550194019201614a71565b6002600052614add90600080516020614c88833981519152601f840160051c8101916020851061067c57601f0160051c0190614b53565b38614a2c565b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260236004820152602490fd5b90506001541438613ff2565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b818110614b5e575050565b60008155600101614b53565b614b75600254611bee565b80614b7d5750565b601f8111600114614b9057506000600255565b6002600052614bd590601f0160051c600080516020614c88833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf614b53565b6000602081208160025555565b60405190614bef82611d01565b816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e08201520152565b60018060a01b03808251168352602082015116602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008091015191015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace613a70ac8f42dbfde05a0b252a17edc94a6a2b2dd71ba6a9181d0b1c895955c2491c0740fba8ff630ae5eed16981215689f0b4c28063b2eefba6e00c66f2d4c5a164736f6c6343000810000a`,
  BytecodeLen: 21219,
  version: 9,
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
