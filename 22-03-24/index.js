require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Library = require("./models/library");
const User = require("./models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const db = mongoose.connection;

require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

db.on("error", (err) => console.log(err));
db.once("open", () => console.log("open"));

app.use(express.json());

const authToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Not valid token" });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Not permission" });
      req.user = user;
      next();
    });
  }
};

app.get("/books", authToken, async (req, res) => {
  let { page, limit, sort } = req.query;
  if (!page) {
    page = 1;
  }

  if (!limit) {
    limit = 2;
  }
  const skip = (page - 1) * limit;

  try {
    const books = await Library.find()
      .sort({ [sort]: -1 })
      .skip(skip)
      .limit(limit);
    res.status(200).json({ page: page, limit: limit, books: books });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  // http://localhost:3000/books?page=2
});

app.post("/books", async (req, res) => {
  const book = new Library({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
  });

  try {
    let newBook = book.save();
    res.status(200).json({ newBook });
  } catch (err) {
    res.status(400).json({ message: "add new Book" });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);
    const { title, author, year } = req.body;

    if (title && author && year) {
      book.title = title;
      book.author = author;
      book.year = year;

      await book.save();
      res.status(201).json({ message: "Modify" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Library.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "book deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//register
app.post("/register", async (req, res) => {
  try {
    const hashedPasw = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPasw,
    });

    const newUser = await user.save();
    res.status(201).json({ message: "user registered", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "the registration was unsuccessful" });
  }
});

//login
app.post("/login", async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  });

  if (user === null) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ accessToken });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(3000, () => console.log("server started"));
