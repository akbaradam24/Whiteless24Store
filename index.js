const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000


app.get('/', (req,res,next)=>{
    res.send('Hello world')
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})