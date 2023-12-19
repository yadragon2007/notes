const express = require('express');
const router = express.Router()

const loginController = require('../controller/loginController');


router.get('/login' , loginController.login_login_get )
router.post('/login' , loginController.login_login_post)
router.get('/login/err' , loginController.loginErr_login_get)
router.get('/logout' , loginController.logout_get )


module.exports = router