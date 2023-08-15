import {configureStore}from '@reduxjs/toolkit'
import expenseslice from './expenseslice';


const Expense=configureStore({reducer:{dataExpense:expenseslice}})

export default Expense;