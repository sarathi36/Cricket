import React from "react";
import './Style.css';
import RankMain from "./RankMain";

function OdiAllrounder(){
    return(
        <>
        <div>
            <RankMain />
        </div>
        <div>
        <h1>MEN'S ODI All-Rounder RANKING</h1>
       <p>Last Update - 19 March 2024</p>
        <table>
            <tr style={{borderBottom:"5px solid rgb(50, 66, 203)"}}>
                <th style={{width:"80px"}}>Pos</th>
                <th style={{width:"120px", textAlign:"left"}}>Team</th>
                <th style={{width:"750px",textAlign:"center"}}>Player</th>
                
                <th style={{width:"100px",textAlign:"right"}}>Rating</th>
               
            </tr>
            <tr id="bat" style={{backgroundColor:"#ddd",height:"80px",borderBottom:"5px solid rgb(50, 66, 203)"}}>
                <td style={{fontFamily:"sans-serif",fontSize:"20px",borderRight:"1px solid black"}}>01 </td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/afghan flag.jpg"/>AFGHANISTAN</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Mohammad <strong style={{fontSize:"25px",color:"black"}}>NABI</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/nabi.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>320</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/ban flag.jpg"/>BANGLADESH</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Shakib <strong style={{fontSize:"20px",color:"black"}}>AL HASAN</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>292</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/zim.jpg"/>ZIMBABWE</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Shikandar <strong style={{fontSize:"20px",color:"black"}}>RAZA</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>288</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/png.png"/>PAPUA NEW GUNIA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Assad <strong style={{fontSize:"20px",color:"black"}}>VALA</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>248</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/afghan flag.jpg"/>AFGHANISTAN</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Rashid <strong style={{fontSize:"20px",color:"black"}}>KHAN</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>239</td>
              
                
            </tr>
        </table>
        </div>
        </>
    )
}

export default OdiAllrounder;