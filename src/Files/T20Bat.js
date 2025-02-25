import React from "react";
import './Style.css';
import RankT20 from "./RankT20";
import RankMain from "./RankMain";

function T20Bat(){
    return(
        <>
         <div>
            <RankT20 />
        </div>
        <h1>MEN'S T20 BATTING RANKING</h1>
       <p>Last Update - 19 March 2024</p>
        <table>
            <tr style={{borderBottom:"5px solid yellowgreen"}}>
                <th style={{width:"80px"}}>Pos</th>
                <th style={{width:"120px", textAlign:"left"}}>Team</th>
                <th style={{width:"750px",textAlign:"center"}}>Player</th>
                
                <th style={{width:"100px",textAlign:"right"}}>Rating</th>
               
            </tr>
            <tr id="bat" style={{backgroundColor:"#ddd",height:"80px",borderBottom:"5px solid yellowgreen"}}>
                <td style={{fontFamily:"sans-serif",fontSize:"20px",borderRight:"1px solid black"}}>01 </td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"20px"}} > <img style={{height:"20px",width:"30px"}}  src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td>
                  <div class="bab">
                    <div class="babor">
                       <p>Travis <strong style={{fontSize:"25px",color:"black"}}>HEAD</strong></p>
    
                       </div>
                     <div class="babor1">
                        <img src="player/thead.png"/>
    
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
                         <p>Suryakumar <strong style={{fontSize:"20px",color:"black"}}>YADAV</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>842</td>
                
                
            </tr>
            <tr >
                <td style={{fontSize:"17px"}}>3</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td  style={{textAlign:"center",marginLeft:"10%"}}>
                  
                      <div class="gill1">
                         <p>Phil <strong style={{fontSize:"20px",color:"black"}}>SALT</strong></p>
      
                         </div>                     
                    </td>
                <td style={{fontSize:"17px"}}>816</td>
                
                    
               
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>4</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >   <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Babor <strong style={{fontSize:"20px",color:"black"}}>AZAM</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>755</td>
              
                
            </tr>
            <tr>
                <td style={{fontSize:"17px"}}>5</td>
                <td style={{fontFamily:"sans-serif",textAlign:"left",fontSize:"17px"}} >  <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                <td  style={{textAlign:"center",marginLeft:"10%"}}>
                 
                     <div class="gill1">
                        <p>Mohammad <strong style={{fontSize:"20px",color:"black"}}>RIZWAN</strong></p>
     
                        </div>                     
                   </td>
               <td style={{fontSize:"17px"}}>746</td>
              
                
            </tr>
        </table>
        

        </>
    )
}

export default T20Bat;