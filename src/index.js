const app = require('./config/server');

require('./app/routes/noticia')(app);

//iniciar el servidor 
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));

});