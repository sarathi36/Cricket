import React from "react";
import './Style.css';
import RankTest from "./RankTest";

function TestBat(){
    return(
        <>
           <div>
            <RankTest />
        </div>
        <div>

       
            <h1>MEN'S TEST BATTING RANKING</h1>
       <p>Last Update - 18 June 2024</p>
        <table>
        <tr style={{borderBottom:"5px solid black"}}>
                <th style={{width:"80px"}}>Pos</th>
                <th style={{width:"120px", textAlign:"left"}}>Team</th>
                <th style={{width:"750px",textAlign:"center"}}>Player</th>
                
                <th style={{width:"100px",textAlign:"right"}}>Rating</th>
               
            </tr>
            <tr id="bat" style={{backgroundColor:"#ddd",height:"80px",borderBottom:"5px solid black"}}>
                <td style={{fontFamily:"sans-serif",fontSize:"20px",borderRight:"1px solid black"}}>01 </td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/nz flag.jpg"/>NEW ZEALAND</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Kane <strong style={{fontSize:"25px",color:"black"}}>WILLIAMSON</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/kane.png"/>
    
                       </div>
                    </div> 
                  
               
                 
                  </td>
                <td style={{fontSize:"20px",fontFamily:"sans-serif"}}>859</td>
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>2</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Joe <strong style={{fontSize:"20px",color:"black"}}>ROOT</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>824</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/Paksitan flag.jpg"/>PAKISTAN</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Babar <strong style={{fontSize:"20px",color:"black"}}>AZAM</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>768</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Daryl <strong style={{fontSize:"20px",color:"black"}}>MITCHEL</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>768</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Steven <strong style={{fontSize:"20px",color:"black"}}>SMITH</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>756</td>
              
                
            </tr>
        </table>
        </div>
        </>
    )
}

export default TestBat;