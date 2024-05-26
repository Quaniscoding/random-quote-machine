import React from "react";

const QuoteText = ({ text }) => (
  <div className="quote-text" style={{ opacity: 1 }}>
    <i className="fa fa-quote-left"> </i>
    <span id="text">{text}</span>
  </div>
);

export default QuoteText;
