
const Expense = require("../model/expense");

exports.addexpense=(req,res)=>{

    Expense.create(req.body)
    console.log(req.body)

}