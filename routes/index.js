let express = require('express');
let router = express.Router();

// shows the welcome page when sommeone visits the site
router.get('/', function(req, res,) {
    // tells express to open index.ejs and displauys the title
    res.render('index', { title: 'Welcome to Campus Study' });
});

module.exports = router;
