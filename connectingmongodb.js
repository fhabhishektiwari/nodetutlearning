const express = require("express");
const mongoose=require("mongoose");

const User=require('./users');

// add db name after .net/dbname?
mongoose.connect('mongodb+srv://Abhishek:B77LUOnffBp6kd86@cluster0.sehxq.mongodb.net/tut?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

User.find({},(err,users)=>{
    if(err) console.log(err);
    console.log(users);
})