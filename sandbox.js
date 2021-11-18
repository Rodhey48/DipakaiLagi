const {User} = require("./models/index")

user = {
    name: 'Rudy',
    password: "1234",
    address: 'jl. delima setu',
    telephone: '085642298655',
    email: 'rinter18@gmail.com',
    type: 'Custumer',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-10'
}

User.create(user)
