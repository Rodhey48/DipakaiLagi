'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let user = [{
      name: 'admin',
      password: "1234",
      address: 'jl. delima setu',
      telephone: '085642298655',
      email: 'rinter18@gmail.com',
      type: 'Admin',
      createdAt: '2021-10-10',
      updatedAt: '2021-10-10'
    }]
    return queryInterface.bulkInsert('Users', user, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null)
  } 
};
