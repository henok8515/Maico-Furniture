import React from "react";
import { IoMdCart } from "react-icons/io";
import { useCart } from "./CartContext";

const CartIcon = ({ itemCount }) => {
  const { state } = useCart();
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <IoMdCart size={24} />
      {6 > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "4px 6px",
            fontSize: "12px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "20px",
          }}
        >
          {state.cartItems.length === 0 ? (
            <p>0</p>
          ) : (
            <ul>{state.cartItems.length}</ul>
          )}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
