import React from "react";
import '../styles/Matrix.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import dna1d from "../images/dna-1d-services.png";
import dna2d from "../images/dna-2d-services.png";
import dna3d from "../images/dna-3d-services.png";
import dnaxd from "../images/dna-xd-services.png";
import drug1d from "../images/drug-1d-services.png";
import drug2d from "../images/drug-2d-services.png";
import drug3d from "../images/drug-3d-services.png";
import drugxd from "../images/drug-xd-services.png";
import rna1d from "../images/rna-1d-services.png";
import rna2d from "../images/rna-2d-services.png";
import rna3d from "../images/rna-3d-services.png";
import rnaxd from "../images/rna-xd-services.png";
import protein1d from "../images/protein-1d-services.png";
import protein2d from "../images/protein-2d-services.png";
import protein3d from "../images/protein-3d-services.png";
import proteinxd from "../images/protein-xd-services.png";

const Matrix = (props) => {

  const getNumberOfQueries = (query) => {
    let numberOfQueries = 0;

    props.tools.forEach((tool) => {
      tool.matrix_queries.forEach((matrixQuery) => {
        if (matrixQuery.matrix_query === query) {
          numberOfQueries++;
        }
      });
    });

    return numberOfQueries;
  }
  
  return (
    <Router>
    <table className="matrix_table">
      <thead>
        <tr>
          <th></th>
          <th className="grey_square">1D Sequence</th>
          <th className="grey_square">2D topology</th>
          <th className="grey_square">3D structure</th>
          <th className="grey_square">xD omics</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="grey_square">DNA</td>
          <td><Link className="blue_link" to="/dna-1d-services"><img src={dna1d} alt="dna1d" />{getNumberOfQueries("dna sequence")}</Link></td>
          <td><Link className="blue_link" to="/dna-2d-services"><img src={dna2d} alt="dna2d" />{getNumberOfQueries("dna secondary structure")}</Link></td>
          <td><Link className="blue_link" to="/dna-3d-services"><img src={dna3d} alt="dna3d" />{getNumberOfQueries("dna structure")}</Link></td>
          <td><Link className="blue_link" to="/dna-xd-services"><img src={dnaxd} alt="dnaxd" />{getNumberOfQueries("genomics")}</Link></td>
        </tr>
        <tr>
          <td className="grey_square">RNA</td>
          <td><Link className="blue_link" to="/rna-1d-services"><img src={rna1d} alt="rna1d" />{getNumberOfQueries("rna sequence")}</Link></td>
          <td><Link className="blue_link" to="/rna-2d-services"><img src={rna2d} alt="rna2d" />{getNumberOfQueries("rna secondary structure")}</Link></td>
          <td><Link className="blue_link" to="/rna-3d-services"><img src={rna3d} alt="rna3d" />{getNumberOfQueries("rna structure")}</Link></td>
          <td><Link className="blue_link" to="/rna-xd-services"><img src={rnaxd} alt="rnaxd" />{getNumberOfQueries("rna omics")}</Link></td>
        </tr>
        <tr>
          <td className="grey_square">Protein</td>
          <td><Link className="blue_link" to="/protein-1d-services"><img src={protein1d} alt="protein1d" />{getNumberOfQueries("protein sequence")}</Link></td>
          <td><Link className="blue_link" to="/protein-2d-services"><img src={protein2d} alt="protein2d" />{getNumberOfQueries("protein secondary structure")}</Link></td>
          <td><Link className="blue_link" to="/protein-3d-services"><img src={protein3d} alt="protein3d" />{getNumberOfQueries("protein structure")}</Link></td>
          <td><Link className="blue_link" to="/protein-xd-services"><img src={proteinxd} alt="proteinxd" />{getNumberOfQueries("protein omics")}</Link></td>
        </tr>
        <tr>
          <td className="grey_square">Drugs and other small molecules</td>
          <td><Link className="blue_link" to="/drug-1d-services"><img src={drug1d} alt="drug1d" />{getNumberOfQueries("small molecule primary sequence")}</Link></td>
          <td><Link className="blue_link" to="/drug-2d-services"><img src={drug2d} alt="drug2d" />{getNumberOfQueries("small molecule secondary structure")}</Link></td>
          <td><Link className="blue_link" to="/drug-3d-services"><img src={drug3d} alt="drug3d" />{getNumberOfQueries("small molecule structure")}</Link></td>
          <td><Link className="blue_link" to="/drug-4d-services"><img src={drugxd} alt="drugxd" />{getNumberOfQueries("small molecule omics")}</Link></td>
        </tr>
      </tbody>
    </table>
    </Router>
  );
};

export default Matrix;