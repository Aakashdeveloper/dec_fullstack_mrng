var express = require('express');
var app = express();
var port = 9000;

var menu =  [
  {"name":"Home","link":"/"},
  {"name":"Movies","link":"/movies"},
  {"name":"Products","link":"/products"}
]

const moviesRouter = require('./src/routes/moviesRoute')(menu);
const productRouter = require('./src/routes/productRoute')(menu);

//Static files path
app.use(express.static(__dirname+'/public'));
//View Files
app.set('views', './src/views');
//View Engine
app.set('view engine','ejs')


app.get('/', function(req,res){
    res.render('Home',{title:'Home Page',menu:menu})
});

app.use('/movies', moviesRouter);
app.use('/products',productRouter);

app.listen(port, (err)=>{
    if(err) throw err;
    else{
        console.log(`Server is running on port ${port}`)
    }
});