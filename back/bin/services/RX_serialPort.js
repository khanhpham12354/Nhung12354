const serialPort = require('serialport');

const config = require('../../config/serialPort');
const readLine = serialPort.parsers.Readline;
const port = new serialPort(config.port_RX, {
    baudRate: config.baudRate_RX,
});

const delay = time => new Promise(res=>setTimeout(res,time));
port.on('open', async function() {
    console.log('RX___connected!!!');
    port.write('AT\r\n'); await delay(50);
    port.write('AT+MODE=TEST\r\n'); await delay(50);
    port.write('AT+TEST=RFCFG,433\r\n'); await delay(50);
    port.write('AT+TEST=RXLRPKT\r\n'); await delay(50);
});

const parser = port.pipe(new readLine({ delimiter: '\r\n' }));

parser.on('error', (err) => console.log('[RX]: ', err));
port.on('error', (err) => console.log('[RX]: ', err));
port.on('close', function() {
    console.log('RX disconnect!');
});

function hex_to_ascii(str1) {
    let hex = str1.toString();
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

function dataParse(str) {
    // console.log(str);
    let data = str.split("_");
    return {
        sub_id: data[0],
        T1: data[1], T2: data[2], T3: data[3], T4: data[4],
        H1: data[5], H2: data[6], H3: data[7], H4: data[8],
        L1: data[9], L2: data[10], L3: data[11], L4: data[12],
        PH1: data[13], PH2: data[14], PH3: data[15], PH4: data[16],
        SM1: data[17], SM2: data[18], SM3: data[19], SM4: data[20],
        time: Date.now()
    }
}


function dataParseKhanh(str) {
    let data = str.split("_");
    return {
        sub_id: data[0],
        T1: data[2], T2: Math.floor(Math.random() * (40 - 20) + 20), T3: Math.floor(Math.random() * (40 - 20) + 20), T4: Math.floor(Math.random() * (40 - 20) + 20),
        H1: data[3], H2: Math.floor(Math.random() * (90 - 60) + 60), H3: Math.floor(Math.random() * (90 - 60) + 60), H4: Math.floor(Math.random() * (90 - 60) + 60),
        L1: Math.floor(Math.random() * (1000 - 800) + 800), L2: Math.floor(Math.random() * (1000 - 800) + 800), L3: Math.floor(Math.random() * (1000 - 800) + 800), L4: Math.floor(Math.random() * (1000 - 800) + 800),
        PH1: data[4], PH2: Math.floor(Math.random() * (40 - 20) + 20), PH3: Math.floor(Math.random() * (40 - 20) + 20), PH4: Math.floor(Math.random() * (40 - 20) + 20),
        SM1: data[1], SM2: Math.floor(Math.random() * 100), SM3: Math.floor(Math.random() * 100), SM4: Math.floor(Math.random() * 100),
        time: Date.now()
    }
}
module.exports = {
    port,
    parser,
    hex_to_ascii,
    dataParse,
    dataParseKhanh
};