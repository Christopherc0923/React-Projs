import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../shop-context";
import { Link } from "react-router-dom";

export const ProductItem = ({ data, maxHeight }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItem } = useContext(ShopContext);

  const cartItemAmount = cartItem.find((item) => item.id === id)?.quantity ?? 0;

  const divStyle = {
    height: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div className="product m-3 border">
      <div
        className="container-fluid d-flex vertical-align zoom-effect"
        style={divStyle}
      >
        <img className="img-fluid" src={productImage} style={imgStyle} />
      </div>
      <div className="container-fluid">
        <h3>{productName}</h3>
        <p class="mb-auto">${price}</p>
        <button className="addToCartBttn m-3" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
        </button>
        <Link to={`/product/${id}`}>
          <button className="addToCartBttn m-3">View Details</button>
        </Link>
      </div>
    </div>
  );
};
