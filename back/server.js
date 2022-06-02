const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = require('./api/router')

app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

db = mysql.createConnection({
  host: "localhost",
  user: "dan",
  password: "dan$",
  database: "crud",
  port: "3306"
});

db.connect((err) => {
  if (err) console.error('error connecting: ' + err.stack);
  console.log('connected as id ' + db.threadId);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router)

app.listen(8080, () => console.log("Server started: 8080"));
