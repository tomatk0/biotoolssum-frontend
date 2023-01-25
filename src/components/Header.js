import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import 'react-dropdown/style.css';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import elixirLogo from "../images/elixir-logo.png";

const Header = (props) => {
  return (
    <nav className="container">
      <img src={elixirLogo} alt="Elixir logo" />
      <div className="text">There is a total number of {props.amount} tools available</div>
      <div className="wrapper">
        <button onClick={props.getDataFromBackend}>Fetch data</button>
        <Menu menuButton={<MenuButton>View</MenuButton>} transition>
          <MenuItem><Link to="/">Overview</Link></MenuItem>
          <MenuItem><Link to="/basic">Basic</Link></MenuItem>
          <MenuItem><Link to="/scientometry">Scientometry</Link></MenuItem>
          <MenuItem><Link to="/development">Development</Link></MenuItem>
          <MenuItem><Link to="/graphs">Graphs</Link></MenuItem>
          <MenuItem><Link to="/matrix">Matrix</Link></MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Header;
