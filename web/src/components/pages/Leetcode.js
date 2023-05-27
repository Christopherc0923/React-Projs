import React, { useState } from "react";
import Form from "./LForm";
import Table from "./LTable";

export default function Leetcode() {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div>
      <Form addData={addData} />
      <Table data={data} />
    </div>
  );
}
