import React from "react";
import { useCart } from "./CartContext";
function Cart() {
  const { state, dispatch } = useCart();
  console.log(state.cartItems);
  return <div>{state.cartItems.name}</div>;
}

export default Cart;
