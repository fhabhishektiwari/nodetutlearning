// var a=6;
// var b=60;
// console.log(a+b);

// Creating http server using node js
/*
const http=require("http");
const hostName='127.0.0.1';
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    // res.write("Hello from node js server");
    res.setHeader('Content-Type','text/plain');
    res.end("Hello from node js server");
});
server.listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});
*/


// import module in node js

const othr=require("./others");

console.log(othr());
console.log(othr(20,50));

