import React, { useState } from "react";

export default function Sentiment() {
  return (
    <div>
      <p>The sentiment score is </p>
    </div>
  );
}

/*
import React, { useState } from "react";
import { pipeline } from "@huggingface/sentiment-analysis";

function Sentiment() {
  const [inputText, setInputText] = useState("");
  const [sentimentScore, setSentimentScore] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await pipeline("sentiment-analysis")(inputText);
    setSentimentScore(result[0].score);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <button type="submit">Analyze</button>
      </form>
      <p>The sentiment score is {sentimentScore}.</p>
    </div>
  );
}

export default Sentiment;
*/
