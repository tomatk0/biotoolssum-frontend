import React from "react";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Table.css";
import ShowMoreSimpleLists from "../common/ShowMoreSimpleLists";
import {
  faWindows,
  faLinux,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faRightToBracket,
  faRightFromBracket,
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

const Basic = (props) => {
  const addLabelToMaturity = (maturity) => {
    if (maturity === "Emerging") {
      return <Label color="blue">{maturity}</Label>;
    } else if (maturity === "Mature") {
      return <Label color="green">{maturity}</Label>;
    } else if (maturity === "Legacy") {
      return <Label color="red">{maturity}</Label>;
    }
  };

  const getPlatformIcon = (platform) => {
    if (platform === "Windows") {
      return (
        <Tooltip title="Platform: Windows" placement="top">
          <FontAwesomeIcon icon={faWindows} />
        </Tooltip>
      );
    } else if (platform === "Linux") {
      return (
        <Tooltip title="Platform: Linux" placement="top">
          <FontAwesomeIcon icon={faLinux} />
        </Tooltip>
      );
    } else if (platform === "Mac") {
      return (
        <Tooltip title="Platform: Mac" placement="top">
          <FontAwesomeIcon icon={faApple} />
        </Tooltip>
      );
    }
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
            title: "Name (searchable)",
            field: "name",
            cellStyle: {
              width: "15%",
              textAlign: "center",
            },
          },
          {
            title: (
              <div>
                Inputs <FontAwesomeIcon icon={faRightToBracket} />
              </div>
            ),
            field: "inputs",
            cellStyle: {
              width: "15%",
              textAlign: "left",
            },
          },
          {
            title: (
              <div>
                Outputs <FontAwesomeIcon icon={faRightFromBracket} />
              </div>
            ),
            field: "outputs",
            cellStyle: {
              width: "15%",
              textAlign: "left",
            },
          },
          {
            title: "E. platforms",
            field: "eplatforms",
            cellStyle: {
              width: "11%",
              textAlign: "center",
            },
          },
          {
            title: "E. nodes",
            field: "enodes",
            cellStyle: {
              width: "11%",
              textAlign: "center",
            },
          },
          {
            title: "E. communities",
            field: "ecommunities",
            cellStyle: {
              width: "11%",
              textAlign: "center",
            },
          },
          {
            title: "License",
            field: "license",
            cellStyle: {
              width: "8%",
              textAlign: "center",
            },
          },
          {
            title: "Maturity",
            field: "maturity",
            cellStyle: {
              width: "7%",
              textAlign: "center",
            },
          },
          {
            title: "Platforms",
            field: "platforms",
            cellStyle: {
              width: "7%",
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
          inputs: (
            <ShowMoreSimpleLists
              list={tool.inputs}
              listMaxSize={3}
              attribute="term"
            ></ShowMoreSimpleLists>
          ),
          outputs: (
            <ShowMoreSimpleLists
              list={tool.outputs}
              listMaxSize={3}
              attribute="term"
            ></ShowMoreSimpleLists>
          ),
          eplatforms: (
            <div>
              {tool.elixir_platforms.length < 1 ? (
                "-"
              ) : (
                <ul className="display_ul">
                  {tool.elixir_platforms.map((p) => (
                    <li key={p.name}>{p.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ),
          enodes: (
            <div>
              {tool.elixir_nodes.length < 1 ? (
                "-"
              ) : (
                <ul className="display_ul">
                  {tool.elixir_nodes.map((n) => (
                    <li key={n.name}>{n.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ),
          ecommunities: (
            <div>
              {tool.elixir_communities.length < 1 ? (
                "-"
              ) : (
                <ul className="display_ul">
                  {tool.elixir_communities.map((c) => (
                    <li key={c.name}>{c.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ),
          license: <div>{tool.license !== null ? tool.license : "-"}</div>,
          maturity: addLabelToMaturity(tool.maturity),
          platforms: (
            <ul className="display_ul">
              {tool.platforms.map((p) => (
                <li key={p.name}>{getPlatformIcon(p.name)}</li>
              ))}
            </ul>
          ),
        }))}
      />
    </div>
  );
};

export default Basic;
