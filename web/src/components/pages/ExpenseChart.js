import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

export default function ExpenseChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [expense, setExpense] = useState([]);

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
      const expenses = response.data.map((item) => ({
        ...item,
        date: item.date.split("T")[0],
      }));
      setExpense(expenses);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (expense.length > 0 && chartRef.current) {
      // Destroy previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      // Sort expenses by date in ascending order
      const sortedExpenses = [...expense].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      const labels = sortedExpenses.map((item) => item.date);
      const amounts = sortedExpenses.map((item) => item.amount);

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Expense Amount",
              data: amounts,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [expense]);

  return (
    <div className="container">
      <h2 className="text-center">Expense Chart</h2>
      <br />
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
