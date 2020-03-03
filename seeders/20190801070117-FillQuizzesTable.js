'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Quizzes', [
      {
        question: 'Capital of Spain',
        answer: 'Madrid',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Capital of France',
        answer: 'Paris',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Capital of Italy',
        answer: 'Rome',
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Capital of Russia',
        answer: 'Moscow',
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
