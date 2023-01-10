import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import "../styles/Graphs.css";

const Graphs = (props) => {
  const convertCountToInt = (arr) => {
    const new_arr = [];
    for (let i = 0; i < arr.length; i++) {
      new_arr.push({ year: arr[i].year, count: parseInt(arr[i].count) });
    }
    return new_arr;
  };

  return (
    <div>
      {props.tools.map((tool) => (
        <div>
          {tool.publications.map((p) => (
            <div>
              {p.citations_list.length !== 0 && (
                <div>
                  <span>{tool.name}</span>
                  <BarChart
                    width={600}
                    height={300}
                    data={convertCountToInt(p.citations_list)}
                  >
                    <XAxis dataKey="year" stroke="#000000"/>
                    <YAxis stroke="#000000" />
                    <Bar dataKey="count" fill="#F4BE60" barSize={30} />
                  </BarChart>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Graphs;
