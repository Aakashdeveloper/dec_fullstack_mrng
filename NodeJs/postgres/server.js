var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3100;
const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'docker',
    port:5432
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/user', (req,res) =>{
    pool.query('SELECT * FROM employee', (err,result) => {
        if(err){
            throw err
        }else{
            res.status(200).json(result.rows)
        }
    });
});

app.post('/user',(req,res) => {
    const {city,name,phone} = req.body;
    pool.query('INSERT INTO employee (city,name,phone) VALUES ($1, $2, $3)',[city,name,phone], (err,result) => {
        if(err){
            throw err
        }
        res.status(200).send('data added')
    })
})


app.listen(port,() => {
    console.log(`App running on port ${port}`)
})