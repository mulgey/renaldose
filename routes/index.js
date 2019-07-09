'use strict';

// Express te router özelliğini kullanıma açtık
const express = require('express');
const router = express.Router();

// TURKISH

// GET tr/
router.get('/', function(req, res, next) {
    return res.render("tr/index");
});

// GET tr/calculator
router.get('/tr/calculator', function(req, res, next) {
    return res.render("tr/calculator");
});

// GET tr/data_table
router.get('/tr/data_table', function(req, res, next) {
    return res.render("tr/data_table");
});

// GET tr/about
router.get('/tr/about', function(req, res, next) {
    return res.render("tr/about");
});

// GET tr/print
router.get('/tr/print', function(req, res, next) {
    return res.render("tr/print");
});

// ENGLISH

// GET en/
router.get('/en', function(req, res, next) {
    return res.render("en/index");
});

// GET en/calculator
router.get('/en/calculator', function(req, res, next) {
    return res.render("en/calculator");
});

// GET en/data_table
router.get('/en/data_table', function(req, res, next) {
    return res.render("en/data_table");
});

// GET en/about
router.get('/en/about', function(req, res, next) {
    return res.render("en/about");
});

// GET en/print
router.get('/en/print', function(req, res, next) {
    return res.render("en/print");
});

// GET en/test
router.get('/en/test', function(req, res, next) {
    return res.render("en/test");
});

// GET en/save
router.get('/en/save', (req, res) => {
    if (req.cookies.ward) { // Yönlendirmeyle veya direkt gelindiğinde, eğer isim değeri içeren "kurabiye" miz varsa, içinde "isim" anahtarı olan index.pug dosyasıyla çalıştır
        res.locals.ward = req.cookies.ward;
    }
    return res.render("en/save");
});

// POST en/print
router.post('/en/print', (req, res) => {
    res.cookie('ward', req.body.ward); // POST cereyan ettiği zaman, "ward" olarak girilen değeri "ward" olarak cookie le
    return res.redirect('/en/save'); // Ardından giriş sayfasına yolla. Bu aşamadan sonra EXECUTION STOP istersen eğer (sonraki res.render ler vs) başına RETURN geç
});

module.exports = router;