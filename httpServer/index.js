// reqire http
const http = require("http");

// create a http server

const server = http.createServer((req, res) =>{
    res.end("Hello From The Other Sides Lokanth");
});

server.listen(8000, "127.0.0.1", () =>{
    console.log("listening to the port no 8000");
});
