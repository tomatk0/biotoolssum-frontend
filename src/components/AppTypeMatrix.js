import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";

import AppTypeTable from './AppTypeTable';
import Matrix from './Matrix';
import Header from "./Header";

const AppTypeMatrix = (props) => {
    

    const getSubsetOfTools = (query) => {
        let result = [];
        props.toolsData.forEach((tool) => {
            tool.matrix_queries.forEach((matrixQuery) => {
                if (matrixQuery.matrix_query === query) {
                    result.push(tool);
                }
            });
        });
        return result;
    }

    return (
        <>
        {useLocation().pathname === "/" ? <Header string={`${props.toolsString}.`} amount={props.numberOfTools} data={props.toolsData}></Header> : null}
        <Routes>
            <Route path="/" element={<Matrix tools={props.toolsData} ></Matrix>}></Route>
            <Route path="/all-services/*" element={<AppTypeTable toolsData={props.toolsData} toolsString={props.toolsString} numberOfTools={props.numberOfTools} query='/all-services'></AppTypeTable>}></Route>
            <Route path="/dna-1d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("dna sequence")} toolsString={`${props.toolsString} for studies on dna sequence.`} numberOfTools={getSubsetOfTools("dna sequence").length} query={"/dna-1d-services"}></AppTypeTable>}></Route>
            <Route path="/dna-2d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("dna secondary structure")} toolsString={`${props.toolsString} for studies on dna secondary structure.`} numberOfTools={getSubsetOfTools("dna secondary structure").length} query={"/dna-2d-services"}></AppTypeTable>}></Route>
            <Route path="/dna-3d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("dna structure")} toolsString={`${props.toolsString} for studies on dna structure.`} numberOfTools={getSubsetOfTools("dna structure").length} query={"/dna-3d-services"}></AppTypeTable>}></Route>
            <Route path="/dna-xd-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("genomics")} toolsString={`${props.toolsString} for studies on genomics.`} numberOfTools={getSubsetOfTools("genomics").length} query={"/dna-xd-services"}></AppTypeTable>}></Route>

            <Route path="/rna-1d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("rna sequence")} toolsString={`${props.toolsString} for studies on rna sequence.`} numberOfTools={getSubsetOfTools("rna sequence").length} query={"/rna-1d-services"}></AppTypeTable>}></Route>
            <Route path="/rna-2d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("rna secondary structure")} toolsString={`${props.toolsString} for studies on rna secondary structure.`} numberOfTools={getSubsetOfTools("/rna secondary structure").length} query={"rna-2d-services"}></AppTypeTable>}></Route>
            <Route path="/rna-3d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("rna structure")} toolsString={`${props.toolsString} for studies on rna structure.`} numberOfTools={getSubsetOfTools("rna structure").length} query={"/rna-3d-services"}></AppTypeTable>}></Route>
            <Route path="/rna-xd-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("rna omics")} toolsString={`${props.toolsString} for studies on rna omics.`} numberOfTools={getSubsetOfTools("rna omics").length} query={"/rna-xd-services"}></AppTypeTable>}></Route>

            <Route path="/protein-1d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("protein sequence")} toolsString={`${props.toolsString} for studies on protein sequence.`} numberOfTools={getSubsetOfTools("protein structure").length} query={"/protein-1d-services"}></AppTypeTable>}></Route>
            <Route path="/protein-2d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("protein secondary structure")} toolsString={`${props.toolsString} for studies on protein secondary structure.`} numberOfTools={getSubsetOfTools("protein secondary structure").length} query={"/protein-2d-services"}></AppTypeTable>}></Route>
            <Route path="/protein-3d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("protein structure")} toolsString={`${props.toolsString} for studies on protein structure.`} numberOfTools={getSubsetOfTools("protein structure").length} query={"/protein-3d-services"}></AppTypeTable>}></Route>
            <Route path="/protein-xd-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("protein omics")} toolsString={`${props.toolsString} for studies on protein omics.`} numberOfTools={getSubsetOfTools("protein omics").length} query={"/protein-xd-services"}></AppTypeTable>}></Route>

            <Route path="/drug-1d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("small molecule primary sequence")} toolsString={`${props.toolsString} for studies on small molecule primary sequence.`} numberOfTools={getSubsetOfTools("small molecule primary sequence").length} query={"/drug-1d-services"}></AppTypeTable>}></Route>
            <Route path="/drug-2d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("small molecule secondary structure")} toolsString={`${props.toolsString} for studies on small molecule secondary structure.`} numberOfTools={getSubsetOfTools("small molecule secondary sequence").length} query={"/drug-2d-services"}></AppTypeTable>}></Route>
            <Route path="/drug-3d-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("small molecule structure")} toolsString={`${props.toolsString} for studies on small molecule structure.`} numberOfTools={getSubsetOfTools("small molecule structure").length} query={"/drug-3d-services"}></AppTypeTable>}></Route>
            <Route path="/drug-xd-services/*" element={<AppTypeTable toolsData={getSubsetOfTools("small molecule omics")} toolsString={`${props.toolsString} for studies on small molecule omics.`} numberOfTools={getSubsetOfTools("small molecule omics").length} query={"/drug-4d-services"}></AppTypeTable>}></Route>
        </Routes>
        </>
    )
}

export default AppTypeMatrix;