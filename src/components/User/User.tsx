import { useGetAllUserQuery } from "@/redux/service/auth/authSlice";
import React from "react";
import Spinner from "../ui/Spinner/Spinner";
import UserCard from "./UserCard/UserCard";

const User = () => {
  const { data, isLoading } = useGetAllUserQuery(null);

  if (isLoading) return <Spinner />;
  return (
    <section className="grid grid-cols-1 gap-9 lg:grid-cols-3">
      {data?.data.map((user: any) => (
        <UserCard user={user} key={user._id} />
      ))}
    </section>
  );
};

export default User;
