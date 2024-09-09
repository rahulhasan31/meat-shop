"use client";

import { useAuth } from "@/authService/authContext";
import Order from "@/components/Order/Order";
import Spinner from "@/components/ui/Spinner/Spinner";
import User from "@/components/User/User";
import useAuthCheck from "@/ulits/PriveteRoute";
import { useRouter } from "next/navigation";

const AllUser = () => {
  const { isLoggedIn, logout, userRole } = useAuth();
  const router = useRouter();
  if (!isLoggedIn) return <Spinner />;
  return (
    <>
      {isLoggedIn && userRole === "admin" ? (
        <User />
      ) : (
        <>
          <Spinner /> && {router.push("/")}
        </>
      )}
    </>
  );
};

export default AllUser;
