const express = require('express');
const router = express.Router();

const {authorSignin,authorSignup} = require('../controller/authorController')

router.post('/signin',authorSignin)
router.post('/signup',authorSignup)


module.exports = router;