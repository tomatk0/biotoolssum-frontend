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
          hideMenu={props.hideMenu}
        ></Header>
      ) : null}
      <Routes>
        <Route path="/" element={<DataLifeCycle numbersOfTools={props.dataCycleDataSizes}></DataLifeCycle>}></Route>
        <Route
          path="/reusing/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[6]}
              toolsString={`${props.toolsString} for reusing data`}
              numberOfTools={props.dataCycleDataSizes[6]}
              query="/reusing"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/managing/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[5]}
              toolsString={`${props.toolsString} for managing data`}
              numberOfTools={props.dataCycleDataSizes[5]}
              query="/managing"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/acquiring/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[0]}
              toolsString={`${props.toolsString} for acquiring data`}
              numberOfTools={props.dataCycleDataSizes[0]}
              query="/acquiring"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/processing/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[1]}
              toolsString={`${props.toolsString} for processing data`}
              numberOfTools={props.dataCycleDataSizes[1]}
              query="/processing"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/analysing/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[2]}
              toolsString={`${props.toolsString} for analysing data`}
              numberOfTools={props.dataCycleDataSizes[2]}
              query="/analysing"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/storing/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[3]}
              toolsString={`${props.toolsString} for storing data`}
              numberOfTools={props.dataCycleDataSizes[3]}
              query="/storing"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
        <Route
          path="/sharing/*"
          element={
            <AppTypeTable
              toolsData={props.dataCycleData[4]}
              toolsString={`${props.toolsString} for sharing data`}
              numberOfTools={props.dataCycleDataSizes[4]}
              query="/sharing"
              hideMenu={false}
            ></AppTypeTable>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AppTypeCycle;
