"use client";

import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import User from "@/components/User/User";
import useAuthCheck from "@/ulits/PriveteRoute";

const AllUser = () => {
  const { isLoggedIn, userRole } = useAuthCheck();

  if (!isLoggedIn) return <Spinner />;
  return <>{userRole === "admin" ? <User /> : <Spinner />}</>;
};

export default AllUser;
