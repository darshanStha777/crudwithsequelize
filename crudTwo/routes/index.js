const express = require('express');
const router = express.Router();

const mainController = require('../controller/maincontroller')

router.get('/', mainController.getindex)
router.get('/view', mainController.getview)
router.get('/update/:id', mainController.getupdate)
router.get('/delete/:id', mainController.getdelete)

router.post('/userdata', mainController.postIndex)
router.post('/userupdate/:id', mainController.postupdateddata)
module.exports = router;