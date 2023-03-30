import { React, useState } from "react";
import "../styles/Table.css";

const ShowMoreSimpleLists = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleLines = (event) => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  const showList = expanded
    ? props.list
    : props.list.slice(0, props.listMaxSize);

  return (
    <div>
      <ul className="display_ul_with_dots">
        <div>
          {props.attribute === "name" && 
          <div>
            {showList.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
            </div>}
          {props.attribute === "term" &&
          <div>
            {showList.map((item) => (
              <li key={item.term}>{item.term}</li>
            ))}
            </div>}
        </div>
      </ul>
      {props.list.length > props.listMaxSize && (
        <span>
          <a href="#" onClick={toggleLines}>
            {expanded ? "Show less" : "Show more"}
          </a>
        </span>
      )}
    </div>
  );
};

export default ShowMoreSimpleLists;
