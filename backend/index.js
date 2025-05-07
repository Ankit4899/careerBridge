const express = require('express');
const app = express();
require('dotenv').config()
const main = require('./db')
const port = process.env.PORT || 3000;

main();
app.get('/',(req,res)=>{
    res.send(`Hi !, i am port number ${port}`)
})

app.listen(port,(req,res)=>{
    console.log(`app is listening to port ${port}`)
})