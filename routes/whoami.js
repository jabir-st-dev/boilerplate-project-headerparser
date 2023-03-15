const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.ip);
    res.send({
        ipaddress: req.ip,
        language: 'Bangla',
        software: 'WebStorm'
    });
});

module.exports = router;