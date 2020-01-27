const app = require('./app');
const express = require('express');
const port = 8700;

app.listen(port,()=>{
    console.log(`Sserver is running on ${port}`)
}) 