const express=require('express');
const app=express();

//middleware:upload static file using static express middleware
app.use('/assets',express.static("assets"));


// template engine(ejs)//npm i ejs
app.set('view engine','ejs');
app.get("/profile/:name",(req,res)=>{
//     // console.log(req.params.name);
    data={devname:"Nishant",email:"nishant.bhatnagar@firsthive.com",skills:['Java','Python','Php','node js','react js']};
    res.render("Profile",{name:req.params.name,data:data});
})

app.get("/",(req,res)=>{
    res.render('Home');//here give file name Home.ejs  
})
app.get("/login",(req,res)=>{
    res.render('Login');//here give file name Login.ejs  
})

app.listen(3000);