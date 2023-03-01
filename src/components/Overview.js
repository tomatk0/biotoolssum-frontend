import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Table.css";

import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const Overview = (props) => {
  const getToolsFromQuery = () => {
    let tools = [];

    props.tools.forEach((tool) => {
      tool.matrix_queries.forEach((matrixQuery) => {
        console.log(matrixQuery.matrix_query);
        if (matrixQuery.matrix_query === props.query) {
          tools.push(tool);
        }
      });
    });
    return tools;
  };

  const listOfTools = props.query ? getToolsFromQuery() : props.tools;

  return (
      <div className="display_table">
        <MaterialTable
          columns={[
            {
              title: "nameSearch",
              field: "nameSearch",
              searchable: true,
              hidden: true,
            },
            {
              title: "Name",
              field: "name",
            },
            {
              title: "Institutes",
              field: "institutes",
              cellStyle: {
                width: "15%",
              }
            },
            {
              title: "descriptionSearch",
              field: "descriptionSsearch",
              searchable: true,
              hidden: true,
            },
            {
              title: "Description",
              field: "description",
              cellStyle: {
                width: "25%",
              }
            },
            {
              title: "Topics",
              field: "topics",
            },
            {
              title: "Functions",
              field: "functions",
            },
            {
              title: "Publications",
              field: "publications",
              cellStyle: {
                width: "10%",
              }
            },
          ]}
          options={{
            paging: true,
            pageSize: 20,
            headerStyle: {
              backgroundColor: "#ffb162",
              color: "white",
              textAlign: "center",
            },
            cellStyle: {
              textAlign: "center",
            },
            showTitle: false,
            sorting: false,
            searchFieldAlignment: "left",
            toolbarButtonAlignment: "left",
          }}
          icons={tableIcons}
          data={listOfTools.map((tool) => ({
            nameSearch: tool.name,
            name: (
              <div>
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
                    <li key={t.name} className="label">
                      <Label color="yellow">{t.name}</Label>
                    </li>
                  ))}
                </ul>
              </div>
            ),
            institutes: (
              <ul className="display_ul">
                {tool.institutes.map((i) => (
                  <li key={i.name}>{i.name}</li>
                ))}
              </ul>
            ),
            descriptionSearch: tool.description,
            description: tool.description,
            topics: (
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
            ),
            functions: (
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
            ),
            publications: (
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
            ),
          }))}
        />
      </div>
  );
};

export default Overview;
