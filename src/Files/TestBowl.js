import React  from "react";
import './Style.css';
import RankTest from "./RankTest";

function TestBowl(){
    return(
        <>
        <div>
            <RankTest />
        </div>
        <div>

       
            <h1>MEN'S TEST BOWLING RANKING</h1>
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
                       <p>Ravichandran <strong style={{fontSize:"25px",color:"black"}}>ASHWIN</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/ash.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>870</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Josh <strong style={{fontSize:"20px",color:"black"}}>HAZLEWOOD</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>847</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Jasprit <strong style={{fontSize:"20px",color:"black"}}>BUMRAH</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>847</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Kagiso <strong style={{fontSize:"20px",color:"black"}}>RABADA</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>834</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Pat <strong style={{fontSize:"20px",color:"black"}}>CUMMINS</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>820</td>
              
                
            </tr>
        </table>
        </div>
        </>
    )
}


export default TestBowl;