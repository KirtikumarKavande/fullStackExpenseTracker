import React from "react";

const AddExpense = () => {
  return (
    <div className=" flex flex-col w-96 m-auto space-y-3 p-3 border border-gray-400 shadow-lg bg-slate-300 mt-10 ">
      <label>Title</label>
      <input
        placeholder="title of Expense"
        type="text"
        className="border border-black p-2"
      />
      <label for="cars">Category</label>

      <select className="border border-black">
      <option>not selected</option>

        <option>Volvo</option>
        <option>Saab</option>
        <option>Mercedes</option>
        <option>Audi</option>
      </select>
      <label>Amount</label>
      <input type="number" className="border border-black p-2 " placeholder="amount spend"/>
      <button className="p-2 bg-green-600">Add Expense</button>
    </div>
  );
};

export default AddExpense;
