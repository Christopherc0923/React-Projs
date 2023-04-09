import React from "react";
import Form from "./Form";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container text-center">
      <h1 className="text-center">Contact Us</h1>
      <p className="text-center">
        Please fill out the form below to contact me!
      </p>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}
