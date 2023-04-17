import React from "react";
import { Route, Routes } from "react-router-dom";

import Overview from "./Overview";
import Basic from "./Basic";
import Scientometry from "./Scientometry";
import Development from "./Development";
import Graphs from "./Graphs";
import Header from "./Header";

const AppTypeTable = (props) => {
  return (
    <>
      <Header
        string={props.toolsString}
        amount={props.numberOfTools}
        data={props.toolsData}
        query={props.query}
      ></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Overview
              tools={props.toolsData}
              string={props.toolsString}
            ></Overview>
          }
        ></Route>
        <Route
          path="/basic"
          element={<Basic tools={props.toolsData}></Basic>}
        ></Route>
        <Route
          path="/scientometry"
          element={<Scientometry tools={props.toolsData}></Scientometry>}
        ></Route>
        <Route
          path="/development"
          element={<Development tools={props.toolsData}></Development>}
        ></Route>
        <Route
          path="/graphs"
          element={<Graphs tools={props.toolsData}></Graphs>}
        ></Route>
      </Routes>
    </>
  );
};

export default AppTypeTable;
