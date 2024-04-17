import React, { useContext } from "react";
import delButton from "../assets/icon-delete.svg";
import CartContext from "../context/CartContext";
import { productData } from "../data.js";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  function getProductData(id) {
    return productData;
  }
  return (
    <div className="bg-white fixed top-24 md:top-auto left-4 md:left-auto md:absolute shadow-xl rounded-xl flex flex-col gap-4 mt-4 md:right-0 min-h-44 w-[350px] md:w-96 z-20">
      <div className="text-xl font-bold border-b-2 border-grayishBlue px-8 py-4">
        Cart
      </div>
      {cartItems &&
        Object.keys(cartItems).map((id) =>
          cartItems[id] > 0 ? (
            <div
              key={id}
              className="px-8 mt-4 flex flex-row gap-4 items-center"
            >
              <div className="w-1/5">
                <img
                  src={getProductData(id).images[0].th}
                  alt=""
                  className="object-fit"
                />
              </div>
              <div className="w-4/5">
                <p className="capitalize text-sm">{getProductData(id).name}</p>
                <p>
                  ${getProductData(id).discountedPrice.toFixed(2)} x{" "}
                  {cartItems[id]}
                  <span className="font-bold pl-6">
                    $
                    {(
                      getProductData(id).discountedPrice * cartItems[id]
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className=" flex justify-end">
                <img
                  onClick={() => removeFromCart(id)}
                  src={delButton}
                  alt=""
                  className="object-fit h-6"
                />
              </div>
            </div>
          ) : null
        )}

      <div className="p-8">
        <button className="bg-orange text-white rounded-xl w-full py-4 active:opacity-70">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
