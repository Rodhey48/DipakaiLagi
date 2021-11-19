const express = require('express')
const Controller = require('./controllers/loginController')
const app = express()
const session = require('express-session')

const port = 3000

const index = require('./routes/Index')

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        sameSite: true
    }
}))

app.use('/', index)


app.listen(port, function () {
    console.log(`This app running on port ${port}`)
})