
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


// Initialize the database
(async () => {
  try {
    await sequelize.sync();
    let count = await User.count();
    let count1 = await Quiz.count();
    let count2 = await sequelize.models.Favourites.count();
    if (count===0) {
      let c = await User.bulkCreate([
        { name: 'Peter', age: "22"},
        { name: 'Anna', age: 23},
        { name: 'John', age: 30}
      ]);
      let q = await Quiz.bulkCreate([
        { question: 'Capital of Spain', answer: 'Madrid', authorId: 1},
        { question: 'Capital of France', answer: 'Paris', authorId: 1},
        { question: 'Capital of Italy', answer: 'Rome', authorId: 2},
        { question: 'Capital of Russia', answer: 'Moscow', authorId: 3}
      ])
      let f = await sequelize.models.Favourites.bulkCreate([
        { userId: 1, quizId: 3},
        { userId: 2, quizId: 4},
        { userId: 2, quizId: 1},
        { userId: 2, quizId: 2},
        { userId: 3, quizId: 2}
      ]);
      process.stdout.write(`  DB created: (${c.length} users, ${q.length} quizzes, ${f.length} favs)\n> `);
      return;
    } else {
      process.stdout.write(`  DB exists: (${count} users, ${count1} quizzes, ${count2} favs)\n> `);
    };
  } catch (err) {
    console.log(`  ${err}`);
  }
})();

module.exports = sequelize;

