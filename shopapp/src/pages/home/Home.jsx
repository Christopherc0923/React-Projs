import React, { Component } from "react";

import HomeItem from "./HomeItem";
import { Products } from "../../products";

import IntersectionObserverComponent from "../../components/InteresctionObs";

export default function Home() {
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
      <IntersectionObserverComponent>
        <HomeItem data={Products[3]} />
      </IntersectionObserverComponent>
      <IntersectionObserverComponent>
        <HomeItem data={Products[0]} />
      </IntersectionObserverComponent>
      <div className="row">
        <div className="col-lg-6">
          <IntersectionObserverComponent>
            <HomeItem data={Products[1]} />
          </IntersectionObserverComponent>
        </div>

        <div className="col-lg-6">
          <IntersectionObserverComponent>
            <HomeItem data={Products[2]} />
          </IntersectionObserverComponent>
        </div>
      </div>
    </div>
  );
}
