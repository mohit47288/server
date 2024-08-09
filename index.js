const http = require("http");

const myServer = http.createServer((req,res) =>{

    console.log("New req Rec.");
    res.end("hello chandan is Chutiya");



});

myServer.listen(3000,()=> console.log("Sever Started!"));




