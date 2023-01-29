const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var favicon = require('serve-favicon');
var path = require('path');
const {getMeme} = require('./fetchMeme');
const { setTimeout } = require("timers/promises");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static("public"));
app.use('/images', express.static('images'));

app.get('/',function(req,res){
    res.render('home', {memeData: getMeme()});
});

app.listen(3000,function(){
    console.log('Server started at port: 3000')
});