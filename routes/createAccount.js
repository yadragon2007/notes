const express = require('express');
const router = express.Router()

const createAccountController = require('../controller/createAccountController');


router.get('/createAccount' ,createAccountController.createAcc_createAcc_get)
router.post('/createAccount' ,createAccountController.createAcc_createAcc_post)


module.exports = router