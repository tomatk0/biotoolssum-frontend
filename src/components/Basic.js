import React from "react";
import { Label } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Table.css";

import {
  faWindows,
  faLinux,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

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

const Basic = (props) => {

  const addLabelToMaturity = (maturity) => {
    if (maturity === 'Emerging') {
      return <Label color="blue">{maturity}</Label>
    } else if (maturity === 'Mature'){
      return <Label color="green">{maturity}</Label>
    } else if (maturity === 'Legacy'){
      return <Label color="red">{maturity}</Label>
    }
  }

  const getPlatformIcon = (platform) => {
    if (platform === "Windows") {
      return <FontAwesomeIcon icon={faWindows} />;
    } else if (platform === "Linux") {
      return <FontAwesomeIcon icon={faLinux} />;
    } else if (platform === "Mac") {
      return <FontAwesomeIcon icon={faApple} />;
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
              title: "Name",
              field: "name",
            },
            {
              title: "Inputs",
              field: "inputs",
            },
            {
              title: "Outputs",
              field: "outputs",
            },
            {
              title: "E. platforms",
              field: "eplatforms",
            },
            {
              title: "E. nodes",
              field: "enodes",
            },
            {
              title: "E. communities",
              field: "ecommunities",
            },
            {
              title: "License",
              field: "license",
            },
            {
              title: "Maturity",
              field: "maturity",
            },
            {
              title: "Platforms",
              field: "platforms",
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
            inputs: (
              <ul className="display_ul">
                {tool.inputs.map((i) => (
                  <li key={i.term}>{i.term}</li>
                ))}
              </ul>
            ),
            outputs: (
              <ul className="display_ul">
                {tool.outputs.map((o) => (
                  <li key={o.term}>{o.term}</li>
                ))}
              </ul>
            ),
            eplatforms: (
              <ul className="display_ul">
                {tool.elixir_platforms.map((p) => (
                  <li key={p.name}>{p.name}</li>
                ))}
              </ul>
            ),
            enodes: (
              <ul className="display_ul">
                {tool.elixir_nodes.map((n) => (
                  <li key={n.name}>{n.name}</li>
                ))}
              </ul>
            ),
            ecommunities: (
              <ul className="display_ul">
                {tool.elixir_communities.map((c) => (
                  <li key={c.name}>{c.name}</li>
                ))}
              </ul>
            ),
            license: tool.license,
            maturity: addLabelToMaturity(tool.maturity),
            platforms: (
              <ul className="display_ul">
                {tool.platforms.map((p) => (
                  <li key={p.name}>{getPlatformIcon(p.name)}{console.log(p.name)}</li>
                  
                ))}
              </ul>
            ),
          }))}
        />
      </div>
  );
};

export default Basic;
