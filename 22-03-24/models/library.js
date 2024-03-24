const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: false,
    default: "no-year",
  },
});

module.exports = mongoose.model("Library", librarySchema);
