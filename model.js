
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false};
const sequelize = new Sequelize("sqlite:db.sqlite", options);

class User extends Model {}

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


// Initialize the database
(async () => {
  try {
    await sequelize.sync();
    let count = await User.count();
    if (count===0) {
      let c = await User.bulkCreate([
        { name: 'Peter', age: "22"},
        { name: 'Anna', age: 23},
        { name: 'John', age: 30}
      ]);
      process.stdout.write(`  DB created with ${c.length} elems\n> `);
      return;
    } else {
      process.stdout.write(`  DB exists & has ${count} elems\n> `);
    };
  } catch (err) {
    console.log(`  ${err}`);
  }
})();

module.exports = sequelize;

