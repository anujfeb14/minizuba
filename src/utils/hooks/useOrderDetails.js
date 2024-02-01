import { useEffect } from "react";
import { ORDER_API } from "../Constants";
import { useDispatch } from "react-redux";
import { addFiltered, addOrders } from "../Redux/orderSlice";

const useOrderDetails = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await fetch(ORDER_API);
    const json = await data.json();
    dispatch(addOrders(json));
    dispatch(addFiltered(json));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useOrderDetails;
