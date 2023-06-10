import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Link } from "react-router-dom";

export default function StockTicker() {
  const api_key = "EEO2XGZO5KO1BBJI";
  const [stockData, setStockData] = useState({});
  const [tickerSymbol, setTickerSymbol] = useState("MSFT");
  const [refreshInterval, setRefreshInterval] = useState(30);
  const [countdown, setCountdown] = useState(refreshInterval);

  /* Function to pull stock data */
  const fetchData = () => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${tickerSymbol}&apikey=${api_key}`
      )
      .then((response) => {
        console.log(response);
        setStockData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* Countdown */
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  /* Runs fetch data on site load */
  useEffect(() => {
    fetchData();
  }, []);

  /* Countdown action when 0*/
  useEffect(() => {
    if (countdown === 0) {
      fetchData();
      setCountdown(refreshInterval);
    }
  }, [countdown, refreshInterval, tickerSymbol]);

  /* Ticker Change */
  const handleTickerChange = (event) => {
    setTickerSymbol(event.target.value);
  };

  /* Refresh Freq Change */
  const handleRefreshIntervalChange = (event) => {
    setRefreshInterval(event.target.value);
    setCountdown(event.target.value);
  };

  return (
    <div className="container">
      <br />
      <label>
        Ticker symbol:
        <input type="text" value={tickerSymbol} onChange={handleTickerChange} />
      </label>
      <br />
      <label>
        Refresh interval:
        <input
          type="number"
          min="1"
          max="60"
          value={refreshInterval}
          onChange={handleRefreshIntervalChange}
        />
        seconds
      </label>
      <p>Refresh countdown: {countdown}</p>

      <hr />

      <h1>
        <Link
          to={`https://finance.yahoo.com/quote/${tickerSymbol}`}
          target="_blank"
        >
          {stockData["Global Quote"] && stockData["Global Quote"]["01. symbol"]}
        </Link>
      </h1>
      <p>
        {stockData["Global Quote"] && stockData["Global Quote"]["05. price"]}
      </p>
      <p>
        {stockData["Global Quote"] &&
          stockData["Global Quote"]["10. change percent"]}
      </p>
    </div>
  );
}
