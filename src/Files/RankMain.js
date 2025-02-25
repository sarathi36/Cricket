import React  from "react";
import './Style.css';
import './media.css';
import { NavLink } from "react-router-dom";

function RankMain(){
    return(
        <>
         <div class="fir">
       
       <div id="sec">
           <div style={{margin:"auto"}}>
           <NavLink to="/OdiBat">  <p>ODI Batting </p> </NavLink>
           </div>
           <div style={{margin:"auto"}}>
           <NavLink to="/OdiBowl"> <p> ODI Bowling</p>  </NavLink>
           </div>
           <div style={{margin:"auto"}}>
           <NavLink to="/OdiAllrounder">   <p> ODI All-Rounter</p> </NavLink>
           </div>
          
           
           

       </div>
   </div>

        </>
    )
}

export default RankMain;