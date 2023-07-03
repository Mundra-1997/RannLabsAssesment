const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      const nameOfFile = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, Date.now() + '-' + nameOfFile);
    }
  });
  
  // Word documents
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file format. Only Word documents are allowed.'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  })
const {bookPost,findBook } = require('../controller/bookController')

router.post('/book',upload.single('document'), bookPost)
router.get('/book', findBook)

module.exports = router