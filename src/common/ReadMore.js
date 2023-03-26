import { React, useState } from "react";

const ReadMore = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = (event) => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  const showText = expanded
    ? props.text
    : props.text.slice(0, props.textMaxSize);

  return (
    <div>
      <span>{showText}</span>
      {props.text.length > props.textMaxSize && (
        <span>
          {expanded ? "" : " ... "}
          <a href="#" onClick={toggleLines}>
            {expanded ? "Show less" : "Show more"}
          </a>
        </span>
      )}
    </div>
  );
};

export default ReadMore;
