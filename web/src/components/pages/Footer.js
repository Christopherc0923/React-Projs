import React, { useState, useEffect } from "react";
export default function Footer() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });
  return (
    <div className="container text-center">
      <hr />
      <footer>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-18 col-md-6"
              style={{ verticalAlign: "middle" }}
            >
              <p>Copyright @ 2023</p>
            </div>
            <div className="col-sm-18 col-md-6">
              <h3>Current Time:</h3>
              <h4>{date.toLocaleTimeString()}</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
