const express=require('express');
const app=express();
// template engine(ejs)//npm i ejs
app.set('view engine','ejs');
// app.get("/profile/:name",(req,res)=>{
//     // console.log(req.params.name);
//     data={devname:"Nishant",email:"nishant.bhatnagar@firsthive.com",skills:['Java','Python','Php','node js','react js']};
//     res.render("Profile",{name:req.params.name,data:data});
// })

app.get("/profile",(req,res)=>{
    data={devname:"Nishant",email:"nishant.bhatnagar@firsthive.com",skills:['Java','Python','Php','node js','react js']};

    res.render('Profile',{name:data.devname,data:data});
    
})

app.listen(3000);