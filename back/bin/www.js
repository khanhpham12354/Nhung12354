/** Module dependencies.*/
let app = require('../app');
let debug = require('debug')('back-end:server');
let http = require('http');

const config = require('../config/network');
const logColor = require('../src/untils/logColor');
const saveData = require('./services/farm').saveData;
const RX_port = require('./services/RX_serialPort');
const TX_port = require('./services/TX_serialPort');
const fake_data = require('./services/fake_data').fake;

/** Get port from environment and store in Express.*/
let port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

let UID_DB = require('../config/seeds').gateway;

/** Create HTTP server.*/
let server = http.createServer(app);
const io = require('socket.io')(server);

// RX_port.parser.on('data', async function(data) {
//   if (data.substring(0, 9) === '+TEST: RX') {
//     let convert_data = RX_port.hex_to_ascii(data.substring(11, data.length - 1));
//     let result = RX_port.dataParse(convert_data);
//     console.log(result.id, result.T1);
//     if(UID_DB.includes(result.id)){
//       // await saveData(data)
//       io.sockets.emit("farm_"+result.id, result);
//     }
//   }
// });
//***Khanh */
// RX_port.parser.on('data', async function(data) {
//   if (data.substring(0, 9) === '+TEST: RX') {
//     let convert_data = RX_port.hex_to_ascii(data.substring(11, data.length - 1));
//     let result = RX_port.dataParseKhanh(convert_data);
//     if(result) {
//       console.log(result.sub_id, result.T1);
//       io.sockets.emit("farm_"+result.sub_id, result);
//       // main_server.emit("data", result);
//     }
//   }
// });

/** Connect Socket IO*/
// io.on('connection', function(socket) {
// 	socket.on('controller', async function(data) {
// 		let command = data.id + data.status;
// 		await TX_port.transfer(command);
// 	});
// });
/**---------------------------------------------------- */
setInterval(function() {
	let data = fake_data();
	io.sockets.emit('farm_' + data.sub_id, data);
}, 1000);
io.on('connection', function(socket) {
	socket.on('controller', async function(data) {
		let command = data.id + data.status;
		console.log(command);
		io.sockets.emit('controller', data);
	});
});

/** Listen on provided port, on all network interfaces.*/
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/** Normalize a port into a number, string, or false.*/
function normalizePort(val) {
	let port = parseInt(val, 10);
	if (isNaN(port)) return val; // named pipe
	if (port >= 0) return port; // port number
	return false;
}

/** Event listener for HTTP server "error" event.*/
function onError(error) {
	if (error.syscall !== 'listen') throw error;
	let bind =

			typeof port === 'string' ? 'Pipe ' + port :
			'Port ' + port;
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/** Event listener for HTTP server "listening" event.*/
function onListening() {
	let addr = server.address();
	let bind =

			typeof addr === 'string' ? 'pipe ' + addr :
			'port ' + addr.port;
	debug('Listening on ' + bind);
	console.log('Listening on ' + logColor(`color:yellow${bind}`));
}

console.log(
	logColor(`color:pink
███████╗ █████╗ ██████╗ ███╗   ███╗
██╔════╝██╔══██╗██╔══██╗████╗ ████║
█████╗  ███████║██████╔╝██╔████╔██║
██╔══╝  ██╔══██║██╔══██╗██║╚██╔╝██║
██║     ██║  ██║██║  ██║██║ ╚═╝ ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
`)
);
