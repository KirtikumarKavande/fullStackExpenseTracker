import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../store/expenseslice";

const EditForm = ({ editexpense, setEditExpense }) => {
  const storeData = useSelector((store) => store.dataExpense.expenseData);
  const dispatch = useDispatch();

  const handleEditSubmit = (e) => {
    const newArray = [...storeData];

    e.preventDefault();
    fetch(`http://localhost:4000/edit-expense/${editexpense.id}`, {
      method: "POST",
      body: JSON.stringify(editexpense),
      headers: { "content-type": "application/json" },
    });

    const index = storeData.findIndex((object) => {
      return object.id === editexpense.id;
    });
    newArray[index] = editexpense;
    dispatch(fetchExpense(newArray));
  };

  return (
    <form
      className=" flex flex-col w-96 m-auto space-y-3 p-3 border border-gray-400 shadow-lg bg-slate-300 mt-3 rounded-md "
      onSubmit={handleEditSubmit}
    >
      <label>Title</label>
      <input
        placeholder="title of Expense"
        type="text"
        className="border border-black p-2"
        value={editexpense.title}
        onChange={(e) => {
          setEditExpense((prev) => ({ ...prev, title: e.target.value }));
        }}
      />
      <label for="cars">Category</label>

      <select
        className="border border-black"
        value={editexpense.category}
        onChange={(e) => {
          setEditExpense((prev) => ({ ...prev, category: e.target.value }));
        }}
      >
        <option>not selected</option>

        <option>Grocery</option>
        <option>Game</option>
        <option>Party</option>
        <option>Daily Essential</option>
      </select>
      <label>Amount</label>
      <input
        type="number"
        className="border border-black p-2 "
        placeholder="amount spend"
        value={editexpense.amount}
        onChange={(e) => {
          setEditExpense((prev) => ({ ...prev, amount: e.target.value }));
        }}
      />
      <button className="p-2 bg-green-600">Edit Expense</button>
    </form>
  );
};

export default EditForm;
