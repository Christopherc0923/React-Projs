import React from "react";
import { Products } from "../../products";
import { ShopContext } from "../../shop-context";
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
        <h1 className="text-center">Shopping Cart</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          const item = cartItem.find((item) => item.id === product.id);
          if (item && item.quantity > 0) {
            return <CartItem data={product} />;
          }
          return null;
        })}
      </div>

      <hr />

      {cartTotal === 0 ? (
        <div>
          <div
            className="container d-flex flex-column align-items-center justify-content-center"
            style={{ height: "600px" }}
          >
            <h3 className="">Cart is empty.</h3>
          </div>
          <hr />
        </div>
      ) : (
        <div>This is the other div.</div>
      )}

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
