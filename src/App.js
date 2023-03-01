import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Overview from "./components/Overview";
import Basic from "./components/Basic";
import Scientometry from "./components/Scientometry";
import Header from "./components/Header";
import Matrix from "./components/Matrix";
import Development from "./components/Development";
import Graphs from "./components/Graphs";
import DataLifeCycle from "./components/DataLifeCycle";

function App() {
  const [toolsData, setToolsData] = useState([]);
  const [toolsString, setToolsString] = useState("");
  const [query, setQuery] = useState("")

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const getDataFromBackend = async () => {
    const data = await fetch("http://147.251.115.167/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: query,
      }),
    });
    const result = await data.json();
    setToolsData(result.data);
    setToolsString(result.resulting_string);
  };

  return (
    <>
      <Header
        getDataFromBackend={getDataFromBackend}
        string={toolsString}
        amount={toolsData.length}
        onChangeQuery={handleChange}
      ></Header>
      <Routes>
        <Route path="/" element={<Overview tools={toolsData}></Overview>}></Route>
        <Route path="/basic" element={<Basic tools={toolsData}></Basic>}></Route>
        <Route path="/scientometry" element={<Scientometry tools={toolsData}></Scientometry>}></Route>
        <Route path="/development" element={<Development tools={toolsData}></Development>}></Route>
        <Route path="/graphs" element={<Graphs tools={toolsData}></Graphs>}></Route>

        <Route path="/datalifecycle" element={<DataLifeCycle></DataLifeCycle>}></Route>
        <Route path="/datalifecycle/reuse" element={<Overview></Overview>}></Route>
        <Route path="/datalifecycle/plan" element={<Overview></Overview>}></Route>
        <Route path="/datalifecycle/collect" element={<Overview></Overview>}></Route>
        <Route path="/datalifecycle/process" element={<Overview></Overview>}></Route>
        <Route path="/datalifecycle/analyse" element={<Overview></Overview>}></Route>
        <Route path="/datalifecycle/preserve" element={<Overview></Overview>}></Route>
        <Route path="/datalifecycle/share" element={<Overview></Overview>}></Route>

        <Route path="/matrix" element={<Matrix tools={toolsData}></Matrix>}></Route>
        <Route path="/matrix/dna-1d-services" element={<Overview tools={toolsData} query={"dna sequence"}></Overview>}></Route>
        <Route path="/matrix/dna-2d-services" element={<Overview tools={toolsData} query={"dna secondary structure"}></Overview>}></Route>
        <Route path="/matrix/dna-3d-services" element={<Overview tools={toolsData} query={"dna structure"}></Overview>}></Route>
        <Route path="/matrix/dna-xd-services" element={<Overview tools={toolsData} query={"genomics"}></Overview>}></Route>

        <Route path="/matrix/rna-1d-services" element={<Overview tools={toolsData} query={"rna sequence"}></Overview>}></Route>
        <Route path="/matrix/rna-2d-services" element={<Overview tools={toolsData} query={"rna secondary structure"}></Overview>}></Route>
        <Route path="/matrix/rna-3d-services" element={<Overview tools={toolsData} query={"rna structure"}></Overview>}></Route>
        <Route path="/matrix/rna-xd-services" element={<Overview tools={toolsData} query={"rna omics"}></Overview>}></Route>

        <Route path="/matrix/protein-1d-services" element={<Overview tools={toolsData} query={"protein sequence"}></Overview>}></Route>
        <Route path="/matrix/protein-2d-services" element={<Overview tools={toolsData} query={"protein secondary structure"}></Overview>}></Route>
        <Route path="/matrix/protein-3d-services" element={<Overview tools={toolsData} query={"protein structure"}></Overview>}></Route>
        <Route path="/matrix/protein-xd-services" element={<Overview tools={toolsData} query={"protein omics"}></Overview>}></Route>

        <Route path="/matrix/drug-1d-services" element={<Overview tools={toolsData} query={"small molecule primary sequence"}></Overview>}></Route>
        <Route path="/matrix/drug-2d-services" element={<Overview tools={toolsData} query={"small molecule secondary structure"}></Overview>}></Route>
        <Route path="/matrix/drug-3d-services" element={<Overview tools={toolsData} query={"small molecule structure"}></Overview>}></Route>
        <Route path="/matrix/drug-xd-services" element={<Overview tools={toolsData} query={"small molecule omics"}></Overview>}></Route>
      </Routes>
    </>
  );
}

export default App;
