'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Favourites',
      { userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: "compositeKey",
          allowNull: false,
              references: {
                  model: "Users",
                  key: "id"
              },
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
        },
        quizId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          unique: "compositeKey",
          allowNull: false,
            references: {
                model: "Quizzes",
                key: "id"
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      {
        sync: {force: true}
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Favourites');
  }
};
