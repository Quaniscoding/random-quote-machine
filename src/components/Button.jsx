import React from "react";

const Button = ({ onClick, color }) => (
  <div className="button">
    <a
      style={{ backgroundColor: color }}
      className="button"
      id="tweet-quote"
      title="Tweet this quote!"
      target="_top"
      href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22There%20is%20only%20one%20way%20to%20avoid%20criticism%3A%20do%20nothing%2C%20say%20nothing%2C%20and%20be%20nothing.%22%20Aristotle"
    >
      <i className="fa fa-twitter" />
    </a>
    <a
      style={{ backgroundColor: color }}
      className="button"
      id="tumblr-quote"
      title="Post this quote on tumblr!"
      target="_blank"
      href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Aristotle&content=There%20is%20only%20one%20way%20to%20avoid%20criticism%3A%20do%20nothing%2C%20say%20nothing%2C%20and%20be%20nothing.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
    >
      <i className="fa fa-tumblr" />
    </a>

    <button
      className="button"
      id="new-quote"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      New Quote
    </button>
  </div>
);

export default Button;
