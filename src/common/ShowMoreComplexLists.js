import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faWrench,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/Table.css";
import Tooltip from "@material-ui/core/Tooltip";

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
      <div>
        <ul class="fa-ul">
          {showList.map((item) => (
            <li key={item.term}>
              <span class="fa-li">
                <FontAwesomeIcon icon={faWrench}></FontAwesomeIcon>
              </span>
              <a href={`${props.link}${item.term}`}>{item.term}</a>{" "}
              <Tooltip title={`EDAM: ${item.term}`} placement="top">
                <a href={item.uri}>
                  <FontAwesomeIcon
                    className="font-awesome-button"
                    icon={faCircleQuestion}
                  />
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
      {props.list.length > props.listMaxSize && (
        <span>
          <button className="show-more-button" onClick={toggleLines}>
            {expanded ? (
              <div>
                <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> Show less
              </div>
            ) : (
              <div>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Show more
              </div>
            )}
          </button>
        </span>
      )}
    </div>
  );
};

export default ShowMoreComplexLists;
