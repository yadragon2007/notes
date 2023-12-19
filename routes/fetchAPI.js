const express = require('express');
const router = express.Router()

const fetchAPIController = require('../controller/fetchAPIController');


router.post('/account/getData' ,fetchAPIController.getUser_post)


module.exports = router