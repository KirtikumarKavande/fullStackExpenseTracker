import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpense } from "../store/expenseslice";

const Expense = () => {
  const storeData = useSelector((store) => store.dataExpense.expenseData);
  console.log("store", storeData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:4000/show-expense")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res);
        dispatch(fetchExpense(res));
      });
  }, []);
  const handleDeleteExpeses = (id) => {
    const updatedData = storeData.filter((item) => {
      return item.id !== id;
    });

    dispatch(fetchExpense(updatedData));

    fetch(`http://localhost:4000/delete-expense/${id}`);
  };
  const handleEditExpeses=()=>{
    
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      amount
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {storeData.map((item) => (
                    <tr className="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {item.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {item.amount}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => {
                            handleDeleteExpeses(item.id);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            handleEditExpeses(item.id);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
