import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Table() {
  const [data, setData] = useState([]);

  // Fetch the data from MongoDB when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from MongoDB
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/records");
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Type</th>
            <th>Comment</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.problem}</td>
              <td>{item.type}</td>
              <td>{item.comment}</td>
              <td>
                <a href={item.link}>{item.link}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
