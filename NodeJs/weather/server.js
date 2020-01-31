import express from 'express';
var app = express();
var port = 8700
import request from 'request';

//Static files path
app.use(express.static(__dirname+'/public'));
//View Files
app.set('views', './src/views');
//View Engine
app.set('view engine','ejs')

const ApiUrl ="http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

app.get('/',(req,res) => {
    res.send('App is running')
});

app.get('/weather',(req,res) => {
    request(ApiUrl,(err,response) => {
        if(err) throw err;
        var out =JSON.parse(response.body)
        res.render('index',{title:'Weather App',result:out})
    })
})


app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Api is running on port ${port}`)
})