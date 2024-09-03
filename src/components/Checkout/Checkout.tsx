"use client";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useAppSelector } from "@/redux/lib/hooks";
import { useEffect, useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";
import { getUserInfo } from "@/authService/authservice";
import { useGetSingleUserQuery } from "@/redux/service/auth/authSlice";
import { useCreateOrderMutation, useUpdateOrderStatusMutation } from "@/redux/service/order/orderSlice";

const stripePromise = loadStripe(
  "pk_test_51M6YTaIOaRhLiCR9IUacPMWr7kIOpNT2oEv4gm3lLOoRyLZ0sQplaW3fiYroKVA63hTjrAq5homSPjhn01lr0z36007McI12l5"
);
console.log(stripePromise);
const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [process, setProcess] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>("");

  const { products } = useAppSelector(state => state.cart);
  console.log("products", products[0]?.name);

  const savedTotal: any | null = localStorage.getItem("total");

  const c = parseInt(savedTotal);
  const a = 8;
  const alto = c + a;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Log products only on the client side
  useEffect(() => {
    if (isClient) {
      // console.log(products);
    }
  }, [isClient, products]);
  console.log(alto);
  const amount = alto * 100;
  console.log(amount);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/pay/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify({ amount: amount }),
    })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(error => {
        console.error("Error fetching clientSecret:", error);
      });
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe.js has not loaded yet or clientSecret is missing");
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      console.error("Card Element not found");
      return;
    }

    try {
      // Create a PaymentMethod
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: card,
      });

      if (error) {
        // setCardError(error.message);
        return;
      }

      setProcess(true);

      // Confirm the payment using the PaymentIntent
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (confirmError) {
        // setCardError(confirmError.message);
      } else {
        // Check payment status here
        if (paymentIntent?.status === "succeeded") {
          Swal.fire({
            title: "Your Payment Succeeded",
            text: "You clicked the button!",
            icon: "success",
          });
          setTransactionId(paymentIntent.id);
          handleOrder(paymentIntent.id);
        }
        setProcess(false);
      }
    } catch (err) {
      setCardError("An unexpected error occurred.");
    }
  };
  const [userInfo, setUserInfo] = useState<any>(null);
  // console.log(userInfo);
  const userId: string = userInfo?.id;
  // console.log(userId);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        if (userInfo) {
          setUserInfo(userInfo);
        } else {
          console.log("No user info found or token refresh failed.");
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();

    // Start the token refresh interval
  }, []);

  const { data: userData, isLoading } = useGetSingleUserQuery(userId);
  console.log("userData", userData);
  const [createOrder, { error, isSuccess }] = useCreateOrderMutation();

  const handleOrder = async (paymentId: string) => {
    const orderData = {
      products: products.map(product => ({
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        imgUrl: product.imgUrl,
        imgUrlOne: product.imgUrlOne,
        imgUrlTwo: product.imgUrlTwo,
        productDetails: product.productDetails,
      })),
      paymentID: paymentId,
      paymentAmount: alto, // Make sure `alto` is correctly calculated
      userName: userData?.data.userName,
      userEmail: userData?.data.userEmail,
      userID: userId,
      paymentStatus: "Pending", // Update status to "Paid" as needed
    };

    console.log("Order Data:", orderData); // Logging the order data

    try {
      const response = await createOrder(orderData).unwrap();
      console.log("Order created successfully:", response);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  return (
    <>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
        {
          isLoading?<><p>loading..</p></>:<>  <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          {products?.map(product => (
            <CheckoutCard key={product?._id} product={product} />
          ))}
        </div></>
        }
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  readOnly
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={`${userData?.data.userEmail}`}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium">
                Card Holder
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  readOnly
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder={`${userData?.data.userName}`}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium">
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-full flex-shrink-0">
                  <CardElement className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" />

                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16">
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">${savedTotal}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">$8.00</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">${alto}</p>
              </div>
            </div>
            {transactionId && (
              <div className="text-green-600">
                Transaction ID: {transactionId}
              </div>
            )}
            <button
              type="submit"
              disabled={!stripe || process}
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Place Order
            </button>
            {cardError && <div>{cardError}</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
