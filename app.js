const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello express js...");
}).listen(3000);