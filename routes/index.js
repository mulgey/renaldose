'use strict';

// Express te router özelliğini kullanıma açtık
const express = require('express');
const router = express.Router();

// GET /
router.get('/', function(req, res, next) {
    return res.render("tr/index");
});

// GET /calculator
router.get('/tr/calculator', function(req, res, next) {
    return res.render("tr/calculator");
});

// GET /data_table
router.get('/tr/data_table', function(req, res, next) {
    return res.render("tr/data_table");
});

// GET /about
router.get('/tr/about', function(req, res, next) {
    return res.render("tr/about");
});

// GET /about
router.get('/tr/print', function(req, res, next) {
    return res.render("tr/print");
});

module.exports = router;