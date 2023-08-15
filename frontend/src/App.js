import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import Expense from "./components/Expense";

import ErrorElement from "./components/Error";
import Layout from "./components/Layout";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          element: <AddExpense />,
        },
        {
          path: "/expense",
          element: <Expense/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
