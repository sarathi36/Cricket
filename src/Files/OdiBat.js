import React from "react";
import './Style.css';
import './media.css';
import RankMain from "./RankMain";

function OdiBat(){
    return(
        <>
        <div>
            <RankMain />
        </div>
        <div>
        <h1>MEN'S ODI BATTING RANKING</h1>
       <p>Last Update - 19 March 2024</p>
        <table>
            <tr style={{borderBottom:"5px solid rgb(21,255,0"}}>
                <th style={{width:"80px"}}>Pos</th>
                <th style={{width:"120px", textAlign:"left"}}>Team</th>
                <th style={{width:"750px",textAlign:"center"}}>Player</th>
                
                <th style={{width:"100px",textAlign:"right"}}>Rating</th>
               
            </tr>
            <tr id="bat" style={{backgroundColor:"#ddd",height:"80px",borderBottom:"5px solid rgb(21,255,0)"}}>
                <td style={{fontFamily:"sans-serif",fontSize:"20px",borderRight:"1px solid black"}}>01 </td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/paksitan flag.jpg"/>PAKISTAN</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Babar <strong style={{fontSize:"25px",color:"black"}}>AZAM</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/bab.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>824</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Shubman <strong style={{fontSize:"20px",color:"black"}}>GILL</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>801</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Virat <strong style={{fontSize:"20px",color:"black"}}>KOHLI</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>768</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Rohit <strong style={{fontSize:"20px",color:"black"}}>SHARMA</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>746</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/ireland flag.png"/>IRELAND</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Harry <strong style={{fontSize:"20px",color:"black"}}>TECTOR</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>746</td>
              
                
            </tr>
        </table>
        </div>
        </>
    )
}

export default OdiBat;