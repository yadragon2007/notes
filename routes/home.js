const express = require('express');
const router = express.Router()

const homeController = require('../controller/homeController');


router.get('/' ,homeController.home_index_get)
router.post('/note/add' ,homeController.addNote_index_post)
router.post('/note/update/:noteIndex' ,homeController.updateNote_index_post)
router.delete('/note/delete' ,homeController.deleteNote_index_delete)


module.exports = router 