const express = require("express");
const fs = require("fs");


const index = fs.readFileSync("index.html","utf-8");
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));


const server = express();

server.use((req,res,next) => {
    console.log(req.method)
    next();
});

server.get("/demo",(req,res) => {
    // res.send("<h1>Hello World</h1>")
    res.sendFile("C:\\Users\\Hp\\Documents\\Node-app\\index.html")
    // res.json(data)
    // res.sendStatus(404)
})

server.listen(8080,() => {
    console.log("Server started");
})