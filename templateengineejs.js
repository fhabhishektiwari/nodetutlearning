const express=require('express');
const app=express();
// template engine(ejs)//npm i ejs
app.set('view engine','ejs');
app.get("/profile/:name",(req,res)=>{
    console.log(req.params.name);
    res.render("Profile",{name:req.params.name});
})
app.listen(3000);