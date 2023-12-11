const express = require('express');
const router = express.Router()

const homeController = require('../controller/homeController');


router.get('/' ,homeController.home_index_get)


module.exports = router