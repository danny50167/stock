//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
ㅇ;

function getDB() {
  const DB = JSON.parse(
    fs.readFileSync("./public/DB/users.json", { encoding: "utf-8" })
  );
  return DB;
}

function updateDB(newDB) {
  const DB = JSON.parse(newDB);
  fs.writeFileSync("./public/DB/users.json", DB, { encoding: "utf-8" });
}

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/api/users", (req, res) => {
  console.log(body);
  const body = req.body;
  if (method == "checkID") {
    const DB = getDB();
  } else {
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000 -> http://localhost:3000 <-");
});
