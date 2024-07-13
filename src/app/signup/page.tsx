"use client";

import { useCreateUserMutation } from "@/redux/service/auth/authSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import {
  getUserInfo,
  storeCookies,
  storeUserInfo,
} from "@/authService/authservice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/authService/authContext";
import Image from "next/image";
type Inputs = {
  userName: string;
  userEmail: string;
  password: string;
};

interface Issue {
  message: string;
}

interface ErrorData {
  message?: string;
  data?: {
    issues?: Issue[];
  };
}

interface FetchBaseQueryError {
  status: number;
  data: ErrorData;
}

const SignUp = () => {
  const [createUser, { isSuccess, data, isError, error }] =
    useCreateUserMutation();
  console.log("data", data);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    const user = {
      userName: data.userName,
      userEmail: data.userEmail,
      password: data.password,
      role: "user",
    };
    createUser(user);
    console.log("user", user);
  };

  const getErrorMessage = (
    error: FetchBaseQueryError | undefined
  ): JSX.Element | null => {
    if (!error) return null;

    if (error.status === 400 && error.data.message) {
      return <>{error.data.message}</>;
    }

    if (error.status === 500 && error.data.data?.issues) {
      return (
        <>
          {error.data.data.issues.map((d, index) => (
            <small key={index}>{d.message}</small>
          ))}
        </>
      );
    }

    return null;
  };
  // const router = useRouter();
  // if (isSuccess) {
  //   return router.push("/");
  // }
  useEffect(() => {
    if (isSuccess) {
      storeUserInfo({ access: data?.data.token });
      storeCookies({ refreshToken: data?.data.refreshToken });
      login({
        access: data?.data.token,
        refreshToken: data?.data.refreshToken,
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    const user = getUserInfo();
    console.log("user", user);
  }, []);
  return (
    <div className="relative">
      <img
        src="/bg-img.png"
        className="absolute inset-0 object-cover w-full h-full "
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 mx-auto">
              <div
                style={{
                  backgroundColor: "#f1ece3",
                }}
                className="rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      {...register("userName", { required: true })}
                      placeholder="John"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="userName"
                    />
                    {errors.userName && (
                      <p className="text-red-500 text-sm">Name is required</p>
                    )}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium">
                      Email
                    </label>
                    <input
                      {...register("userEmail", { required: true })}
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="userEmail"
                    />
                    {errors.userEmail && (
                      <p className="text-red-500 text-sm">Email is required</p>
                    )}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium">
                      Password
                    </label>
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">
                        Password is required
                      </p>
                    )}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-500">
                      SignUp
                    </button>
                    <p className="text-red-500 text-center mt-1">
                      {getErrorMessage(error as FetchBaseQueryError)}
                    </p>
                  </div>
                </form>
                <p>
                  You have Account{" "}
                  <Link className="text-blue-500" href={"/login"}>
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
