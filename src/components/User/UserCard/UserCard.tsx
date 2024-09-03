"use client"
import { useUpdateRoleMutation,useDeleteUserMutation } from "@/redux/service/auth/authSlice";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
const UserCard = ({ user }: { user: any }) => {
  const [UpdateRole,{isSuccess}]=useUpdateRoleMutation()
const [deleteUser,{isSuccess:sucess}]=useDeleteUserMutation()
  const hanleMakeAdmin=(id:string)=>{
const data={
  _id:id,
  role:"admin"
}
UpdateRole(data)
  }

  const handleDelete=(id:string)=>{
    deleteUser(id)
  }
  useEffect(()=>{
    const showSuccessAlert = async () => {
      if (isSuccess) {
        await Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Admin Make Success!',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    };

    showSuccessAlert();
  },[isSuccess])
  useEffect(()=>{
    const showSuccessAlert = async () => {
      if (sucess) {
        await Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'User Deleted Success!',
          showConfirmButton: false,
          timer: 1000,
        });
      }
    };

    showSuccessAlert();
  },[sucess])
  return (
    <>
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Woman looking front"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Name : {user?.userName}</h2>
          <p className="text-gray-500">Email : {user?.userEmail}</p>
          <p className="text-gray-500">Role : {user?.role}</p>
        </div>
        <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <svg
              className="w-4 fill-current text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <svg
              className="w-4 fill-current text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <div>10k</div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <svg
              className="w-4 fill-current text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            <div>15</div>
          </li>
        </ul>
        <div className="p-4 border-t mx-8 mt-2 flex ">
          <button onClick={()=>handleDelete(user?._id)} className=" me-3 block mx-auto rounded-full bg-red-500 hover:shadow-lg font-semibold text-white px-6 py-2">
            Delete
          </button>
          {
            user?.role=="user"?<><button onClick={()=>hanleMakeAdmin(user?._id)} className=" block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
            Make Admin
          </button></>:<><button disabled className=" block mx-auto rounded-full bg-green-600 hover:shadow-lg font-semibold text-white px-6 py-2">
            Admin
          </button></>
          }
        </div>
      </div>
    </>
  );
};

export default UserCard;
