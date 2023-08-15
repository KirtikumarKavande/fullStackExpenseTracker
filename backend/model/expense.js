const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const Expense = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,

  category: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Expense;
