import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../global.css";

export default function HomeItem(props) {
  const { productImage, bg, id, productName, homePageText } = props.data;

  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "90%",
  };
  return (
    <div
      className={
        bg === "bg-dark" ? "container-fluid bg-dark" : "container-fluid"
      }
    >
      <div className="row d-flex justify-content-center">
        <h2 className=" m-3" style={bg === "bg-dark" ? { color: "white" } : {}}>
          {productName}
        </h2>
      </div>
      <div className="row d-flex justify-content-center">
        <h6 className="" style={bg === "bg-dark" ? { color: "white" } : {}}>
          {homePageText}
        </h6>
      </div>
      <div className="row d-flex justify-content-center zoom-effect">
        <img src={productImage} style={imgStyle} />
      </div>
      <div className="row d-flex justify-content-center">
        <Link to={`/product/${id}`}>
          <button className="btn m-3">Learn More</button>
        </Link>
      </div>
    </div>
  );
}
