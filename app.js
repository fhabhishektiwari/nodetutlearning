const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Home Page");
});
app.get('/about',(req,res)=>{
    res.send("About Page");
});
app.get('/contact-us',(req,res)=>{
    res.send("Contact Page");
});
app.get('/login',(req,res)=>{
    res.send("Login Page");
})
app.put('/put',(req,res)=>{
    res.send("put request");
})
app.post('/post',(req,res)=>{
    res.send("post request");
});
app.delete('/delete',(req,res)=>{
    res.send("delete request");
})

app.get('/*',(req,res)=>{
    res.send("404 Page Not Found!");
})

app.listen(3000);