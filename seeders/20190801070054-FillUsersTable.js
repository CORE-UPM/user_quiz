'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        name: 'Peter',
        age: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Anna',
        age: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John',
        age: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Users', null, {});
  }
};