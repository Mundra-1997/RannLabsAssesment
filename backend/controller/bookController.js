const Book = require("../model/bookModel");

const bookPost = async (req, res) => {
  try {
    const { title, summary, numAuthors, remark } = req.body;
    const book = new Book({
      title,
      document: req.file.path, 
      summary,
      numAuthors,
      remark,
      
    });
    const savedBook = await book.save();

    res.json(savedBook);
  } catch (error) {
    console.error("Failed to initialize book:", error);
    res.status(500).json({ error: "Failed to initialize book" });
  }
};

const findBook = async (req, res) => {
  try {
    const books = await Book.find({});

    res.json(books);
  } catch (error) {
    console.error("Failed to fetch books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

module.exports = { findBook, bookPost };
