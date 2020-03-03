
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

class User extends Model {}
class Quiz extends Model {}

User.init(
  { name: {
      type: DataTypes.STRING,
      unique: { msg: "Name already exists"},
      allowNull: false,
      validate: {
        isAlphanumeric: { args: true, msg: "name: invalid characters"}
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: { args:   [0], msg: "Age: less than 0"},
        max: { args: [140], msg: "Age: higher than 140"}
      }
    }
  },
  { sequelize }
);

Quiz.init(
  { question: {
      type: DataTypes.STRING,
      unique: { msg: "Quiz already exists"}
    },
    answer: DataTypes.STRING
  }, 
  { sequelize }
);


Quiz.belongsTo(User, {
  as: 'author', 
  foreignKey: 'authorId', 
  onDelete: 'CASCADE'
});
User.hasMany(Quiz, {
  as: 'posts', 
  foreignKey: 'authorId'
});

// N:N relations default is -> onDelete: 'cascade'
User.belongsToMany(Quiz, {
  as: 'fav',
  foreignKey: 'userId',
  otherKey: 'quizId',
  through: 'Favourites'
});
Quiz.belongsToMany(User, {
  as: 'fan',
  foreignKey: 'quizId',
  otherKey: 'userId',
  through: 'Favourites'
});


module.exports = sequelize;

