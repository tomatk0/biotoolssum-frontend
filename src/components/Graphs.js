import React from "react";
import HighchartsReact from "highcharts-react-official";
import "../styles/Graphs.css";

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

var Highcharts = require("highcharts");
require("highcharts/modules/exporting")(Highcharts);

const Graphs = (props) => {
  const addFormatter = (options) => {
    options.tooltip.formatter = function () {
      return "The value for <b>" + this.x + "</b> is <b>" + this.y + "</b>";
    };
    return options;
  };

  const getGraphs = () => {
    const result = [];
    props.tools.forEach((tool) => {
      if (tool.options_for_graph !== null) {
        const newGraph = {};
        newGraph.name = tool.name;
        newGraph.chart = (
          <HighchartsReact
            highcharts={Highcharts}
            options={addFormatter(tool.options_for_graph)}
          ></HighchartsReact>
        );
        result.push(newGraph);
      }
    });
    return result;
  };

  return (
    <div className="graph_table">
      <MaterialTable
        columns={[
          {
            title: "nameSearch",
            field: "nameSearch",
            searchable: true,
            hidden: true,
          },
          {
            field: "chart",
          },
        ]}
        options={{
          paging: true,
          pageSize: 10,
          showTitle: false,
          sorting: false,
          searchFieldAlignment: "left",
          toolbarButtonAlignment: "left",
        }}
        icons={tableIcons}
        data={getGraphs().map((tool) => ({
          nameSearch: tool.name,
          chart: tool.chart,
        }))}
      ></MaterialTable>
    </div>
  );
};

export default Graphs;
