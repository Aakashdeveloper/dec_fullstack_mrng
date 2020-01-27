const express = require('express');
const router = express.Router();
const LocalStorage = require('node-localstorage').LocalStorage;
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
                res.redirect(token)
            }
        }
    })
})


router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) return res.status(500).send('Problem in fetching user');
        res.send(user)
    })
})


module.exports = router;