import React from "react";
import "../styles/Header.css";

import elixirLogo from "../images/elixir-logo.png";

const Header = (props) => {
  return (
    <div className="container">
      <img src={elixirLogo} alt="Elixir logo" />
      <div className="text">There is a total number of {props.amount} tools available</div>
      <div className="button-wrapper">
        <button onClick={props.getDataFromBackend}>Fetch data</button>
        {!props.displayOverview && <button onClick={props.onDisplayOverview}>Display overview</button>}
        {!props.displayBasic && <button onClick={props.onDisplayBasic}>Display basic</button>}
        {!props.displayScientometry && <button onClick={props.onDisplayScientometry}>Display scientometry</button>}
        {!props.displayDevelopment && <button onClick={props.onDisplayDevelopment}>Display development</button>}
      </div>
    </div>
  );
};

export default Header;
