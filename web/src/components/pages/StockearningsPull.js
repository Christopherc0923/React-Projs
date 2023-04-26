import { useState, useEffect } from "react";
import Chart from "chart.js/auto";

export default function StockInfo() {
  // For symbol input
  const [symbol, setSymbol] = useState("INTC");

  // Intialize useState for API data
  const [earningsData, setEarningsData] = useState([]);

  // fetches earnings data for user-inputted ticker
  async function fetchEarningsData(event) {
    event.preventDefault();
    const response = await fetch(
      `https://www.alphavantage.co/query?function=EARNINGS&symbol=${symbol}&apikey=EEO2XGZO5KO1BBJI`
    );
    const data = await response.json();
    console.log(data);
    setEarningsData(data.quarterlyEarnings);
  }

  useEffect(() => {
    // Get the canvas element
    const canvas = document.getElementById("myChart");

    // Create the chart
    const ctx = canvas.getContext("2d");

    const sortedEarningsData = earningsData.sort(
      (a, b) => new Date(a.fiscalDateEnding) - new Date(b.fiscalDateEnding)
    );

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: sortedEarningsData.map((earnings) => earnings.fiscalDateEnding),
        datasets: [
          {
            label: "Reported EPS",
            data: sortedEarningsData.map((earnings) => earnings.reportedEPS),
            backgroundColor: "rgba(67, 156, 224, 0.5)",
            fill: false,
          },
          {
            label: "Estimated EPS",
            data: sortedEarningsData.map((earnings) => earnings.estimatedEPS),
            backgroundColor: "rgba(114, 190, 91, 0.5)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: `Earnings Calendar for ${symbol}`,
          },
        },
      },
    });

    // Clean up
    return () => myChart.destroy();
  }, [earningsData, symbol]);

  return (
    <div className="container">
      <h2>Earnings Calendar {symbol ? `for ${symbol}` : ""}</h2>
      <form onSubmit={fetchEarningsData}>
        <label>
          Enter stock symbol:
          <input
            type="text"
            value={symbol}
            onChange={(event) => setSymbol(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div className="collapse show" id="chart-collapse">
        <div className="chart-container">
          <canvas id="myChart"></canvas>
        </div>
      </div>

      <br />

      <button
        className="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#chart-collapse"
        aria-expanded="true"
        aria-controls="chart-collapse"
      >
        Click to toggle chart
      </button>

      <br />

      <hr />

      <button
        className="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#table-collapse"
        aria-expanded="true"
        aria-controls="table-collapse"
      >
        Click to toggle table
      </button>

      <div className="collapse show" id="table-collapse">
        <div className="chart-container">
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Fiscal Date Ending</th>
                  <th>Reported Date</th>
                  <th>Reported EPS</th>
                  <th>Estimated EPS</th>
                  <th>Surprise</th>
                </tr>
              </thead>
              <tbody>
                {earningsData.map((earnings) => (
                  <tr key={earnings.fiscalDateEnding}>
                    <td>{earnings.fiscalDateEnding}</td>
                    <td>{earnings.reportedDate}</td>
                    <td>{earnings.reportedEPS}</td>
                    <td>{earnings.estimatedEPS}</td>
                    <td
                      className={
                        earnings.surprise > 0
                          ? "table-success"
                          : earnings.surprise < 0
                          ? "table-danger"
                          : ""
                      }
                    >
                      {earnings.surprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
