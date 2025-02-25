import React from "react";
import './Style.css';
import TrophyMain from "./Trophymain";
function Test(){
    return(
        <>
        <div>
            <TrophyMain />
        </div>
        <div>
       <h1>Test Championship Trophy</h1>
       <div class="cup">
           <div class="cup1" style={{paddingBottom:"50px"}}>
               <img src="images/test trophy.jpeg" width={"100%"}/>

           </div>
           <div class="cup2">
               <h1>SUCCESSFUL TEAMS</h1>
               <table>
                   <tr style={{borderBottom:"3px solid rgb(200,200,7)"}}>
                       <td>1</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}  > <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                       <td>1</td>
                   </tr>

                
                   
                   <tr>
                       <td>2</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}> <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                       <td>1</td>
                   </tr>
               </table>

           </div>

           <div className="cup3" style={{width:"95%", margin:"auto"}}>
           <table style={{paddingTop:"35px"}}>
            <tr style={{backgroundColor:"white"}}>
                <th style={{backgroundColor:"rose"}}>YEAR</th>
                <th style={{width:"300px",color:"green",textAlign:"left"}}>WINNER</th>
                <th style={{textAlign:"left",width:"250px"}}>RUNNER</th> 
                
                <th  style={{textAlign:"left" ,width:"250px"}}>BATSMAN</th>
                <th style={{width:"250px"}}> BOWLER</th>
               
            </tr>
            <tr>
                <td>2019-2021</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>Marnus Labuschagne</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>Ravichandran Ashwin</td>
                
            </tr>
            <tr>
                <td>2021-2023</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>Joe Root</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>Nathen Lyon</td>
                
            </tr>
            
            </table>

      


           </div>
           
       </div>
   </div>
       </>
    );
}

export default Test;