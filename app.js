const express=require('express');
const app=express();
const router=express.Router();

/* Middleware: Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc*/

const checkUrl=require('./middleware');

app.get('/',(req,res)=>{
    res.send("Home Page");
});

router.get('/about',checkUrl,(req,res)=>{
    res.send("About Page");
});
router.get('/login',checkUrl,(req,res)=>{
    res.send("Login Page");
});
app.use("/",router);
app.listen(3000);