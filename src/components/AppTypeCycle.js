import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import DataLifeCycle from "./DataLifeCycle";
import AppTypeTable from "./AppTypeTable";
import Header from "./Header";

const AppTypeCycle = (props) => {
  return (
    <>
      {useLocation().pathname === "/" ? (
        <Header
          string={props.toolsString}
          amount={props.numberOfTools}
          data={props.toolsData}
          query={props.query}
        ></Header>
      ) : null}
      <Routes>
        <Route path="/" element={<DataLifeCycle></DataLifeCycle>}></Route>
        <Route
          path="/reusing/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for reusing data`}
              numberOfTools={props.numberOfTools}
              query="/reusing"
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/planning/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for planning data`}
              numberOfTools={props.numberOfTools}
              query="/planning"
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/collecting/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for collecting data`}
              numberOfTools={props.numberOfTools}
              query="/collecting"
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/processing/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for processing data`}
              numberOfTools={props.numberOfTools}
              query="/processing"
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/analysing/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for analysing data`}
              numberOfTools={props.numberOfTools}
              query="/analysing"
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/preserving/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for preserving data`}
              numberOfTools={props.numberOfTools}
              query="/preserving"
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/sharing/*"
          element={
            <AppTypeTable
              toolsData={props.toolsData}
              toolsString={`${props.toolsString} for sharing data`}
              numberOfTools={props.numberOfTools}
              query="/sharing"
            ></AppTypeTable>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AppTypeCycle;
