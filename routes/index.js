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
router.get('/en/save/:id', (req, res) => {

    if (req.query.time) {
        res.locals.time = req.query.time;
    }
    
    if (req.query.called) {
        res.locals.called = req.query.called;
    }
    
    if (req.query.ward) {
        res.locals.ward = req.query.ward;
    }

    if (req.query.doctor) {
        res.locals.doctor = req.query.doctor;
    }

    if (req.query.crCl) {
        res.locals.crCl = req.query.crCl;
    }

    if (req.query.dia) {
        res.locals.dia = req.query.dia;
    }

    if (req.query.actSubs) {
        res.locals.actSubs = req.query.actSubs;
    }

    if (req.query.product) {
        res.locals.product = req.query.product;
    }

    if (req.query.suggest) {
        res.locals.suggest = req.query.suggest;
    }

    if (req.query.operator) {
        res.locals.operator = req.query.operator;
    }

    if (req.query.note) {
        res.locals.note = req.query.note;
    }

    return res.render('en/save');
});

// GET en/save
router.get('/en/save/', (req, res) => {
    /*
    if (req.cookies.time) {
        res.locals.time = req.cookies.time;
    }
    if (req.cookies.called) { // Yönlendirmeyle veya direkt gelindiğinde, eğer isim değeri içeren "kurabiye" miz varsa, içinde "isim" anahtarı olan index.pug dosyasıyla çalıştır
        res.locals.called = req.cookies.called;
    }
    if (req.cookies.ward) {
        res.locals.ward = req.cookies.ward;
    }
    if (req.cookies.doctor) {
        res.locals.doctor = req.cookies.doctor;
    }
    if (req.cookies.crCl) {
        res.locals.crCl = req.cookies.crCl;
    }
    if (req.cookies.dia) {
        res.locals.dia = req.cookies.dia;
    }
    if (req.cookies.actSubs) {
        res.locals.actSubs = req.cookies.actSubs;
    }
    if (req.cookies.product) {
        res.locals.product = req.cookies.product;
    }
    if (req.cookies.suggest) {
        res.locals.suggest = req.cookies.suggest;
    }
    if (req.cookies.operator) {
        res.locals.operator = req.cookies.operator;
    }
    if (req.cookies.note) {
        res.locals.note = req.cookies.note;
    }
    */
    return res.render('en/save');
});

// POST en/print
router.post('/en/print', (req, res) => {
    res.cookie('time', req.body.time)
    res.cookie('called', req.body.called);
    res.cookie('ward', req.body.ward); // POST cereyan ettiği zaman, "ward" olarak girilen değeri "ward" olarak cookie le
    res.cookie('doctor', req.body.doctor);
    res.cookie('crCl', req.body.crCl);
    res.cookie('dia', req.body.dia);
    res.cookie('actSubs', req.body.actSubs);
    res.cookie('product', req.body.product);
    res.cookie('suggest', req.body.suggest);
    res.cookie('operator', req.body.operator);
    res.cookie('note', req.body.note);
    
    let urlString = "/en/save/pdf?"
    
    if (req.body.time) {
        let time = req.body.time;
        urlString += `time=${time}&`
    } 
    
    if (req.body.called) {
        let called = req.body.called;
        urlString += `called=${called}&`
    }

    if (req.body.ward) {
        let ward = req.body.ward;
        urlString += `ward=${ward}&`
    } 

    if (req.body.doctor) {
        let doctor = req.body.doctor;
        urlString += `doctor=${doctor}&`
    }

    if (req.body.crCl) {
        let crCl = req.body.crCl;
        urlString += `crCl=${crCl}&`
    }

    if (req.body.dia) {
        let dia = req.body.dia;
        urlString += `dia=${dia}&`
    }

    if (req.body.actSubs) {
        let actSubs = req.body.actSubs;
        urlString += `actSubs=${actSubs}&`
    }

    if (req.body.product) {
        let product = req.body.product;
        urlString += `product=${product}&`
    }

    if (req.body.suggest) {
        let suggest = req.body.suggest;
        urlString += `suggest=${suggest}&`
    }

    if (req.body.operator) {
        let operator = req.body.operator;
        urlString += `operator=${operator}&`
    }

    if (req.body.note) {
        let note = req.body.note;
        urlString += `note=${note}&`
    }

    return res.redirect(urlString);
});

module.exports = router;