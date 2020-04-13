import React, { useEffect, useState } from "react";
import quotes from "../../quotes.json";

const Quotes = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === quotes.length - 1) {
      setCount(0);
    }
    setQuote(quotes[count]);
  }, [count]);

  return (
    <div>
      <p style={{ transition: 'all 2s' }}>{quote.quoteText}</p>
    </div>
  );
};

export default Quotes;
