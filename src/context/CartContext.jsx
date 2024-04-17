import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [quantity, setQuantity] = useState(0);

  const addToCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: quantity }));
  };

  const plusOne = (id) => {
    setQuantity(quantity + 1);
  };
  const minusOne = (id) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((cartItems) => ({ ...cartItems, [id]: 0 }));
  };

  const totalProductQuantity = () => {
    return (
      Object.keys(cartItems).reduce(
        (total, current) => cartItems[current] + total,
        0
      ) || 0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantity,
        addToCart,
        removeFromCart,
        plusOne,
        minusOne,
        totalProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
