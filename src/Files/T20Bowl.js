import React from "react";
import './Style.css';
import RankT20 from "./RankT20";

function T20Bowl(){
    return(
        <>
        <div>
            <RankT20 />
           <div>
        <h1>MEN'S T20 Bowling RANKING</h1>
        </div>
       <p>Last Update - 19 March 2024</p>
        <table>
            <tr style={{borderBottom:"5px solid rgb(5, 186, 210)"}}>
                <th style={{width:"80px"}}>Pos</th>
                <th style={{width:"120px", textAlign:"left"}}>Team</th>
                <th style={{width:"750px",textAlign:"center"}}>Player</th>
                
                <th style={{width:"100px",textAlign:"right"}}>Rating</th>
               
            </tr>
            <tr id="bat" style={{backgroundColor:"#ddd",height:"80px",borderBottom:"5px solid  rgb(5, 186, 210)"}}>
                <td style={{fontFamily:"sans-serif",fontSize:"20px",borderRight:"1px solid black"}}>01 </td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/england flag.jpg"/>ENGLAND</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Adhil <strong style={{fontSize:"25px",color:"black"}}>RASID</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/rashid.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>719</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/afghan flag.jpg"/>AFGHANISTAN</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Rasid <strong style={{fontSize:"20px",color:"black"}}>KHAN</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>681</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Wanindhu <strong style={{fontSize:"20px",color:"black"}}>HASARANGA</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>674</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Josh <strong style={{fontSize:"20px",color:"black"}}>HAZLEWOOD</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>662</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/wi flag.jpg"/>WEST INDIES</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Akeal <strong style={{fontSize:"20px",color:"black"}}>HOSAIN</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>659</td>
              
                
            </tr>
        </table>
        </div>
        </>
    )
}

export default T20Bowl;