import React from "react";
import './Style.css';
import { NavLink } from "react-router-dom";

function RankT20(){
    return(
        <>
        <div class="fir">
       
       <div id="sec">
           <div style={{margin:"auto"}}>
           <NavLink to="/T20Bat">  <p>T20 Batting </p> </NavLink>
           </div>
           <div style={{margin:"auto"}}>
           <NavLink to="/T20Bowl"> <p> T20 Bowling</p>  </NavLink>
           </div>
           <div style={{margin:"auto"}}>
           <NavLink to="/T20all">   <p> T20 All-Rounter</p> </NavLink>
           </div>
          
           
           

       </div>
   </div>

        </>
    )
}

export default RankT20;