import React from "react";
import { Products } from "../../products";

import { ProductItem } from "./productitem";

import ShopFilter from "./shopFilter";
import "./shop.css";

export default function Shop() {
  return (
    <div class="container-fluid p-3" style={{ minHeight: "100vh" }}>
      <div class="text-center">
        <h1>The Nothing Shop</h1>
      </div>
      <div className="">
        <ShopFilter />
      </div>
    </div>
  );
}
