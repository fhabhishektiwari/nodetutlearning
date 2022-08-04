const express = require("express");
const mongoose = require("mongoose");

const User = require('./models/users');

// add db name after .net/dbname?
mongoose.connect('mongodb+srv://Abhishek:B77LUOnffBp6kd86@cluster0.sehxq.mongodb.net/tut?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// get the records
// User.find({},(err,users)=>{
//     if(err) console.log(err);
//     console.log(users);
// })


// insert data records
const data = new User({
    _id: new mongoose.Types.ObjectId,
    name: "Ankur",
    email: "Ankur@firsthive.com",
    address: "MP"
});

data.save().then((result) => {
    console.log(result);
}).catch(err => console.log(err))


