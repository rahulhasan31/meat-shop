"use client";

import { useGetUserOrderQuery } from "@/redux/service/order/orderSlice";
import useUserInfo from "@/ulits/useUserInfoHook";
import Spinner from "../ui/Spinner/Spinner";
import OrderDetails from "./OrderDetails/OrderDetails";

const Order = () => {
  const { userInfo, loading, error } = useUserInfo();
  const { data, isLoading } = useGetUserOrderQuery(userInfo?.id);
  console.log("order Data",data?.data);

  if (isLoading && loading) return <Spinner />;
  return (
    <>
      {data?.data.map((order: any) => (
        <OrderDetails order={order} key={order._id} />
      ))}
    </>
  );
};

export default Order;
