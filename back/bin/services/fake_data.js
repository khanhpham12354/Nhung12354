let sub_id = ['G01', 'G02', 'G03', 'G04', 'G05'];
function fake() {
    let id = sub_id[Math.floor(Math.random() * sub_id.length)];
    let T1 = Math.floor(Math.random() * (40 - 20) + 20);
    let T2 = Math.floor(Math.random() * (40 - 20) + 20);
    let T3 = Math.floor(Math.random() * (40 - 20) + 20);
    let T4 = Math.floor(Math.random() * (40 - 20) + 20);
    let H1 = Math.floor(Math.random() * (90 - 60) + 60);
    let H2 = Math.floor(Math.random() * (90 - 60) + 60);
    let H3 = Math.floor(Math.random() * (90 - 60) + 60);
    let H4 = Math.floor(Math.random() * (90 - 60) + 60);
    let L1 = Math.floor(Math.random() * (1000 - 800) + 800);
    let L2 = Math.floor(Math.random() * (1000 - 800) + 800);
    let L3 = Math.floor(Math.random() * (1000 - 800) + 800);
    let L4 = Math.floor(Math.random() * (1000 - 800) + 800);
    let PH1 = Math.floor(Math.random() * (12 - 8) + 8);
    let PH2 = Math.floor(Math.random() * (12 - 8) + 8);
    let PH3 = Math.floor(Math.random() * (12 - 8) + 8);
    let PH4 = Math.floor(Math.random() * (12 - 8) + 8);
    let SM1 = Math.floor(Math.random() * 100);
    let SM2 = Math.floor(Math.random() * 100);
    let SM3 = Math.floor(Math.random() * 100);
    let SM4 = Math.floor(Math.random() * 100);
    let SM5 = Math.floor(Math.random() * 100);
    let SM6 = Math.floor(Math.random() * 100);
    let SM7 = Math.floor(Math.random() * 100);
    let SM8 = Math.floor(Math.random() * 100);
    let SM9 = Math.floor(Math.random() * 100);
    let SM10 = Math.floor(Math.random() * 100);
    let SM11 = Math.floor(Math.random() * 100);
    let SM12 = Math.floor(Math.random() * 100);
    let SM13 = Math.floor(Math.random() * 100);
    let SM14 = Math.floor(Math.random() * 100);
    let SM15 = Math.floor(Math.random() * 100);
    let SM16 = Math.floor(Math.random() * 100);
    let SM17 = Math.floor(Math.random() * 100);
    let SM18 = Math.floor(Math.random() * 100);
    let SM19 = Math.floor(Math.random() * 100);
    let SM20 = Math.floor(Math.random() * 100);
    let SM21 = Math.floor(Math.random() * 100);
    let SM22 = Math.floor(Math.random() * 100);
    let SM23 = Math.floor(Math.random() * 100);
    let SM24 = Math.floor(Math.random() * 100);
    let SM25 = Math.floor(Math.random() * 100);
    return{
        sub_id: id,
        T1: T1, T2: T2, T3: T3, T4: T4,
        L1: L1, L2: L2, L3: L3, L4: L4,
        H1: H1, H2: H2, H3: H3, H4: H4,
        PH1: PH1, PH2: PH2, PH3: PH3, PH4: PH4,
        SM1: SM1, SM2: SM2, SM3: SM3, SM4: SM4, SM5: SM5,
        SM6: SM6, SM7: SM7, SM8: SM8, SM9: SM9, SM10: SM10,
        SM11: SM11, SM12: SM12, SM13: SM13, SM14: SM14, SM15: SM15,
        SM16: SM16, SM17: SM17, SM18: SM18, SM19: SM19, SM20: SM20,
        SM21: SM21, SM22: SM22, SM23: SM23, SM24: SM24, SM25: SM25,
        time: Date.now()
    }
}

module.exports = {
    fake
}