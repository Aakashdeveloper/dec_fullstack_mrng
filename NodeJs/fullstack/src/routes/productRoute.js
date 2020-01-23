var express = require('express');
const productRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function router(menu){
    productRouter.route('/')
        .get(function(req,res){
            //res.send(products)
            mongodb.connect(url, function(err,dc){
              if(err){
                throw err
              }else{
                const dbo = dc.db('classdatabase');
                dbo.collection('products').find({}).toArray((err,data) => {
                  if(err){
                    res.status(401).send('Error while fetching')
                  }else{
                    res.render('products',{title:'Products Page',products:data,menu})
                  }
                })
              }
        })
      })

    productRouter.route('/details/:id')
        .get(function(req,res) {
          //var id = reeq.params.id
          var {id} = req.params
          mongodb.connect(url, function(err,dc){
            if(err){
              throw err
            }else{
              const dbo = dc.db('classdatabase');
              dbo.collection('products').findOne({_id:id}, (err,data) => {
                if(err){
                  res.status(401).send('Error while fetching')
                }else{
                  res.send(data)
                }
              })
            }
         })
        });
    
    return productRouter
}

module.exports = router;