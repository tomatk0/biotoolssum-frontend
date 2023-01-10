import "./App.css";
import React, { useState } from "react";
import config from "./common/config";

import Overview from "./components/Overview";
import Basic from "./components/Basic";
import Scientometry from "./components/Scientometry";
import Header from "./components/Header";
import Matrix from "./components/Matrix";
import Development from "./components/Development";
import Graphs from "./components/Graphs";

function App() {
  const [toolsData, setToolsData] = useState([]);
  const [displayOverview, setDisplayOverview] = useState(true);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayScientometry, setDisplayScientometry] = useState(false);
  const [displayDevelopment, setDisplayDevelopment] = useState(false);

  const onDisplayOverview = () => {
    setDisplayOverview(true);
    setDisplayBasic(false);
    setDisplayScientometry(false);
    setDisplayDevelopment(false);
  };

  const onDisplayBasic = () => {
    setDisplayBasic(true);
    setDisplayOverview(false);
    setDisplayScientometry(false);
    setDisplayDevelopment(false);
  };

  const onDisplayScientometry = () => {
    setDisplayScientometry(true);
    setDisplayBasic(false);
    setDisplayOverview(false);
    setDisplayDevelopment(false);
  };

  const onDisplayDevelopment = () => {
    setDisplayDevelopment(true);
    setDisplayScientometry(false);
    setDisplayBasic(false);
    setDisplayOverview(false);
  };

  const getDataFromBackend = async () => {
    const data = await fetch("http://147.251.115.167/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: config.getCurrentId(),
      }),
    });
    setToolsData(await data.json());
  };

  const display = config.getCurrentDisplay();

  return (
    <div>
      <Header
        onDisplayOverview={onDisplayOverview}
        onDisplayBasic={onDisplayBasic}
        onDisplayScientometry={onDisplayScientometry}
        onDisplayDevelopment={onDisplayDevelopment}
        displayOverview={displayOverview}
        displayBasic={displayBasic}
        displayScientometry={displayScientometry}
        displayDevelopment={displayDevelopment}
        getDataFromBackend={getDataFromBackend}
        amount={toolsData.length}
      ></Header>
      {display === 'table' && displayOverview && <Overview tools={toolsData}></Overview>}
      {display === 'table' && displayBasic && <Basic tools={toolsData}></Basic>}
      {display === 'table' && displayScientometry && <Scientometry tools={toolsData}></Scientometry>}
      {display === 'table' && displayDevelopment && <Development tools={toolsData}></Development>}
      {display === 'matrix' && <Matrix tools={toolsData}></Matrix>}
      {display === 'graphs' && <Graphs tools={toolsData}></Graphs>}
    </div>
  );
}

export default App;
