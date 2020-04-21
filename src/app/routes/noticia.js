const dbConnection = require('../../config/dbConnection');

module.exports= app => {
   const Connection= dbConnection();
app.get('/', (req, res) =>{
    Connection.query('SELECT* FROM news', (err,result) => {
        console.log(result);
        res.render('news/news.ejs', {
            news:result
        });
    });
});

app.post('/news', (req, res) =>
{
    const{title, news}= req.body;
    Connection.query('INSERT INTO news SET?', {
      title,
      news
    },(err, result) =>
    {
        res.redirect('/');
    });
});

}