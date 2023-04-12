const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
});


app.get("/", (req, res,next) => {
  Host.find((err, host) => {
    console.log(host);
  })
});

io.on('connection', (socket) => {
  console.log('user connected');
});



io.listen(4001);

app.listen(4000, () => console.log("Example app is listening on port 4000."));
