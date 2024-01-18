// reqire http
const http = require("http");

// create a http server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello From The Other Sides Home Page");
  } else if (req.url === "/about") {
    res.end("Hello From The Other Sides About Page");
  } else if (req.url === "/contact") {
    res.end("Hello From The Other Sides Contact Page");
  } else {
    res.end("404 Error Page. Pagr does not exist");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
