import React, { useState } from "react";
import Form from "./Form";
import "./Contact.css";

export default function Contact() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="container text-center">
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center">
        Please fill out the form below to contact me!
      </p>
      <div className="form">
        <Form addData={addData} />
      </div>
    </div>
  );
}
