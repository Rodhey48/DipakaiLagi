'use strict';
const fs = require ('fs')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */let data = JSON.parse(fs.readFileSync("./Data/item.json", 'utf-8'))
    data.forEach(el => {
      delete el.id
      el.CategoryId = el.categoryId
      delete el.categoryId
      el.createdAt = new Date ()
      el.updatedAt = new Date ()
    }) 
    // console.log(data)
    return queryInterface.bulkInsert("items", data, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('items', null, {});
  }
};
