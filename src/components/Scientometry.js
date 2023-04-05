import React from "react";
import "../styles/Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faNewspaper,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";

import MaterialTable from "material-table";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Scientometry = (props) => {
  const createData = () => {
    let data = [];
    props.tools.forEach((tool) => {
      tool.publications.forEach((pub) => {
        data.push({
          nameSearch: tool.name,
          name: (
            <div>
              <div>
                <Tooltip
                  title={`Data was last updated on ${tool.last_updated}. Tool's availability is ${tool.availability}% for the past 8 days since the last update.`}
                  placement="top"
                >
                  <a href={tool.homepage}>{tool.name}</a>
                </Tooltip>{" "}
                {tool.version !== "" && tool.version}{" "}
                <Tooltip title={`Bio.tools: ${tool.name}`} placement="top">
                  <a href={tool.bio_link}>
                    <FontAwesomeIcon
                      className="font-awesome-button"
                      icon={faCircleQuestion}
                    />
                  </a>
                </Tooltip>
              </div>
            </div>
          ),
          publication: (
            <div>
              <Tooltip title={pub.title} placement="top">
                <a href={`https://doi.org/${pub.doi}`}>{pub.doi}</a>
              </Tooltip>{" "}
              <Tooltip title="Citations source" placement="top">
                {pub.citations_source !== "" ? (
                  <a href={pub.citations_source}>
                    <FontAwesomeIcon
                      className="font-awesome-button"
                      icon={faCircleQuestion}
                    />
                  </a>
                ) : (
                  <div></div>
                )}
              </Tooltip>
            </div>
          ),
          citations: pub.citations_count,
          impact_factor: pub.impact,
          journal: pub.journal,
        });
      });
    });
    return data;
  };

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
            cellStyle: {
              width: "24%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: (
              <div>
                Publication <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </div>
            ),
            field: "publication",
            cellStyle: {
              width: "24%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: "Citations",
            field: "citations",
            cellStyle: {
              width: "14%",
              textAlign: "center",
            },
          },
          {
            title: (
              <div>
                Journal <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
              </div>
            ),
            field: "journal",
            cellStyle: {
              width: "24%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: "Impact factor",
            field: "impact_factor",
            cellStyle: {
              width: "14%",
              textAlign: "center",
            },
          },
        ]}
        options={{
          paging: true,
          pageSize: 10,
          headerStyle: {
            backgroundColor: "#ffb162",
            color: "white",
            textAlign: "center",
          },
          showTitle: false,
          searchFieldAlignment: "left",
          toolbarButtonAlignment: "left",
        }}
        icons={tableIcons}
        data={createData()}
      />
    </div>
  );
};

export default Scientometry;
