const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookShema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Enter a title for the book"
  },
  subtitle:{
      type:String
  },
  authors: [],
  description: {
    type: String
  },
  image: {
    type: String
  },
  link: {
    type: String
  }
});

const Book = mongoose.model("Book", BookShema);

module.exports = Book;
