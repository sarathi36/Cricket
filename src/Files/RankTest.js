import React  from "react";
import './Style.css';
import { NavLink } from "react-router-dom";

function RankTest(){
    return(
        <>
         <div class="fir">
       
       <div id="sec">
           <div style={{margin:"auto"}}>
           <NavLink to="/TestBat">  <p>TEST Batting </p> </NavLink>
           </div>
           <div style={{margin:"auto"}}>
           <NavLink to="/TestBowl"> <p> TEST Bowling</p>  </NavLink>
           </div>
           <div style={{margin:"auto"}}>
           <NavLink to="/TestAllrounder">   <p> TEST All-Rounter</p> </NavLink>
           </div>
          
           
           

       </div>
   </div>

        </>
    )
}

export default RankTest;