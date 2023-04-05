import { React, useState } from "react";
import "../styles/Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faGear, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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
      {props.attribute === "name" && (
        <ul class="fa-ul">
          {showList.map((item) => (
            <li key={item.name}>
              <span class="fa-li">
                <FontAwesomeIcon icon={faBuildingColumns}></FontAwesomeIcon>
              </span>
              {item.name}
            </li>
          ))}
        </ul>
      )}
      {props.attribute === "term" && (
        <ul class="fa-ul">
          {showList.map((item) => (
            <li key={item.term}>
              <span class="fa-li">
                <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
              </span>
              {item.term}
            </li>
          ))}
        </ul>
      )}
      {props.list.length > props.listMaxSize && (
        <span>
          <button className="show-more-button" onClick={toggleLines}>
            {expanded ? <div><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon> Show less</div> : <div><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Show more</div>}
          </button>
        </span>
      )}
    </div>
  );
};

export default ShowMoreSimpleLists;
