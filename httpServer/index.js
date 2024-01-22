// reqire http
const http = require("http");

const fs = require("fs");
// create a http server

const server = http.createServer((req, res) => {

  const data = fs.readFileSync(`${__dirname}/UserAPI/userapi.json`, "utf-8");
  const objData = JSON.parse(data);


  if (req.url === "/") {
    res.end("Hello From The Other Sides Home Page");
  } else if (req.url === "/about") {
    res.end("Hello From The Other Sides About Page");
  } else if (req.url === "/contact") {
    res.end("Hello From The Other Sides Contact Page");
  } else if (req.url === "/userapi") {
      res.writeHead(200, {"content-type": "application/json"});
      res.end(objData[0].name);
    
    // res.end("Hello from the user Api page");
  } else {
    res.end("404 Error Page. Pagr does not exist");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
