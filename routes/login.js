const express = require('express');
const router = express.Router()

const loginController = require('../controller/loginController');


router.get('/login' , loginController.login_login_get )


module.exports = router