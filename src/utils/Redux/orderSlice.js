import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrders } = orderSlice.actions;
export default orderSlice.reducer;
