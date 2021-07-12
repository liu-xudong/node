const fs = require('fs');
const path = require('path');

exports.getHome = (req, res) => {
    res.send('homePage');
}

exports.getIndex = (req, res) => {
    res.send('indexPage');
}

exports.readFile = function(req, res) {
    let data = fs.readFileSync(path.join(__dirname, '../../files/Typescript.md'))
    res.send(data.toString())
}

exports.readHtmlFile = function(req, res) {
    let data = fs.readFileSync(path.join(__dirname, '../../files/index.html'))
    res.send(data.toString())
}