import React from "react";
import './Style.css';
import { NavLink } from "react-router-dom";


function TrophyMain(){
    return(
        <>
         <div class="fir">
       
        <div id="sec">
            <div style={{margin:"auto"}}>
            <NavLink to="/Classic">  <p>ICC Classic World Cup </p> </NavLink>
            </div>
            <div style={{margin:"auto"}}>
            <NavLink to="/Champion"> <p> ICC Champions Trophy</p>  </NavLink>
            </div>
            <div style={{margin:"auto"}}>
            <NavLink to="/T20">   <p> ICC T20 World Cup </p> </NavLink>
            </div>
            <div style={{margin:"auto"}}>
            <NavLink to="/Test"> <p> ICC Test Championship </p>   </NavLink>
            </div>
            
            

        </div>
    </div>

        </>
    )
}

export default TrophyMain;