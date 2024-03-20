// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("DATABASE_URL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
});

const Book = mongoose.model("Book", BookSchema);

app.use(bodyParser.json());

app.get("/api/books", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  try {
    const totalBooks = await Book.countDocuments();
    const books = await Book.find().limit(limit).skip(startIndex);

    const pagination = {};

    if (endIndex < totalBooks) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    res.json({ pagination, data: books });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/books/:id", getBook, (req, res) => {
  res.json(res.book);
});

app.put("/api/books/:id", getBook, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  if (req.body.genre != null) {
    res.book.genre = req.body.genre;
  }
  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/api/books/:id", getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getBook(req, res, next) {
  let book;
  try {
    book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.book = book;
  next();
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
