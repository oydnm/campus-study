let express = require('express');

let path = require('path');
let app = express();
// looks for EJS pages in the projects view folder.
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// make files in public avaialbe to the browser including the stylessheet
app.use(express.static(path.join(__dirname, '../public')));
// use the index router for all requests to the root of the site
let indexRouter = require('../routes/index');
app.use('/', indexRouter);
// let server.js load this configured express app.
module.exports = app;