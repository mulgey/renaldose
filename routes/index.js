'use strict';

// Express te router özelliğini kullanıma açtık
const express = require('express');
const router = express.Router();

/*
let result;

const calcSrcr = function (method, unit, sex, age, weight, srcr) {
    if (unit === "2") {
        srcr = srcr / 88.4;
    }
    if (method === "Cockcroft-Gault Denklemi") {
        result = (((140 - age) * weight) / (72 * srcr)).toFixed(0);
        if (sex === "2") {
            result = (result * 0.85).toFixed(0);
        }
    }
    return result;
}

*/

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
    console.log("A good start man, that's all!");
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