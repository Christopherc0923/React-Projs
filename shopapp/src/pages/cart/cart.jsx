import React from "react";
import { Products } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItem, getCartTotal, checkOut } = useContext(ShopContext);
  const cartTotal = getCartTotal();
  const navigate = useNavigate();

  return (
    <div className="container cart">
      <div className="title">
        <h1 className="text-center">Cart</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItem[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      <hr />
      <div className="container">
        <p> Subtotal: ${cartTotal}</p>
        <button
          className="btn btn-success p-1 m-1"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
        <button className="btn btn-success p-1 m-1" onClick={() => checkOut()}>
          Checkout
        </button>
      </div>
    </div>
  );
}
