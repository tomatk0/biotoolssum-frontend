import React from "react";
import { Route, Routes } from "react-router-dom";

import DataLifeCycle from "./DataLifeCycle";
import Overview from "./Overview";
import Header from "./Header";

const AppTypeCycle = (props) => {
  return (
    <>
      <Header
        string={`${props.toolsString}.`}
        amount={props.numberOfTools}
        data={props.toolsData}
        query=""
      ></Header>
      <Routes>
        <Route
          path="/"
          element={<DataLifeCycle></DataLifeCycle>}
        ></Route>
        <Route
          path="/reuse/*"
          element={<Overview></Overview>}
        ></Route>
        <Route
          path="/plan/*"
          element={<Overview></Overview>}
        ></Route>
        <Route
          path="/collect/*"
          element={<Overview></Overview>}
        ></Route>
        <Route
          path="/process/*"
          element={<Overview></Overview>}
        ></Route>
        <Route
          path="/analyse/*"
          element={<Overview></Overview>}
        ></Route>
        <Route
          path="/preserve/*"
          element={<Overview></Overview>}
        ></Route>
        <Route
          path="/share/*"
          element={<Overview></Overview>}
        ></Route>
      </Routes>
    </>
  );
};

export default AppTypeCycle;
