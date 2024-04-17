const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

const port = 9000;

const corOptions = {
  // use origin * for development purpose
  origin: true,
  // methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE"],
  methods: ["GET", "POST", "HEAD", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("hello, world!");
})

app.listen(port, () => {
  console.log("CORS-enabled web server");
  console.log(`Backend is listening on port ${port}`);
});