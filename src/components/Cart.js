"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();
  const [email, setEmail] = useState("");

  const removeItem = (itemId) => {
    console.log(itemId);
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    const cartItems = state.cartItems
      .map((item) => `${item.name} - $${item.price}`)
      .join(", ");

    const templateParams = {
      email: email,
      items: cartItems,
    };

    emailjs
      .send(
        "service_2o25hpq",
        "template_46y1enb",
        templateParams,
        "bIAsAM7oU7p4dGHia"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(`Email sent By ${email} with items: ${cartItems}`);
          // Optionally clear the cart after sending
          // clearCart();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Cart Summary
        </h2>
        {state.cartItems.length === 0 ? (
          <>
            <p className="mt-4 font-normal text-lg leading-8 text-gray-500 text-center">
              Your cart is empty. Please add items to your cart.
            </p>
            <Link
              className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm transition-all duration-500 hover:bg-indigo-700"
              to="/"
            >
              GoBack
            </Link>
          </>
        ) : (
          <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
              <div className="data">
                <p className="font-semibold text-base leading-7 text-black">
                  Order Summary
                </p>
              </div>
              <button
                onClick={clearCart}
                className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 max-lg:mt-5 shadow-sm transition-all duration-500 hover:bg-indigo-700"
              >
                Clear Cart
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              {state.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full"
                >
                  <div className="img-box max-lg:w-2/3 object-contain">
                    <img
                      src={item.image.type}
                      alt={item.name}
                      className="aspect-square w-full lg:max-w-[140px] rounded-xl object-cover"
                    />
                  </div>
                  <div className="flex flex-row items-center w-full ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                      <div className="flex items-center">
                        <div>
                          <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                            {item.name}
                          </h2>
                          <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                            By: Maico Furniture
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-5">
                        <div className="col-span-5 lg:col-span-1 flex items-center">
                          <p className="font-medium text-sm leading-7 text-black">
                            $ {item.price}
                          </p>
                        </div>
                        <div className="col-span-5 lg:col-span-2 flex items-center">
                          <p className="font-medium text-sm leading-7 text-black">
                            Status:
                          </p>
                          <p className="font-medium text-sm leading-6 whitespace-nowrap py-0.5 px-3 rounded-full bg-emerald-50 text-emerald-600">
                            Available
                          </p>
                        </div>
                        <div className="col-span-5 lg:col-span-2 flex items-center">
                          <button
                            onClick={() => removeItem(item.price)}
                            className="rounded-full py-2 px-4 max-lg:px2 font-semibold text-sm leading-7 text-white bg-red-600 transition-all duration-500 hover:bg-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-semibold text-base leading-7 text-black">
              Send Us The Item You want through an Email
            </p>
            <input
              value={email}
              onChange={handleEmailChange}
              required
              type="email"
              className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Enter your email"
            />
            <button
              onClick={sendEmail}
              className="rounded-full mt-2 py-3 px-7 font-semibold text-sm leading-7 text-white bg-indigo-600 transition-all duration-500 hover:bg-indigo-700"
            >
              Send Cart Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
