const http=require("http");
const fs=require("fs");
const hostname='127.0.0.1';
const port=3000;
http.createServer((req,res)=>{
    fs.readFile('file.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(port,hostname,()=>{
    console.log(`Server running at https://${hostname}:${port}`);
})
