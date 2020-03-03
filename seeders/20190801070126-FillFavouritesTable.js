'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Favourites', [
      {
        userId: '1',
        quizId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '2',
        quizId: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '2',
        quizId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '2',
        quizId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '3',
        quizId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Favourites', null, {});
  }
};
