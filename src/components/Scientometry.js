import React from "react";
import "../styles/Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Scientometry = (props) => {
  const resolveDocumentation = (documentation) => {
    if (documentation !== "") {
      return (
        <div>
          {"Yes "}
          <a className="display_a" href={documentation}>
            {" "}
            <FontAwesomeIcon
              className="font-awesome-button"
              icon={faCircleQuestion}
            />
          </a>
        </div>
      );
    }
    return <div>No</div>;
  };
  return (
    <table className="display_table">
      <thead>
        <tr>
          <th>Tool</th>
          <th>Citations</th>
          <th>Impact factor</th>
          <th>Journals</th>
          <th>Availability</th>
          <th>Documentation</th>
        </tr>
      </thead>
      <tbody>
        {props.tools.map((tool) => (
          <tr key={tool.bio_id}>
            <td>
              <div>
                <a href={tool.homepage}>{tool.name}</a>
                <a href={tool.bio_link}>
                  {" "}
                  <FontAwesomeIcon
                    className="font-awesome-button"
                    icon={faCircleQuestion}
                  />
                </a>
              </div>
            </td>
            <td>{tool.citation_count}</td>
            <td>{tool.impact_factor}</td>
            <td>{tool.journals}</td>
            <td>
              <div>
                {tool.availability}
                {"% "}
                <a href={`https://openebench.bsc.es/html/tool/${tool.bio_id}`}>
                  {" "}
                  <FontAwesomeIcon
                    className="font-awesome-button"
                    icon={faCircleQuestion}
                  />
                </a>
              </div>
            </td>
            <td>{resolveDocumentation(tool.documentation)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Scientometry;
