const {User} = require("../models/index")
const bcrypt = require("bcryptjs")
const session = require('express-session')

class Controller {
    static showLogin (req, res){
        res.render("loginpage", {})
    }
    static postLogin (req, res) {
        const input = req.body
        // console.log(input)
        User.findOne({where: {name: input.username}})
        .then (data => {
            const flagLogin = bcrypt.compareSync(input.password, data.password)
            console.log(flagLogin)
            if (flagLogin) {
                // console.log(data.name)
                // req.session.username = data.name
                // req.session.type = data.type
                if(data.type === "Admin") res.redirect("/admin")
                else if(data.type === "Custumer") res.redirect("/beranda")
            }else res.redirect('/login')
        })
            
        .catch (err => {
            console.log(err)
            res.redirect('/login')}
            )
    }

    static registerCust (req, res) {
        res.render("registercust")
    }
    static postRegisterCust (req, res) {
        let input = req.body
        input.type = "Custumer"
        User.create(input)
        .then(data => res.redirect('/'))
        .catch(err => res.send(err))
    }
}

module.exports = Controller