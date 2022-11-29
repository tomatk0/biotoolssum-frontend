import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import "../styles/Table.css";

const Overview = (props) => {
  return (
    <table className="display_table">
      <thead>
        <tr>
          <th>Name</th>
          <th className="institutes">Institutes</th>
          <th className="description">Description</th>
          <th>Topics</th>
          <th>Functions</th>
          <th className="publications">Publications</th>
        </tr>
      </thead>
      <tbody>
        {props.tools.map((tool) => (
          <tr key={tool.bio_id}>
            <td>
              <div>
                <a href={tool.homepage}>{tool.name}</a>{" "}
                {tool.version !== "" && tool.version}
                <a href={tool.bio_link}>
                  {" "}
                  <FontAwesomeIcon
                    className="font-awesome-button"
                    icon={faCircleQuestion}
                  />
                </a>
              </div>
              <ul className="display_ul">
                {tool.tool_types.map((t) => (
                  <li key={t.name}>{t.name}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.institutes.map((i) => (
                  <li key={i.name}>{i.name}</li>
                ))}
              </ul>
            </td>
            <td>{tool.description}</td>
            <td>
              <ul className="display_ul">
                {tool.topics.map((t) => (
                  <li key={t.term}>
                    <a href={`https://bio.tools/t?topic=${t.term}`}>{t.term}</a>
                    <a href={t.uri}>
                      {" "}
                      <FontAwesomeIcon
                        className="font-awesome-button"
                        icon={faCircleQuestion}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.functions.map((f) => (
                  <li key={f.term}>
                    <a href={`https://bio.tools/t?topic=${f.term}`}>{f.term}</a>
                    <a href={f.uri}>
                      {" "}
                      <FontAwesomeIcon
                        className="font-awesome-button"
                        icon={faCircleQuestion}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.publications.map((p, index) => (
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
                <div>Total citations: {tool.citation_count}</div>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Overview;
