import { useContext } from "react";
import { ShopContext } from "../../shop-context";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { id } = useParams();
  const product = props.products.find((p) => p.id === parseInt(id));
  const { addToCart, cartItem } = useContext(ShopContext);
  if (!product) {
    return <div>Product not found</div>;
  }

  const { productName, price, productImage, desc, spec } = product;

  const cartItemAmount = cartItem[id];

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

  const textStyle = {
    width: "100%",
  };

  const specStyle = {
    width: "80%",
  };

  return (
    <div className="container">
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
            <p>{desc}</p>
          </div>
          <div className="text-center">
            <button className="addToCartBttn m-3" onClick={() => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={specStyle}>
        <hr />
        {Object.keys(spec).map((key) => (
          <ul className="list-unstyled text-left" key={key}>
            <li>
              <strong>{key}: </strong>
              {spec[key]}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
