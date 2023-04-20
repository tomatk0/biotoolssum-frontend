import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import 'react-dropdown/style.css';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartSimple, faFlask, faHouse, faGear } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Exporting from "./Exporting";
import config from '../common/config';

import elixirLogo from "../images/elixir-logo.png";

const Header = (props) => {
  return (
    <nav className="container-header">
      <Link to="/"><img src={elixirLogo} alt="Elixir logo" /></Link>
      {props.string === "Loading tools..." ? <div className="text">{props.string}</div> : <div className="text">{props.string}. There is a total number of {props.amount} tools available.</div>}
      <div className="wrapper">
      <Exporting data={props.data}></Exporting>
        <Menu menuButton={<MenuButton>View <FontAwesomeIcon icon={faBars} /></MenuButton>} transition>
          <MenuItem><Link style={{color: 'black'}} to={props.query !== "" ? `${props.query}` : "/"}>Overview <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link></MenuItem>
          {config.showBasic() ? <MenuItem><Link style={{color: 'black'}} to={props.query !== "" ? `${props.query}/basic` : "/basic"}>Basic <FontAwesomeIcon icon={faGear}></FontAwesomeIcon></Link></MenuItem> : null}
          {config.showScientometry() ? <MenuItem><Link style={{color: 'black'}} to={props.query !== "" ? `${props.query}/scientometry` : "/scientometry"}>Scientometry <FontAwesomeIcon icon={faFlask}></FontAwesomeIcon></Link></MenuItem> : null}
          {config.showDevelopment() ? <MenuItem><Link style={{color: 'black'}} to={props.query !== "" ? `${props.query}/development` : "/development"}>Development <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></Link></MenuItem> : null}
          {config.showGraphs() ? <MenuItem><Link style={{color: 'black'}} to={props.query !== "" ? `${props.query}/graphs` : "/graphs"}>Citations graphs <FontAwesomeIcon icon={faChartSimple}></FontAwesomeIcon></Link></MenuItem> : null}
        </Menu>
      </div>
    </nav>
  );
};

export default Header;
