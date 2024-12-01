// create web server
const express = require("express");
const app = express();

// create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// listen to port 3000
app.listen(3000, () => {
  console.log("listening on port 3000");
});

// install nodemon to auto restart server
// npm install -g nodemon
// run server with nodemon
// nodemon comments.js
// nodemon will restart server every time we make changes