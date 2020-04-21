const express= require('express');
//rutas del servidor
const path = require('path');

const bodyParser = require('body-parser');

const app= express();

//settings
//process.env.NODE-->puerto que asigne el SO
app.set('port', process.env.PORT || 8080);
app.set('view engine ', 'ejs');
app.set('views',path.join(__dirname,'../app/views'));

//middleware
app.use(bodyParser.urlencoded({extended:false}));

module.exports=app;