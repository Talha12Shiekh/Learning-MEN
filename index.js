const http = require("http");

const server = http.createServer((req,res) => {
    console.log("Server started");
    res.end("<h1>Hello world</h1>")
})

server.listen(8080)