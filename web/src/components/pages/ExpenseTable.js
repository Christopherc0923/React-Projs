import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExpenseTable() {
  const [expense, setExpense] = useState([]);

  // Sort the expenses by ascending date
  const sortedExpenses = [...expense].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  // Fetch the data from MongoDB when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from MongoDB
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/expenseRecords"
      );
      setExpense(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenseRecords/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <table className="table text-center">
        <thead className="thead-dark">
          <tr className="">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((item, index) => (
            <tr key={index}>
              <td>{item.date.split("T")[0]}</td>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
