const express = require("express");
const router = express.Router();
const expensecontroller = require("../controller/expensecontroller");
router.post("/add-expense", expensecontroller.addexpense);
router.get("/show-expense", expensecontroller.getexpense);


module.exports = router;
