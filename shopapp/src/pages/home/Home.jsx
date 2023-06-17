import React, { Component } from "react";

import HomeItem from "./HomeItem";
import { Products } from "../../products";

export default function Home() {
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div className="container-fluid">
      <HomeItem data={Products[3]} />
      <HomeItem data={Products[0]} />

      <div className="row">
        <div className="col-lg-6">
          <HomeItem data={Products[1]} />
        </div>
        <div className="col-lg-6">
          <HomeItem data={Products[2]} />
        </div>
      </div>
    </div>
  );
}
