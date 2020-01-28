const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch')
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const brcypt = require('bcryptjs');
const config = require('../config');


router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());
const User = require('../user/User');

router.post('/register', (req,res) => {
    const hashedPassword = brcypt.hashSync(req.body.password,8)
    User.create({
        name:req.body.name,
        password:hashedPassword,
        email:req.body.email,
    },(err,user) => {
        if(err) return res.status(500).send('Problem in registring user');
        res.send('Register successfull')
    })
});

router.post('/login',(req,res) => {
    User.findOne({email:req.body.email},(err,user) => {
        if(err) return res.status(500).send('Problem in login of user');
        if(!user){
            res.send('User does not exists')
        }else{
            const passwordIsValid = brcypt.compareSync(req.body.password,user.password)
            if(!passwordIsValid){ res.send('Enter correct password')}
            else{
                var token = jwt.sign({id:user._id}, config.secert,{
                    expiresIn: 86400 //24 hours
                });
                localStorage.setItem('authtoken', token)
                res.send({auth:true,token:token})
            }
        }
    })
});


router.get('/getUser',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) res.status(401).send({auth:false,message:'No Token Provided'});

    jwt.verify(token, config.secert, (err, decode) => {
        if(err) res.status(401).send({auth:false, message:'Invalid Token'});
        User.findById(decode.id,{password:0},(err,user) => {
            if(err) res.status(500).send('Problem finding user');
            if(!user) res.status(401).send('No User found');
            res.send(user)
        })
    })
})


router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) return res.status(500).send('Problem in fetching user');
        res.send(user)
    })
})


module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmY5MzdmZWEyYjM5MDRmNzc5NWMyNyIsImlhdCI6MTU4MDE3NjI2OCwiZXhwIjoxNTgwMjYyNjY4fQ.zXIPoCfEbanPScd2uf9uATF28TF9a6ZFH9FOs3cNu9U


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmU0NjQyZDAwZWRkYzE1NWVhMzlhZCIsImlhdCI6MTU4MDE3NTg2MSwiZXhwIjoxNTgwMjYyMjYxfQ.hnMQ8SMwQX_xoJi-ONGmc7c2Fu4tGFDrFUQP61GdM6