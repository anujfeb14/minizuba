import { useSelector } from "react-redux";
import useOrderDetails from "../utils/hooks/useOrderDetails";

const MainContainer = () => {
  useOrderDetails();

  const orders = useSelector((store) => store.order.orders);
  if (!orders.length) return null;

  const columns = Object.keys(orders[0]);

  return (
    <>
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
          {orders.map((order) => (
            <tr
              className="bg-gray-50 hover:bg-gray-500"
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
