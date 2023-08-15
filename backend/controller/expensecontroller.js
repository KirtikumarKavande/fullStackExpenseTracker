const Expense = require("../model/expense");

exports.addexpense = async (req, res) => {
  await Expense.create(req.body);
};
exports.getexpense = async (req, res) => {
  await Expense.findAll().then((expense) => {
    res.status(201).json(expense);
  });
};
