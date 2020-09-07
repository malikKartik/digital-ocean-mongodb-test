const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/create',userController.createUser)

router.get('/get',userController.getUsers)

router.get('/',userController.test)

module.exports = router