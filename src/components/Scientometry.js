import React from "react";
import "../styles/Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

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
            title: "Citations",
            field: "citations",
          },
          {
            title: "Impact factor",
            field: "impact_factor",
          },
          {
            title: "Journals",
            field: "journals",
          },
          {
            title: "Availability",
            field: "availability",
          },
          {
            title: "Documentation",
            field: "documentation",
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
        data={props.tools.map((tool) => ({
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
            </div>
          ),
          citations: tool.citation_count,
          impact_factor: tool.impact_factor,
          journals: tool.journals,
          availability: (
            <div>
              {tool.availability === "Not available" ? (
                <div>Not available</div>
              ) : (
                <div>
                  {tool.availability}
                  {"% "}
                  <a
                    href={`https://openebench.bsc.es/html/tool/${tool.bio_id}`}
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="font-awesome-button"
                      icon={faCircleQuestion}
                    />
                  </a>
                </div>
              )}
            </div>
          ),
          documentation: resolveDocumentation(tool.documentation),
        }))}
      />
    </div>
  );
};

export default Scientometry;
