const Expense = require("../model/expense");

exports.addexpense = async (req, res) => {
  await Expense.create(req.body);
};
exports.getexpense = async (req, res) => {
  await Expense.findAll().then((expense) => {
    res.status(201).json(expense);
  });
};
exports.deleteExpense = (req, res, next) => {
  Expense.findByPk(req.params.id).then((expense) => {
    expense.destroy();
    res.send("delete success");
  });
};

exports.editExpense = (req, res, next) => {
  console.log(req.body)
  const userId = req.params.id;
  const updatedtitle = req.body.title;
  const updatedcategory = req.body.category;
  const updatedamount = req.body.amount;
  Expense.findByPk(userId)
    .then((expense) => {
      expense.title = updatedtitle;
      expense.category = updatedcategory;
      expense.amount = updatedamount;
      return expense.save();
    })
    .then((result) => {
      console.log("data updated successfully");
      res.send("data edit");
    })
    .catch((err) => {
      console.log(err);
    });
};
