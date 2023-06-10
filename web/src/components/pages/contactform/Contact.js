import React, { useState } from "react";
import Form from "./Form";
import "./Contact.css";

export default function Contact() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="container text-center row">
      <div className="col-md-4 d-flex align-items-center justify-content-center">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="form col-md-8">
        <Form addData={addData} />
      </div>
    </div>
  );
}
