const express = require('express');

const router = express.Router();

const readFile = require('./readFile/md')

router.get('/', (req,res) => {
    readFile.getHome(req, res);
})

router.get('/index', (req,res) => {
    readFile.getIndex(req, res);
})

router.get('/md', (req, res) => {
    readFile.readFile(req, res);
})

router.get('/html', (req, res) => {
    readFile.readHtmlFile(req, res);
})

module.exports = router