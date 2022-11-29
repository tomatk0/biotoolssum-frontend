import React from "react";
import "../styles/Table.css";

import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Basic = (props) => {

  const getPlatformIcon = (platform) => {
    if (platform === 'Windows') {
      return <FontAwesomeIcon icon={faWindows}/>
    }
    else if (platform === 'Linux') {
      return <FontAwesomeIcon icon={faLinux}/>
    }
    else if (platform === 'Apple') {
      return <FontAwesomeIcon icon={faApple}/>
    }
  }

  return (
    <table className="display_table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Inputs</th>
          <th>Outputs</th>
          <th>E. platforms</th>
          <th>E. nodes</th>
          <th>E. communities</th>
          <th>License</th>
          <th>Maturity</th>
          <th>Platforms</th>
        </tr>
      </thead>
      <tbody>
        {props.tools.map((tool) => (
          <tr key={tool.bio_id}>
            <td>
              <a href={tool.homepage}>{tool.name}</a>{" "}
            </td>
            <td>
              <ul className="display_ul">
                {tool.inputs.map((i) => (
                  <li key={i.term}>{i.term}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.outputs.map((o) => (
                  <li key={o.term}>{o.term}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.elixir_platforms.map((p) =>(
                  <li key={p.name}>{p.name}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.elixir_nodes.map((n) =>(
                  <li key={n.name}>{n.name}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="display_ul">
                {tool.elixir_communities.map((c) =>(
                  <li key={c.name}>{c.name}</li>
                ))}
              </ul>
            </td>
            <td>{tool.license}</td>
            <td>{tool.maturity}</td>
            <td>
              <ul className="display_ul">
                {tool.platforms.map((p) => (
                  <li key={p.name}>{getPlatformIcon(p.name)}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Basic;
