import React from "react";
import './demo.css';

import { NavLink } from "react-router-dom";
import Home from "./Files/home";

const NavBar = () => {
  return (
    <nav>
        <div className="top">
        <div className="logo">
                <a href="/Home"><img src="images/icc-white-logo.svg" alt=""/></a>
            </div>
            <div className="head" style={{position: '-webkit-sticky',
    position: 'sticky'}}>
            <ul>
        <li style={{fontSize:"20px" , position:'-webkit-sticky'}}>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li style={{fontSize:"20px"}}>
          <NavLink to="/Shop">Shop</NavLink>
        </li>
        <li style={{fontSize:"20px"}}>
          <NavLink to="/News">News</NavLink>
        </li>
        <li style={{fontSize:"20px"}}>
          <NavLink to="/Ranking">Ranking</NavLink>
        </li>
        <li style={{fontSize:"20px"}}>
          <NavLink to="/Trophy">Trophy</NavLink>
        </li>
        <li style={{fontSize:"20px"}}>
          <NavLink to="/Team">Teams</NavLink>
        </li>

      </ul>
            </div>
        
        </div>
      
    </nav>
  );
};

export default NavBar;