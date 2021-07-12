const express = require('express');

const app = express();

const prot = 3000;

let router = require('./router')

app.use('/', router)

app.use(express.static('public'))

app.listen(prot, () => {
    console.log('localhost:' + prot);
})