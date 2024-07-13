"use client";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/lib/hooks";
import AddToCard from "./AddToCard";
import Link from "next/link";
import { useAuth } from "@/authService/authContext";
import { useRouter } from "next/navigation";
import Spinner from "../ui/Spinner/Spinner";

const AddToCart = () => {
  const { isLoggedIn } = useAuth();
  const { products, total } = useAppSelector(state => state.cart);
  const router = useRouter();
  const [savedTotal, setSavedTotal] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure this code runs only on the client
  useEffect(() => {
    setIsClient(true);
    const storedTotal = localStorage.getItem("total");
    if (storedTotal) {
      setSavedTotal(parseFloat(storedTotal));
    }
  }, []);

  // Log products only on the client side
  useEffect(() => {
    if (isClient) {
      console.log(products);
    }
  }, [isClient, products]);

  return (
    <>
      {isClient ? (
        <>
          <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              Shopping Cart
            </h1>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <section className="md:col-span-2 space-y-4 max-sm:p-5">
                {isClient &&
                  products?.map((product: any) => (
                    <AddToCard key={product._id} product={product} />
                  ))}
              </section>

              <div className="bg-gray-100 rounded-md p-4 h-max">
                <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
                  Order Summary
                </h3>

                <form className="mt-6">
                  <div>
                    <h3 className="text-base text-gray-800 font-semibold mb-4">
                      Enter Details
                    </h3>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                      />
                      <input
                        type="number"
                        placeholder="Phone No."
                        className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                      />
                    </div>
                  </div>
                </form>

                <ul className="text-gray-800 mt-6 space-y-3">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Subtotal{" "}
                    <span className="ml-auto font-bold">
                      ${total.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Shipping <span className="ml-auto font-bold">$2.00</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm">
                    Tax <span className="ml-auto font-bold">$4.00</span>
                  </li>
                  <hr className="border-gray-300" />
                  <li className="flex flex-wrap gap-4 text-sm font-bold">
                    Total <span className="ml-auto">${total.toFixed(2)}</span>
                  </li>
                </ul>

                <div className="mt-6 space-y-3">
                  {isLoggedIn ? (
                    <Link href={"/checkout"}>
                      <button
                        type="button"
                        className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">
                        Checkout
                      </button>
                    </Link>
                  ) : (
                    <Link href={"/login"}>
                      <button
                        type="button"
                        className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">
                        Login Fast
                      </button>
                    </Link>
                  )}
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Spinner />{" "}
        </>
      )}
    </>
  );
};

export default AddToCart;
