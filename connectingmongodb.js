const express = require("express");
const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://Abhishek:B77LUOnffBp6kd86@cluster0.sehxq.mongodb.net/?retryWrites=true&w=majority/tut',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db connection done");
})