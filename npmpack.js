const http=require("http");
const hostName="127.0.0.1";
const port=8000;
const uc=require('upper-case');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(uc.upperCase("Hello nishant bhatnagar"));
}).listen(port,hostName,()=>{
    console.log(`Server running at http://${hostName}:${port}`);
});


