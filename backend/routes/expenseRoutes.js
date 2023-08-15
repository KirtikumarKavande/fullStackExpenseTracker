const express = require("express");
const router = express.Router();
const expensecontroller = require("../controller/expensecontroller");
router.post("/add-expense", expensecontroller.addexpense);
router.get("/show-expense", expensecontroller.getexpense);
router.get("/delete-expense/:id", expensecontroller.deleteExpense);



module.exports = router;
