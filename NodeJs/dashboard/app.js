var express = require('express');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var bodyParser = require('body-parser')
var app = express()
var port = 8660;
var mongourl = "mongodb://127.0.0.1:27017";
let db;
var col_name="fullstackdb"

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//Static files path
app.use(express.static(__dirname+'/public'));
//View Files
app.set('views', './src/views');
//View Engine
app.set('view engine','ejs')

app.get('/health',(req,res) => {
    res.send('Api is running');
});

//Create operation (posting data)
app.post('/addUser',(req,res) => {
    var data = {
        //id:parseInt(Math.floor(Math.random()*10000)),
        id:parseInt(req.body.id),
        name:req.body.name,
        city:req.body.city,
        phone:parseInt(req.body.phone),
        active:true
    }
    db.collection(col_name)
    .insertOne(data,(err,result) => {
        if(err){
            res.status(402)
        }else{
            res.send('Data Added')
            
        }
    })
})

/*app.post('/addUser',(req,res) => {
    db.collection(col_name)
    .insertOne(req.body,(err,result) => {
        if(err){
            res.status(402)
        }else{
            res.send('Data Added')
        }
    })
})*/

//Read operation (getting data)
app.get('/',(req,res) => {
    db.collection(col_name).find({active:true}).toArray((err,result) => {
        if(err) throw err;
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-headers','Origin,X_Request-With,Content-Type,Accept');
        res.send(result)
    })
});

app.get('/user',(req,res) => {
    var query = {active:true};
    if(req.query.id && req.query.name){
        query = {id:parseInt(req.query.id), name:req.query.name, active:true}
    }
    else if(req.query.id){
        query = {id:parseInt(req.query.id),active:true}
    }
    else if(req.query.name){
        query = {name:req.query.name,active:true}
    }
    console.log(query)
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
});

//Update operation (updating data)
app.put('/updateUser',(req,res) => {
    db.collection(col_name)
    .findOneAndUpdate({'id':parseInt(req.body.id)},{
        $set:{
            id:parseInt(req.body.id),
            name:req.body.name,
            city:req.body.city,
            phone:parseInt(req.body.phone),
            active:true
        }
    },(err,result) => {
        if(err){
            res.status(402)
        }else{
            res.send('Data Updated')
        }
    })
})


//Delete operation (removing data)
app.delete('/deleteUser', (req,res) => {
    db.collection(col_name).findOneAndDelete({
        "id":parseInt(req.body.id)
    },(err,result) => {
        if(err){
            res.status(402)
        }else{
            res.send('Data deleted')
        }
    })
})

//Soft Delete operation (active to false)
app.put('/softdelete',(req,res) => {
    db.collection(col_name)
    .findOneAndUpdate({'id':req.body.id},{
        $set:{
            id:req.body.id,
            name:req.body.name,
            city:req.body.city,
            phone:req.body.phone,
            active:false
        }
    },(err,result) => {
        if(err){
            res.status(402)
        }else{
            res.send('Data Updated')
        }
    })
});

app.get('/new',(req,res) => {
    var id = parseInt(Math.floor(Math.random()*10000))
    res.render('admin',{id:id})
})

MongoClient.connect(mongourl,(err,client) => {
    if(err) throw err;
    db = client.db('classpractice');
    app.listen(port,(err)=>{
        console.log(`Server is running on port ${port}`)
    });
});