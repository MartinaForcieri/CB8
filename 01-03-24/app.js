const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const data = require("./data.js");

app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

app.get("/books", (req, res) => {
  res.render("books", { title: "Books", data });
});

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
