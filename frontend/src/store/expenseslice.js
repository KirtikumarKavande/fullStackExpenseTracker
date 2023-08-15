const { createSlice } = require("@reduxjs/toolkit");

const initialState ={expenseData:[]};
const expenseSlice = createSlice({
  name: "expense",

  initialState,
  reducers: {
    fetchExpense(state, action) {
      state.expenseData = action.payload;
    },
  },
});

export const { fetchExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
