'use strict';

// Express te router özelliğini kullanıma açtık
const express = require('express');
const router = express.Router();

// GET /
router.get('/', function(req, res, next) {
    return res.render("index");
});

module.exports = router;