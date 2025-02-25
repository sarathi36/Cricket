import React from "react";
import './Style.css';
import { NavLink } from "react-router-dom";

function Globalshop(){
    return(
        <>
            <div class="fir">
        <div id="fir">
            <img src="images/weusa.avif" width="100%" alt=""/>
        </div>
        <div id="sec">
            <div style={{margin:"auto"}}>
              <NavLink to="/Caps "><p>Caps</p></NavLink>
            </div>
            <div style={{margin:"auto"}}>
            <NavLink to="/Hoodies "> <p>Pullover hoodies</p> </NavLink> 
            </div>
            <div style={{margin:"auto"}}>
             <NavLink to="/Longsleeve"><p>Longsleeves</p></NavLink>
            </div>
            <div style={{margin:"auto"}}>
            <NavLink to="/Polos"><p>Polos</p></NavLink>
            </div>
            <div style={{margin:"auto"}}>
            <NavLink to="/GlobalTshirt"><p>T-Shirts</p></NavLink>
            </div>
            

        </div>
    </div>
        </>
    )
}

export default Globalshop;