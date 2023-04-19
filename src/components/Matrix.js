import React from "react";
import '../styles/Matrix.css';
import {Link} from "react-router-dom";

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

    return <div className="text-little">{numberOfQueries}</div>;
  }
  
  return (
    <table className="matrix_table">
      <thead>
        <tr>
          <th className="light_grey_square"><Link to="/all-services"><div>All services</div><div className="text-little">{props.numberOfTools}</div></Link></th>
          <th className="grey_square">1D Sequence</th>
          <th className="grey_square">2D topology</th>
          <th className="grey_square">3D structure</th>
          <th className="grey_square">xD omics</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="grey_square">DNA</td>
          <td className="light_grey_square"><Link to="/dna-1d-services"><img src={dna1d} alt="dna1d" /><div className="text-little">{props.matrixDataSizes[0]}</div></Link></td>
          <td className="light_grey_square"><Link to="/dna-2d-services"><img src={dna2d} alt="dna2d" /><div className="text-little">{props.matrixDataSizes[1]}</div></Link></td>
          <td className="light_grey_square"><Link to="/dna-3d-services"><img src={dna3d} alt="dna3d" /><div className="text-little">{props.matrixDataSizes[2]}</div></Link></td>
          <td className="light_grey_square"><Link to="/dna-xd-services"><img src={dnaxd} alt="dnaxd" /><div className="text-little">{props.matrixDataSizes[3]}</div></Link></td>
        </tr>
        <tr>
          <td className="grey_square">RNA</td>
          <td className="light_grey_square"><Link to="/rna-1d-services"><img src={rna1d} alt="rna1d" /><div className="text-little">{props.matrixDataSizes[4]}</div></Link></td>
          <td className="light_grey_square"><Link to="/rna-2d-services"><img src={rna2d} alt="rna2d" /><div className="text-little">{props.matrixDataSizes[5]}</div></Link></td>
          <td className="light_grey_square"><Link to="/rna-3d-services"><img src={rna3d} alt="rna3d" /><div className="text-little">{props.matrixDataSizes[6]}</div></Link></td>
          <td className="light_grey_square"><Link to="/rna-xd-services"><img src={rnaxd} alt="rnaxd" /><div className="text-little">{props.matrixDataSizes[7]}</div></Link></td>
        </tr>
        <tr>
          <td className="grey_square">Protein</td>
          <td className="light_grey_square"><Link to="/protein-1d-services"><img src={protein1d} alt="protein1d" /><div className="text-little">{props.matrixDataSizes[8]}</div></Link></td>
          <td className="light_grey_square"><Link to="/protein-2d-services"><img src={protein2d} alt="protein2d" /><div className="text-little">{props.matrixDataSizes[9]}</div></Link></td>
          <td className="light_grey_square"><Link to="/protein-3d-services"><img src={protein3d} alt="protein3d" /><div className="text-little">{props.matrixDataSizes[10]}</div></Link></td>
          <td className="light_grey_square"><Link to="/protein-xd-services"><img src={proteinxd} alt="proteinxd" /><div className="text-little">{props.matrixDataSizes[11]}</div></Link></td>
        </tr>
        <tr>
          <td className="grey_square">Drugs and other small molecules</td>
          <td className="light_grey_square"><Link to="/drug-1d-services"><img src={drug1d} alt="drug1d" /><div className="text-little">{props.matrixDataSizes[12]}</div></Link></td>
          <td className="light_grey_square"><Link to="/drug-2d-services"><img src={drug2d} alt="drug2d" /><div className="text-little">{props.matrixDataSizes[13]}</div></Link></td>
          <td className="light_grey_square"><Link to="/drug-3d-services"><img src={drug3d} alt="drug3d" /><div className="text-little">{props.matrixDataSizes[14]}</div></Link></td>
          <td className="light_grey_square"><Link to="/drug-4d-services"><img src={drugxd} alt="drugxd" /><div className="text-little">{props.matrixDataSizes[15]}</div></Link></td>
        </tr>
      </tbody>
    </table>

  );
};

export default Matrix;