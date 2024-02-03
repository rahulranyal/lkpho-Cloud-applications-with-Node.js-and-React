const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let dateVal = today.getDate();
  if (dateVal.getHours() > 6 && dateVal.getHours()<12) {
    greeting = "Good Morning!"
  } else if (dateVal.getHours() >=12 && dateVal.getHours()<18) {
    greeting = "Good Afternoon!"
  } else if (dateVal.getHours() >=18 && dateVal.getHours()<21) {
    greeting = "Good Evening!"
  } else {
    greeting="Good Night!"
  }

  res.end(`Hello, ${greeting}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);