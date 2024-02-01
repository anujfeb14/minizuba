import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    filteredOrders: [],
  },
  reducers: {
    addOrders: (state, action) => {
      state.orders = action.payload;
    },
    addFiltered: (state, action) => {
      state.filteredOrders = action.payload;
    },
  },
});

export const { addOrders, addFiltered } = orderSlice.actions;
export default orderSlice.reducer;
