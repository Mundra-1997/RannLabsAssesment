const express = require('express');
const router = express.Router();
const {publisherSignup,publisherSignin} = require('../controller/publisherController')

router.post('/signup',publisherSignup)
router.post('/signin',publisherSignin)

module.exports = router