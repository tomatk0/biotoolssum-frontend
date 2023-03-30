import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import "../styles/Table.css";

const ShowMoreComplexLists = (props) => {
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
          {props.attribute === "term" && (
            <div>
              {showList.map((item) => (
                <li key={item.term}>
                  <a href={`${props.link}${item.term}`}>{item.term}</a>
                  <a href={item.uri}>
                    {" "}
                    <FontAwesomeIcon
                      className="font-awesome-button"
                      icon={faCircleQuestion}
                    />
                  </a>
                </li>
              ))}
            </div>
          )}
          {props.attribute === "doi" && (
            <div>
              {showList.map((p, index) => (
                <li key={p.doi}>
                  <a href={`https://doi.org/${p.doi}`}>
                    Publication {index + 1}{" "}
                  </a>
                  {p.citations_source !== "" && (
                    <a href={p.citations_source}>
                      <FontAwesomeIcon
                        className="font-awesome-button"
                        icon={faCircleQuestion}
                      />
                    </a>
                  )}
                </li>
              ))}
            </div>
          )}
        </div>
      </ul>
      {props.list.length > props.listMaxSize && (
        <span>
          <a href="#" onClick={toggleLines}>
            {expanded ? "Show less" : "Show more"}
          </a>
        </span>
      )}
      <div>{props.attribute === "doi" ? <div>Total citations: {props.citation_count}</div> : <div></div>}</div>
    </div>
  );
};

export default ShowMoreComplexLists;
