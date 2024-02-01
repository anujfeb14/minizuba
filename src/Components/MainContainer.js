import { useDispatch, useSelector } from "react-redux";
import useOrderDetails from "../utils/hooks/useOrderDetails";
import { useState } from "react";
import { addFiltered } from "../utils/Redux/orderSlice";

const MainContainer = () => {
  useOrderDetails();

  const dispatch = useDispatch();
  const orders = useSelector((store) => store.order.orders);
  const filteredOrders = useSelector((store) => store.order.filteredOrders);
  if (!orders.length) return <h1 className="font-bold text-2xl">Loading...</h1>;
  const columns = Object.keys(orders[0]);

  const handleFilter = (e) => {
    const filteredList = orders.filter(
      (order) => order.Quantity == e.target.value
    );
    if (e.target.value === null || e.target.value === "") {
      dispatch(addFiltered(orders));
    } else {
      dispatch(addFiltered(filteredList));
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <label htmlFor="searchbox">Filter By Quantity</label>
        <input
          className="h-8 w-1/4 px-2 mx-4 rounded-lg my-3 bg-slate-200 justify-center"
          type="text"
          id="searchbox"
          placeholder="Filter by quantity"
          onChange={(e) => handleFilter(e)}
        />
      </div>

      <table className="border-separate border border-slate-500">
        <thead>
          <tr>
            {columns.map((column) => (
              <th className="border border-slate-600" keys={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr
              className="bg-gray-50 hover:bg-gray-200"
              key={order.OrderLineID}
            >
              <td className="border border-slate-700">{order.OrderLineID}</td>
              <td className="border border-slate-700">{order.OrderID}</td>
              <td className="border border-slate-700">{order.StockItemID}</td>
              <td className="border border-slate-700 text-wrap">
                {order.Description}
              </td>
              <td className="border border-slate-700">{order.PackageTypeID}</td>
              <td className="border border-slate-700">{order.Quantity}</td>
              <td className="border border-slate-700">{order.UnitPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MainContainer;
