let app = require('./config/app');
let http = require('http');
let mongoose = require('mongoose');
let databaseUri = require('./config/db');

// use the cloud host port when depoyed 
let port = process.env.PORT || 3000;

// send incoming request to the express app
let server = http.createServer(app);

// start serving pages once the study room databse is connected
mongoose.connect(databaseUri)
.then(function() {
    console.log('connected to MongoDB:', mongoose.connection.name);
    server.listen(port);
})
    .catch(function(error) {
        console.error('Error connecting to MongoDB:', error.name);
    });