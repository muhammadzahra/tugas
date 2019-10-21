var express = require('express');
var router = express.Router();

/* get gomepage */
router.get('/', function (req, res, next) {
    let data = {
        layout: 'admin',
        title: 'Dashboard',
        content: 'Selamat Datangsampurasun...'
    };
    res.render('dashboard', data);
});

module.exports = router;