import React, { useState } from "react";
import axios from "axios";

export default function Form({ addData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [find, setFind] = useState("");
  const [textBox, setTextBox] = useState("");

  const url = "http://localhost:5000/api/formRecords";

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle form submission
    if (firstName && lastName && email && find && textBox) {
      const formData = {
        firstName,
        lastName,
        email,
        find,
        textBox,
      };

      try {
        // Make a POST request to the backend API
        const response = await axios.post(url, formData);

        if (response.status === 200) {
          // Clear form fields if the data was successfully uploaded
          setFirstName("");
          setLastName("");
          setEmail("");
          setFind("");
          setTextBox("");

          window.location.reload();

          // Add the form data to the parent component's state
          addData(formData);

          console.log("Form data added to MongoDB");
        } else {
          console.error("Failed to add form data to MongoDB");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name**
        <input
          name="firstName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>

      <label>
        Last Name**
        <input
          name="lastName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>

      <label>
        Email Address**
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        How did you find this website? **
        <select
          name="find"
          value={find}
          onChange={(e) => setFind(e.target.value)}
        >
          <option value="">Select</option>
          <option value="1">LinkedIn</option>
          <option value="2">Resume</option>
          <option value="3">GitHub</option>
          <option value="4">Other</option>
        </select>
      </label>
      <label>
        Additional Information:
        <textarea
          name="textBox"
          rows="3"
          value={textBox}
          onChange={(e) => setTextBox(e.target.value)}
          placeholder="If you have something you like me to know..."
        />
      </label>

      <button className="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  );
}
