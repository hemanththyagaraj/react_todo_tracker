import React from "react";
import "./Quotes.css";

const Quote = (props) => {
  const { quoteText, quoteAuthor } = props;
  return (
    <div>
      <p className="quote__text">{quoteText}</p>
      <p className="quote__author">- {quoteAuthor}</p>
    </div>
  );
};

export default Quote;
