const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  document: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  numAuthors: {
    type: Number,
    
  },
  remark: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
