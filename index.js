const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("index.html","utf-8")
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));
const heading = data[0];

const server = http.createServer((req,res) => {
    console.log("Server started");

    switch(req.url){
        case "/":
            res.setHeader("Content-Type","text/html");
            res.end(html);
            break;
        case "/api":
            res.setHeader("Content-Type","application/json")
            res.end(data);
            break;
        case "/product":
            res.setHeader("Content-Type","text/html")
            const modifiedHTML = html.replace("**title**",heading.name);
            res.end(modifiedHTML);
            break;
        default:
            res.writeHead(404);
            res.end()
    
    }

    console.log("Server started")

    // res.setHeader("Name","Talha shiekh");
    // // res.setHeader("Content-Type","text/html")
    // res.setHeader("Content-Type","application/json")

    // res.end(data);

})

server.listen(8080)