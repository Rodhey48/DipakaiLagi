const express = require('express')
const app = express()
const router = express.Router()

const ControllerAdmin = require("../controllers/adminController")
const Controller = require('../controllers/loginController')



router.get('/',ControllerAdmin.showAdmin )
router.get('/listitems', ControllerAdmin.showListItems)
router.get('/listitems/:id/edit', ControllerAdmin.editItem)
router.post('/listitems/:id/edit', ControllerAdmin.postEditItem)
router.get('/listitems/:id/delete', ControllerAdmin.deleteItem )
router.get('/additem', ControllerAdmin.AddItems)
router.post('/additem', ControllerAdmin.postAddItem)
// router.get('')
router.get('/listSold', (req, res) => res.send('List sold admin'))


module.exports = router 