const {category, item, User, Sold} = require("../models/index")
const { Op } = require("sequelize");

class ControllerAdmin {
    static showAdmin (req, res) {
        
            res.render('showadmin',{})
        
    }
    static showListItems ( req, res) {
        let search = `%${req.query.search}%`
        console.log(search)
        if(req.query.search !== undefined){
            item.findAll({
                include: [{
                    model: category,
                    
                },],
                where: {
                    name: {
                        [Op.like]: search
                    }
                }
                
            })
            .then( data => {
                // console.log(data[0].category)
                res.render("adminlistitem", {data})
            })
            .catch(err => res.send(err))
        }else {
            item.findAll({
                include: [{
                    model: category
                }]
            })
            .then( data => {
                // console.log(data[0].category)
                res.render("adminlistitem", {data})
            })
            .catch(err => res.send(err))
        }
    }
    static AddItems (req, res) {
        category.findAll()
        .then(data => {
            res.render("additem", {data})

        })
        .catch(err => {
            res.send(err)
        })
    }
    static postAddItem (req, res) {
        let input = req.body
        item.create(input)
        .then(data => res.redirect("/admin/listitems"))
        .catch(err => res.send(err))
    }
    static editItem (req, res) {
        let id = req.params.id
        // console.log(+id)
        item.findByPk(+id)
        .then (item => {
            category.findAll()
            .then(categories => {
                res.render("edititem", {item, categories})

            })
            .catch(err => {
                res.send(err)
            })
        })
        .catch(err => {
            res.send(err)
        })
    }
    static postEditItem (req, res) {
        let idI = +req.params.id
        let input = req.body
        console.log(input)
        item.update(input, {
            where: {id: idI}
        })
        .then(data => res.redirect(`/admin/listitems`))
        .catch(err => res.send(err))
    }
    static deleteItem (req, res) {
        let idI = +req.params.id
        item.destroy ({where: {id: idI}})
            .then(data => res.redirect(`/admin/listitems`))
            .catch(err => res.send(err))
    }
}

module.exports =ControllerAdmin