'use strict';
const bcrypt = require("bcryptjs")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.item, {through: models.Sold})
    }
  };
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user, option) {
        console.log(user.password)
        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(user.password, salt)
        console.log(hash)
        user.password = hash;
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};