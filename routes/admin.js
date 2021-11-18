const express = require('express')
const app = express()
const router = express.Router()

const ControllerAdmin = require("../controllers/adminController")
const Controller = require('../controllers/loginController')



router.get('/',ControllerAdmin.showAdmin )
router.get('/listitems', ControllerAdmin.showListItems)
router.get('/listitems/:id/edit')
router.get('/additem', ControllerAdmin.AddItems)
router.post('/additem', ControllerAdmin.postAddItem)
router.get('/listSold', (req, res) => res.send('List sold admin'))


module.exports = router 