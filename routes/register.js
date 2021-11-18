const express = require('express')
const app = express()
const router = express.Router()
const LoginController = require('../controllers/loginController')



router.get ('/', LoginController.registerCust )
router.post ('/', LoginController.postRegisterCust )

module.exports = router