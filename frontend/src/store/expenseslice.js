const { createSlice } = require("@reduxjs/toolkit");

const initialData = [];
const expenseSlice = createSlice({
  initialState: initialData,
  name: "expense",
  reducers: {
    fetchExpense(state, action) {
      state.initialData = action.payload;
    },
  },
});

export const { fetchExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
