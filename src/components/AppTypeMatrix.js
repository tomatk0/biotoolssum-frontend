import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AppTypeTable from "./AppTypeTable";
import Matrix from "./Matrix";
import Header from "./Header";

const AppTypeMatrix = (props) => {
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
      {props.numberOfTools > 0 && (
        <Routes>
          <Route
            path="/"
            element={
              <Matrix
                matrixDataSizes={props.matrixDataSizes}
                numberOfTools={props.numberOfTools}
              ></Matrix>
            }
          ></Route>
          <Route
            path="/all-services/*"
            element={
              <AppTypeTable
                toolsData={props.toolsData}
                toolsString={props.toolsString}
                numberOfTools={props.numberOfTools}
                query="/all-services"
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/dna-1d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[0]}
                toolsString={`${props.toolsString} for studies on dna sequence`}
                numberOfTools={props.matrixDataSizes[0]}
                query={"/dna-1d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/dna-2d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[1]}
                toolsString={`${props.toolsString} for studies on dna secondary structure`}
                numberOfTools={props.matrixDataSizes[1]}
                query={"/dna-2d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/dna-3d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[2]}
                toolsString={`${props.toolsString} for studies on dna structure`}
                numberOfTools={props.matrixDataSizes[2]}
                query={"/dna-3d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/dna-xd-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[3]}
                toolsString={`${props.toolsString} for studies on genomics`}
                numberOfTools={props.matrixDataSizes[3]}
                query={"/dna-xd-services"}
              ></AppTypeTable>
            }
          ></Route>

          <Route
            path="/rna-1d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[4]}
                toolsString={`${props.toolsString} for studies on rna sequence`}
                numberOfTools={props.matrixDataSizes[4]}
                query={"/rna-1d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/rna-2d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[5]}
                toolsString={`${props.toolsString} for studies on rna secondary structure`}
                numberOfTools={props.matrixDataSizes[5]}
                query={"/rna-2d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/rna-3d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[6]}
                toolsString={`${props.toolsString} for studies on rna structure`}
                numberOfTools={props.matrixDataSizes[6]}
                query={"/rna-3d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/rna-xd-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[7]}
                toolsString={`${props.toolsString} for studies on rna omics`}
                numberOfTools={props.matrixDataSizes[7]}
                query={"/rna-xd-services"}
              ></AppTypeTable>
            }
          ></Route>

          <Route
            path="/protein-1d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[8]}
                toolsString={`${props.toolsString} for studies on protein sequence`}
                numberOfTools={props.matrixDataSizes[8]}
                query={"/protein-1d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/protein-2d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[9]}
                toolsString={`${props.toolsString} for studies on protein secondary structure`}
                numberOfTools={props.matrixDataSizes[9]}
                query={"/protein-2d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/protein-3d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[10]}
                toolsString={`${props.toolsString} for studies on protein structure`}
                numberOfTools={props.matrixDataSizes[10]}
                query={"/protein-3d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/protein-xd-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[11]}
                toolsString={`${props.toolsString} for studies on protein omics`}
                numberOfTools={props.matrixDataSizes[11]}
                query={"/protein-xd-services"}
              ></AppTypeTable>
            }
          ></Route>

          <Route
            path="/drug-1d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[12]}
                toolsString={`${props.toolsString} for studies on small molecule primary sequence`}
                numberOfTools={props.matrixDataSizes[12]}
                query={"/drug-1d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/drug-2d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[13]}
                toolsString={`${props.toolsString} for studies on small molecule secondary structure`}
                numberOfTools={props.matrixDataSizes[13]}
                query={"/drug-2d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/drug-3d-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[14]}
                toolsString={`${props.toolsString} for studies on small molecule structure`}
                numberOfTools={props.matrixDataSizes[14]}
                query={"/drug-3d-services"}
              ></AppTypeTable>
            }
          ></Route>
          <Route
            path="/drug-xd-services/*"
            element={
              <AppTypeTable
                toolsData={props.matrixData[15]}
                toolsString={`${props.toolsString} for studies on small molecule omics`}
                numberOfTools={props.matrixDataSizes[15]}
                query={"/drug-xd-services"}
              ></AppTypeTable>
            }
          ></Route>
        </Routes>
      )}
    </>
  );
};

export default AppTypeMatrix;
