import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Table.css";
import ReadMore from "../common/ReadMore";
import ShowMoreComplexLists from "../common/ShowMoreComplexLists";
import ShowMoreSimpleLists from "../common/ShowMoreSimpleLists";
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

const Overview = (props) => {

  const getToolsFromQuery = () => {
    let tools = [];

    props.tools.forEach((tool) => {
      tool.matrix_queries.forEach((matrixQuery) => {
        if (matrixQuery.matrix_query === props.query) {
          tools.push(tool);
        }
      });
    });
    return tools;
  };

  const listOfTools = props.tools;

  if (props.toolsString !== "Loading tools...") {
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
              title: "Name (searchable)",
              field: "name",
              cellStyle: {
                textAlign: "center",
                width: "15%",
              },
            },
            {
              title: "Institutes",
              field: "institutes",
              cellStyle: {
                width: "15%",
              },
            },
            {
              title: "descriptionSearch",
              field: "descriptionSsearch",
              searchable: true,
              hidden: true,
            },
            {
              title: "Description (searchable)",
              field: "description",
              cellStyle: {
                width: "21%",
              },
            },
            {
              title: "Topics",
              field: "topics",
              cellStyle: {
                width: "19%",
              },
            },
            {
              title: "Functions",
              field: "functions",
              cellStyle: {
                width: "19%",
              },
            },
            {
              title: "Documentations",
              field: "documentations",
              sorting: false,
              cellStyle: {
                width: "11%",
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
              <ShowMoreSimpleLists
                list={tool.institutes}
                listMaxSize={1}
                attribute="name"
              ></ShowMoreSimpleLists>
            ),
            descriptionSearch: tool.description,
            description: (
              <ReadMore text={tool.description} textMaxSize={175}></ReadMore>
            ),
            topics: (
              <ShowMoreComplexLists
                list={tool.topics}
                listMaxSize={2}
                link="https://bio.tools/t?topic="
                attribute="term"
              ></ShowMoreComplexLists>
            ),
            functions: (
              <ShowMoreComplexLists
                list={tool.functions}
                listMaxSize={2}
                link="https://bio.tools/t?operation="
                attribute="term"
              ></ShowMoreComplexLists>
            ),
            documentations: (
              <ShowMoreComplexLists
                list={tool.documentations}
                listMaxSize={3}
                attribute="url"
              ></ShowMoreComplexLists>
            ),
          }))}
        />
      </div>
    );
  }
};

export default Overview;
