import { createContext, useState } from "react";
import { Products } from "./products";
import { loadStripe } from "@stripe/stripe-js";

import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  for (let i = 1; i <= Products.length; i++) {
    cart.push({
      id: i,
      name: Products[i - 1].productName,
      price: Products[i - 1].price,
      quantity: 0,
    });
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === itemId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItem((prev) => {
      const updatedCart = prev.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: newAmount };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const getCartTotal = () => {
    let total = 0;
    for (const item of cartItem) {
      if (item.quantity > 0) {
        let itemInfo = Products.find((product) => product.id === item.id);
        total += item.quantity * itemInfo.price;
      }
    }
    return total;
  };

  const temp = {
    id: 1,
    name: "nothingPhone",
    price: 399,
    quantity: 10,
  };

  /*
  const checkOut = async () => {
    console.log("Checkout");

    // Load the Stripe API key
    try {
      const stripe = await loadStripe(
        "pk_test_51NTbi8CKItoJOZf4tdEXpbGnCnGrrmirnG6NhWPSwgvrhdJueoBWp6gK3pcBydzHUWItuckYAzLk93lkYVw9Zjap00w8js79Mv"
      );

      console.log(temp);

      const session = await fetch("/create-stripe-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(temp),
      }).then((response) => response.json());
      console.log(session);

      console.log("good");
      stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  */

  // ...

  const checkOut = async () => {
    console.log("Checkout");

    // Load the Stripe API key
    try {
      const stripe = await loadStripe(
        "pk_test_51NTbi8CKItoJOZf4tdEXpbGnCnGrrmirnG6NhWPSwgvrhdJueoBWp6gK3pcBydzHUWItuckYAzLk93lkYVw9Zjap00w8js79Mv"
      );
      const filteredCart = cartItem.filter((item) => item.quantity !== 0); // Convert cartItem state to an array
      console.log(filteredCart);

      const response = await axios.post(
        "http://localhost:5500/create-stripe-session",
        filteredCart
      );
      const session = response.data;
      console.log(session);

      console.log("good");
      stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
