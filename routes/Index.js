const express = require('express')
const app = express()
const router = express.Router()
const session = require('express-session')

const beranda = require('./beranda')
const admin = require('./admin')
const login = require("./login")
const register = require("./register")

const LoginController = require('../controllers/loginController')

app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        sameSite: true
    }
}))



router.use("/login", login)
router.use("/register", register )


app.use(function (req, res, next) {
    console.log(req.session.username)
    if (req.session.username) next()
    else res.redirect('/')
})
router.use('/beranda', beranda)

app.use(function (req, res, next) {
    if (req.session.username && req.session.type === 'Admin') next()
    else res.redirect('/')
   
})
router.use('/admin', admin)



module.exports = router 