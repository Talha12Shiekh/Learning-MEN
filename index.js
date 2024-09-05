const fs = require("fs");


// const text = fs.readFileSync("demo.txt","utf-8")

fs.readFile("demo.txt","utf-8",(err,txt) => {
console.log(txt);
})

// console.log(text);