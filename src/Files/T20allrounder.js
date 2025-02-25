import React from "react";
import './Style.css';
import RankT20 from "./RankT20";

function T20all(){
    return(
        <>
        <div>
            <RankT20 />
        </div>
        <h1>MEN'S T20 All-Rounder RANKING</h1>
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
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Wanindhu <strong style={{fontSize:"25px",color:"black"}}>HASARANGA</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/hasarangaa.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>222</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/afghan flag.jpg"/>AFGHANISTAN</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Mohammad <strong style={{fontSize:"20px",color:"black"}}>NABI</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>214</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Hardik <strong style={{fontSize:"20px",color:"black"}}>PANDYA</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>213</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Marcus <strong style={{fontSize:"20px",color:"black"}}>STOINIS</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>211</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/zim.jpg"/>ZIMBABWE</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Shikandar <strong style={{fontSize:"20px",color:"black"}}>RAZA</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>210</td>
              
                
            </tr>
        </table>
        


        </>
    )
}

export default T20all;