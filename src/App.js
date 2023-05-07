import "./App.css";
import React, { useState, useEffect } from "react";
import config from './common/config';

import AppTypeTable from "./components/AppTypeTable";
import AppTypeMatrix from "./components/AppTypeMatrix";
import AppTypeCycle from "./components/AppTypeCycle";

function App() {
  const [toolsData, setToolsData] = useState([]);
  const [toolsString, setToolsString] = useState("");
  const [numberOfTools, setNumberOfTools] = useState(0);
  const [matrixData, setMatrixData] = useState([]);
  const [matrixDataSizes, setMatrixDataSizes] = useState([])
  const [dataCycleData, setDataCycleDta] = useState([])
  const [dataCycleDataSizes, setDataCycleDataSizes] = useState([])

  const getDataFromBackend = async () => {
    setToolsString("Loading tools...")
    const data = await fetch("http://147.251.124.170/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: config.getCurrentId(),
      }),
    });
    const result = await data.json();
    setToolsString(result.resulting_string);
    setToolsData(result.data);
    setNumberOfTools(result.data.length);
    setMatrixData(result.matrix_tools);
    setMatrixDataSizes(result.matrix_tools_sizes)
    setDataCycleDta(result.data_cycle_tools)
    setDataCycleDataSizes(result.data_cycle_tools_sizes)
  };

  useEffect(() => {
    getDataFromBackend();
  }, []);

  return (
    <>
      {config.appType() === "table" &&
      <>
        <AppTypeTable toolsData={toolsData} toolsString={toolsString} numberOfTools={numberOfTools} query=""></AppTypeTable>
      </>
      }
      {config.appType() === "matrix" &&
      <>
        <AppTypeMatrix toolsData={toolsData} toolsString={toolsString} numberOfTools={numberOfTools} matrixData={matrixData} matrixDataSizes={matrixDataSizes} query=""></AppTypeMatrix>
      </>
        }
      {config.appType() === "cycle" &&
      <>
        <AppTypeCycle toolsData={toolsData} toolsString={toolsString} numberOfTools={numberOfTools} dataCycleData={dataCycleData} dataCycleDataSizes={dataCycleDataSizes} query=""></AppTypeCycle>
      </>
        }
    </>
  );
}

export default App;
