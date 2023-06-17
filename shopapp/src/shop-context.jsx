import { createContext, useState } from "react";
import { Products } from "./products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getCartTotal = () => {
    let total = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        total += cartItem[item] * itemInfo.price;
      }
    }
    return total;
  };

  const checkOut = () => {
    console.log("Checkout ");
    console.log(cartItem);
  };

  /* Functions to distribute to other files */

  const contextValue = {
    cartItem,
    addToCart,
    removeFromCart,
    updateCartItem,
    getCartTotal,
    checkOut,
  };

  console.log(cartItem);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
