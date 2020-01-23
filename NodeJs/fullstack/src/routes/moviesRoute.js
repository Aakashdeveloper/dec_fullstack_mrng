var express = require('express');
const moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function router(menu){
    moviesRouter.route('/')
    .get(function(req,res) {
        mongodb.connect(url, function(err,dc){
          if(err){
            throw err
          }else{
            const dbo = dc.db('classdatabase');
            dbo.collection('movies').find({}).toArray((err,data) => {
              if(err){
                res.status(401).send('Error while fetching')
              }else{
                res.render('movies',{title:'Movies Page', movies:data,menu:menu})
              }
            })
          }
        })
        //res.send(movies)
        
    });

    moviesRouter.route('/details')
        .get(function(req,res) {
            res.send("Details for Movies")
        });
    
    return moviesRouter
}



module.exports = router;
