"use client";
import { IProducts } from "@/app/types/ProductType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  products: IProducts[];
  total: any;
}

const getInitialState = (): ICart => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    const savedTotal = localStorage.getItem("total");
    return {
      products: savedCart ? JSON.parse(savedCart) : [],
      total: savedTotal ? parseFloat(savedTotal) : 0,
    };
  }
  return { products: [], total: 0 };
};

const initialState: ICart = getInitialState();

const CarttSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProducts>) => {
      const exiting = state.products.find(
        (product: any) => product._id === action.payload._id
      );
      if (exiting) {
        exiting.quantity = exiting.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;

      state.total = parseFloat(state.total.toFixed(2));

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.products));
        localStorage.setItem("total", JSON.stringify(state.total));
      }
    },
    removeOne: (state, action: PayloadAction<IProducts>) => {
      const exiting = state.products.find(
        (product: any) => product._id === action.payload._id
      );
      if (exiting && exiting.quantity > 1) {
        exiting.quantity = exiting.quantity - 1;
      } else {
        state.products = state.products.filter(
          product => product._id !== action.payload._id
        );
      }

      state.total -= action.payload.price;

      // Format total to 2 decimal places
      state.total = parseFloat(state.total.toFixed(2));

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.products));
        localStorage.setItem("total", JSON.stringify(state.total));
      }
    },

    removeFromCart: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        product => product._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;

      // Format total to 2 decimal places
      state.total = parseFloat(state.total.toFixed(2));

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.products));
        localStorage.setItem("total", JSON.stringify(state.total));
      }
    },

    // clearCart: state => {
    //   state.products = [];
    //   if (typeof window !== "undefined") {
    //     localStorage.removeItem("cart");
    //   }
    // },
  },
});

export const { addToCart, removeFromCart, removeOne } = CarttSlice.actions;
export default CarttSlice.reducer;
