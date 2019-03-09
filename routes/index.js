'use strict';

// Express te router özelliğini kullanıma açtık
const express = require('express');
const router = express.Router();

// GET /
router.get('/', function(req, res, next) {
    return res.render("index");
});

// GET /calculator
router.get('/calculator', function(req, res, next) {
    return res.render("calculator");
});

// POST /calculator
router.post('/calculator', function(req, res, next) {
    console.log("A good start man!");
});

// GET /data_table
router.get('/data_table', function(req, res, next) {
    return res.render("data_table");
});

// GET /about
router.get('/about', function(req, res, next) {
    return res.render("about");
});

module.exports = router;