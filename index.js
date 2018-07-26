const http = require('http');
const port = process.env.PORT || 3000;
const figlet = require('figlet');

const handler = (req, res) => {
  console.log('Server received request.');
  console.log(process.env.SECRET_EXAMPLE);
  figlet('Docker is Amazing!!!', (err, data) => {
    if (err) return;
    res.end(data);
  });
};

const server = http.createServer(handler);

server.listen(port, (err) => {
  if (err) console.log(err);
  else {
    console.log('server is up and running on port' + port);
  }
});
