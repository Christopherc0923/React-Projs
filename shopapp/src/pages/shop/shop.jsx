import React from "react";
import { Products } from "../../products";
import { ProductItem } from "./productitem";
import "./shop.css";

export default function Shop() {
  return (
    <div class="container-fluid p-3">
      <div class="text-center">
        <h1>The Nothing Shop</h1>
      </div>
      <div className="row">
        {Products.map((product, index) => (
          <div className="col-lg-4" key={index}>
            <ProductItem data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
