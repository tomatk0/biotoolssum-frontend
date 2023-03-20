import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import 'react-dropdown/style.css';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Exporting from "./Exporting";

import elixirLogo from "../images/elixir-logo.png";

const Header = (props) => {
  return (
    <nav className="container-header">
      <Link to="/"><img src={elixirLogo} alt="Elixir logo" /></Link>
      {props.amount === 0 ? <div></div> : <div className="text">{props.string} There is a total number of {props.amount} tools available.</div>}
      <div className="wrapper">
      <Exporting data={props.data}></Exporting>
        <input type="text" onChange={props.onChangeQuery}></input>
        <button onClick={props.getDataFromBackend}>Fetch data</button>
        <Menu menuButton={<MenuButton>View <FontAwesomeIcon icon={faBars} /></MenuButton>} transition>
          <MenuItem><Link to="/">Overview</Link></MenuItem>
          <MenuItem><Link to="/basic">Basic</Link></MenuItem>
          <MenuItem><Link to="/scientometry">Scientometry</Link></MenuItem>
          <MenuItem><Link to="/development">Development</Link></MenuItem>
          <MenuItem><Link to="/graphs">Citations graphs</Link></MenuItem>
          <MenuItem><Link to="/datalifecycle">Data life cycle</Link></MenuItem>
          <MenuItem><Link to="/matrix">Matrix</Link></MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Header;
