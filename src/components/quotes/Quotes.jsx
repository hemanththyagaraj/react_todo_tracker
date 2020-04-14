import React, { useEffect, useState } from "react";
import quotes from "../../quotes.json";
import "./Quotes.css";
import Quote from "./Quote";

const Quotes = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === quotes.length - 1) {
      setCount(0);
    }
    setQuote(quotes[count]);
  }, [count]);

  return <div>
    <Quote key={count} {...quote} />
  </div>;
};

export default Quotes;
