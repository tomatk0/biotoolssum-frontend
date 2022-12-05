import React from "react";

import "../styles/Table.css";

const Development = (props) => {
  return (
    <table className="display_table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Github url</th>
          <th>Creation date</th>
          <th>Last update</th>
          <th>Forks</th>
          <th>Contributions</th>
        </tr>
      </thead>
      <tbody>
        {props.tools.map((tool) => (
          <tr key={tool.bio_id}>
            <td>{tool.name}</td>
            <td><a href={tool.github_url}>{tool.github_url}</a></td>
            <td>{tool.github_created_at}</td>
            <td>{tool.github_updated_at}</td>
            <td>{tool.github_forks}</td>
            <td>{tool.github_contributions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Development;
