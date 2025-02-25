import React from "react";
import NavBar from "../Navbar";
import { NavLink } from "react-router-dom";

function Navbar2() {
    return(
        <> 
        <li>
           <NavLink to="/Classic">Hello</NavLink>
        </li>
        </>
    );
}

export default Navbar2;