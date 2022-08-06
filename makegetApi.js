const express = require("express");
const app = express();
const mongoose = require('mongoose');
const User = require('./models/users');
app.set('view engine', 'ejs');
app.use('/assets', express.static("assets"));
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var encoder = bodyParser.urlencoded({ extended: true });



mongoose.connect('mongodb+srv://Abhishek:B77LUOnffBp6kd86@cluster0.sehxq.mongodb.net/tut?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// make api
app.get("/", (req, res) => {
    res.render('Home');
})

// // Make get Api for fetch the data into mongodb
app.get("/users", (req, res) => {
    // for getting particular parameter data
    // User.find().select('name').then((items)=>{
    //     // res.status(200).json(data);
    //     res.render("UsersView",{data:items});
    //     console.log(items)
    // })
    User.find().then((items) => {
        // res.status(200).json(data);
        res.render("UsersView", { data: items });
        console.log(items);
    })
});

app.get("/login", (req, res) => {
    console.log(req.query);
    res.render('Login');//here give file name Login.ejs  
})
app.post("/login", encoder, (req, res) => {
    console.log(req.query);
    res.render('Home');//here give file name Login.ejs  
})


// Make post Api adding data into mongodb database
app.post('/user', jsonParser, (req, res) => {
    // res.end("Hello");
    const data = new User({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    });
    data.save().then((result) => {
        res.status(201).json(result);
    }).catch((err) => console.log(err));
});

// Make Delete Api deleting data into mongodb
app.delete('/user/:id',(req,res)=>{
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{console.log(err)});
});

// Make put Api for update the user data into mongodb
app.put('/user/:id',jsonParser,(req,res)=>{
    User.updateOne({_id:req.params.id},{$set:{name:req.body.name,email:req.body.email,address:req.body.address}}).then((result)=>{
        res.status(201).json(result);
    }).catch((err)=>{console.log(err)});
})

// Make Search Api
app.get('/search/:name',(req,res)=>{
    var regex=new RegExp(req.params.name,'i');
    User.find({name:regex}).then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{console.log(err)});
})
app.listen(4000);

