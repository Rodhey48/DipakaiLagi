const {User, Sold} = require("./models/index")

user = {
    name: 'rudi',
    password: "rudi",
    address: 'jl. delima setu',
    telephone: '085642298655',
    email: 'rinter18@gmail.com',
    type: 'Custumer',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-10'
}

let data = {
    ItemId: 1,
    UserId: 23,
    createdAt: '2021-10-10',
    updatedAt: '2021-10-10',
}

// User.create(user)

Sold.create(data)