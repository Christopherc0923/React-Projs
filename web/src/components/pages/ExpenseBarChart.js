import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Chart from "chart.js/auto";

export default function MonthlyExpenseChart() {
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

      // Calculate monthly expenses
      const monthlyExpenses = expense.reduce((monthlyData, item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth();

        const key = `${year}-${month}`;
        if (monthlyData[key]) {
          monthlyData[key] += item.amount;
        } else {
          monthlyData[key] = item.amount;
        }

        return monthlyData;
      }, {});

      // Sort the monthly expenses by ascending time
      const sortedMonthlyExpenses = Object.entries(monthlyExpenses).sort(
        ([aKey], [bKey]) => {
          const [aYear, aMonth] = aKey.split("-");
          const [bYear, bMonth] = bKey.split("-");
          return new Date(aYear, aMonth) - new Date(bYear, bMonth);
        }
      );

      const labels = sortedMonthlyExpenses.map(([key]) => {
        const [year, month] = key.split("-");
        return `${getMonthName(parseInt(month, 10))} ${year}`;
      });

      const amounts = sortedMonthlyExpenses.map(([, amount]) => amount);

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Monthly Expenditure",
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

  // Utility function to get month name from month index
  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  };

  return (
    <div className="container">
      <h2 className="text-center">Monthly Expense Chart</h2>
      <br />
      <canvas ref={chartRef}></canvas>
    </div>
  );
}
