import React, { useState } from "react";
import axios from "axios";

export default function Form({ addData }) {
  const [problem, setProblem] = useState("");
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [link, setLink] = useState("");

  const url = "http://localhost:5000/api/records";

  const submitHandler = async (event) => {
    event.preventDefault();

    // Checks that all input fields are filled
    if (problem && type && comment && link) {
      const formData = { problem, type, comment, link };

      try {
        // Make a POST request to the backend API
        const response = await axios.post(url, formData);

        if (response.status === 200) {
          // Clear form fields if the data was successfully uploaded
          setProblem("");
          setType("");
          setComment("");
          setLink("");

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

  const options = [
    "Array & Hashing",
    "Two Pointers",
    "Stack",
    "Binary Search",
    "Sliding Window",
    "Linked List",
    "Trees",
    "Tries",
    "Backtracking",
    "Heap",
    "Greedy",
    "Graph",
    "Math",
    "1-D DP",
    "2-D DP",
    "Bit Manipulation",
  ];

  options.sort();

  return (
    <div className="container text-center">
      <h2>LeetCode Submission Form</h2>
      <hr />
      <form className="container row" onSubmit={submitHandler}>
        <div className="col-md-3">
          <h4>Problem</h4>
          <input
            type="number"
            className="form-control"
            placeholder="Problem Number"
            value={problem}
            onChange={(event) => setProblem(event.target.value)}
          />
        </div>

        <div className="col-md-3">
          <h4>Type</h4>
          <select
            className="form-control"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Select Type</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <h4>Comment</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div className="col-md-3">
          <h4>Link</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Link"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>

      <br />
    </div>
  );
}
