import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCodeFork,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Table.css";

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

const Development = (props) => {
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
              width: "20%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: (
              <div>
                Github url <FontAwesomeIcon icon={faGithub} />
              </div>
            ),
            field: "github_url",
            cellStyle: {
              width: "20%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: "Creation date",
            field: "creation_date",
            cellStyle: {
              width: "12%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: "Last update",
            field: "last_update",
            cellStyle: {
              width: "12%",
              textAlign: "center",
            },
            sorting: false,
          },
          {
            title: (
              <div>
                Forks <FontAwesomeIcon icon={faCodeFork} />
              </div>
            ),
            cellStyle: {
              width: "12%",
              textAlign: "center",
            },
            field: "forks",
          },
          {
            title: "Contributions",
            cellStyle: {
              width: "12%",
              textAlign: "center",
            },
            field: "contributions",
          },
          {
            title: (
              <div>
                Stars <FontAwesomeIcon icon={faStar} />
              </div>
            ),
            cellStyle: {
              width: "12%",
              textAlign: "center",
            },
            field: "stars",
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
          cellStyle: {
            textAlign: "center",
          },
          showTitle: false,
          searchFieldAlignment: "left",
          toolbarButtonAlignment: "left",
        }}
        icons={tableIcons}
        data={props.tools.map((tool) => ({
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
                  <a href={`https://bio.tools/${tool.bio_id}`}>
                    <FontAwesomeIcon
                      className="font-awesome-button"
                      icon={faCircleQuestion}
                    />
                  </a>
                </Tooltip>
              </div>
            </div>
          ),
          github_url: (
            <div>
              {tool.github_url !== null ? (
                <a href={tool.github_url}>{tool.github_url}</a>
              ) : (
                "-"
              )}
            </div>
          ),
          creation_date: (
            <div>
              {tool.github_created_at !== null ? tool.github_created_at : "-"}
            </div>
          ),
          last_update: (
            <div>
              {tool.github_updated_at !== null ? tool.github_updated_at : "-"}
            </div>
          ),
          forks: tool.github_forks,
          contributions: tool.github_contributions,
          stars: tool.github_stars,
        }))}
      />
    </div>
  );
};

export default Development;
