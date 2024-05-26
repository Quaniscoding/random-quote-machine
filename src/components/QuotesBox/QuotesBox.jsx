import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../../redux/action";
import QuoteText from "../QuoteText";
import QuoteAuthor from "../QuoteAuthor";
import Button from "../Button";
import "./QuotesBox.css";
const QuoteBox = () => {
  const dispatch = useDispatch();
  const { text, author, color } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div id="quote-box" style={{ color }}>
      <QuoteText text={text} />
      <QuoteAuthor author={author} />
      <div className="buttons">
        <Button onClick={() => dispatch(fetchQuote())} color={color} />
      </div>
    </div>
  );
};
export default QuoteBox;
