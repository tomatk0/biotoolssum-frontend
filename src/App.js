import "./App.css";
import React, { useState } from "react";
import config from "./common/config";

import Overview from "./components/Overview";
import Basic from "./components/Basic";
import Scientometry from "./components/Scientometry";
import Header from "./components/Header";
import Matrix from "./components/Matrix";

function App() {
  const [toolsData, setToolsData] = useState([]);
  const [displayOverview, setDisplayOverview] = useState(true);
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayScientometry, setDisplayScientometry] = useState(false);

  const onDisplayOverview = () => {
    setDisplayOverview(true);
    setDisplayBasic(false);
    setDisplayScientometry(false);
  };

  const onDisplayBasic = () => {
    setDisplayBasic(true);
    setDisplayOverview(false);
    setDisplayScientometry(false);
  };

  const onDisplayScientometry = () => {
    setDisplayScientometry(true);
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

  return (
    <div>
      <Header
        onDisplayOverview={onDisplayOverview}
        onDisplayBasic={onDisplayBasic}
        onDisplayScientometry={onDisplayScientometry}
        displayOverview={displayOverview}
        displayBasic={displayBasic}
        displayScientometry={displayScientometry}
        getDataFromBackend={getDataFromBackend}
        amount={toolsData.length}
      ></Header>
      {displayOverview && <Overview tools={toolsData}></Overview>}
      {displayBasic && <Basic tools={toolsData}></Basic>}
      {displayScientometry && <Scientometry tools={toolsData}></Scientometry>}
      <Matrix tools={toolsData}></Matrix>
    </div>
  );
}

export default App;
