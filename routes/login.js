const express = require('express')
const app = express()
const router = express.Router()
const LoginController = require('../controllers/loginController')



router.get('/', LoginController.showLogin)
router.post('/', LoginController.postLogin)


module.exports = router 