import React from "react";
import './Style.css';
import RankTest from "./RankTest";

function TestAllrounder(){
    return(
        <>
           <div>
            <RankTest />
        </div>
        <div>

       
            <h1>MEN'S TEST ALL-ROUNDER RANKING</h1>
       <p>Last Update - 18 June 2024</p>
        <table>
        <tr style={{borderBottom:"5px solid rgb(4, 69, 209)"}}>
                <th style={{width:"80px"}}>Pos</th>
                <th style={{width:"120px", textAlign:"left"}}>Team</th>
                <th style={{width:"750px",textAlign:"center"}}>Player</th>
                
                <th style={{width:"100px",textAlign:"right"}}>Rating</th>
               
            </tr>
            <tr id="bat" style={{backgroundColor:"#ddd",height:"80px",borderBottom:"5px solid rgb(4, 69, 209)"}}>
                <td style={{fontFamily:"sans-serif",fontSize:"20px",borderRight:"1px solid black"}}>01 </td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/india flag.jpg"/>INDIA</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Ravidra <strong style={{fontSize:"25px",color:"black"}}>JADEJA</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/jadeja.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>444</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Ravichandran <strong style={{fontSize:"20px",color:"black"}}>ASHWIN</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>322</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/ban flag.jpg"/>BANGLADESH</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Shakib <strong style={{fontSize:"20px",color:"black"}}>AL HASAN</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>310</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/england flag.jpg"/>ENGLAND</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Joe <strong style={{fontSize:"20px",color:"black"}}>ROOT</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>282</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/wi flag.jpg"/>WEST INDIES</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Jason <strong style={{fontSize:"20px",color:"black"}}>HOLDER</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>270</td>
              
                
            </tr>
        </table>
        </div>
        </>
    )
}

export default TestAllrounder;