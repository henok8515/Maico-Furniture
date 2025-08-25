import React from "react";
import { useCart } from "./CartContext";
import { sendEmail } from "./sendEmail";

const SendEmailButton = () => {
  const { state } = useCart();

  const handleSendEmail = () => {
    sendEmail(state.cartItems);
  };

  return (
    <button onClick={handleSendEmail} disabled={state.cartItems.length === 0}>
      Send Cart via Email
    </button>
  );
};

export default SendEmailButton;
