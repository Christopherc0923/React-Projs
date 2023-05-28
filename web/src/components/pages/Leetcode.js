import React, { useState } from "react";
import LForm from "./LForm";
import Table from "./LTable";

export default function Leetcode() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div>
      <LForm addData={addData} />
      <Table data={data} />
    </div>
  );
}
