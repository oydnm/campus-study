let app = require('./config/app');
let http = require('http');

// use the cloud host port when depoyed 
let port = process.env.PORT || 3000;

// send incoming request to the express app
let server = http.createServer(app);
server.listen(port);
