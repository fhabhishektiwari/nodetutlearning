const http=require("http");
const hostName="127.0.0.1";
const port=8080;
const page=`<h1>Welcome to Home Page</h1>
<h5>Contact us</h5>
<p><input type='text' placeholder='Enter Email Address'/></p>
<p><input type='tel' placeholder='Enter Contact Number'/></p>
<p><input type='button' value='submit'/></p>
`;
const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.statusCode=200;
    // // res.setHeader('Content-type','text/plain');
    // res.writeHead(200,{'Content-Type':'application/json'})
    // // res.end("Hello Nishant Bhatnagar");
    // res.end('{"name":"Nishant","title":"Java Developer"}');
    const books = JSON.stringify([
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
        { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
    ]);
    
    const authors = JSON.stringify([
        { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
        { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
    ]);

        res.setHeader('Content-Type', 'application/json');
        switch (req.url) {
            case "/":
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(page);
                break;
            case "/books":
                res.writeHead(200);
                res.end(books);
                break;
            case "/authors":
                res.writeHead(200);
                res.end(authors);
                break;
            default:
                res.writeHead(404);
                res.end(JSON.stringify({error:"Resource not found"}));
        }
    }
)

server.listen(port,hostName,()=>{
    console.log(`Server starts at http://${hostName}:${port}`);
})

