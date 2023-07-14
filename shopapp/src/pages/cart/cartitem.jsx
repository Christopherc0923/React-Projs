import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItem, updateCartItem } =
    useContext(ShopContext);

  const divStyle = {
    height: "450px",
  };

  const imgStyle = {
    width: "450px",
  };

  const textStyle = {
    width: "100%",
  };

  const cartItemAmount = cartItem.find((item) => item.id === id)?.quantity ?? 0;
  return (
    <div className="container-fluid m-1">
      <hr />
      <div className="container-fluid row">
        <div
          className="col-lg-6 d-flex align-items-center justify-content-center image-container"
          style={divStyle}
        >
          <img src={productImage} style={imgStyle} />
        </div>

        <div className="container-fluid col-lg-6 d-flex flex-column align-items-center justify-content-center">
          <div className="text-center">
            <h3 style={textStyle}>{productName}</h3>
          </div>
          <div className="text-center">
            <p style={textStyle}>${price}</p>
          </div>
          <div className="text-center">
            <div className="countHandler" style={textStyle}>
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItemAmount}
                onChange={(e) => updateCartItem(Number(e.target.value), id)}
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
