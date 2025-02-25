import React from "react";
import './Style.css';
import TrophyMain from "./Trophymain";
function Champion(){
    return(
        <>
        <div>
            <TrophyMain />
        </div>
        <div>
       <h1>Champions Trophy</h1>
       <div class="cup">
           <div class="cup1" style={{paddingBottom:"50px"}}>
               <img src="images/champion.jpeg" width={"100%"}/>

           </div>
           <div class="cup2">
               <h1>SUCCESSFUL TEAMS</h1>
               <table>
                   <tr style={{borderBottom:"3px solid rgb(200,200,7)"}}>
                       <td>1</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}  > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                       <td>2</td>
                   </tr>

                
                   
                   <tr>
                       <td>2</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}> <img src="images/india flag.jpg"/>INDIA</td>
                       <td>2</td>
                   </tr>
               </table>

           </div>
            
           <div className="cup3" style={{width:"95%", margin:"auto"}}>

           <table style={{paddingTop:"35px"}}>
            <tr style={{backgroundColor:"white"}}>
                <th style={{backgroundColor:"rose"}}>YEAR</th>
                <th style={{width:"300px",color:"green",textAlign:"left"}}>WINNER</th>
                <th style={{textAlign:"left",width:"250px"}}>RUNNER</th> 
                
                <th  style={{textAlign:"left" ,width:"250px"}}>HOST</th>
                <th style={{width:"250px"}}> SUMMARY</th>
               
            </tr>

            <tr>
                <td>1998</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/ban flag.jpg"/>BANGLADESH</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/sa flag.jpg"/>248/8  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/wi flag.jpg"/>245</td>
                
            </tr>
            <tr>
                <td>2000</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/kenya.jpg"/>KENYA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/nz flag.jpg"/>265/6  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/india flag.jpg"/>264/6</td>
                
            </tr>
            <tr>
                <td>2002</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} ><img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >--</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}> <img src="images/Sri Lanka.jpeg"/>244/5  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/india flag.jpg"/>14/0</td>
                
            </tr>
            <tr>
                <td>2002</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > --</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/Sri Lanka.jpeg"/>244/5  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/india flag.jpg"/>38/1</td>
                
            </tr>
            <tr>
                <td>2004</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/wi flag.jpg"/>217  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/england flag.jpg"/>218/8</td>
                
            </tr>
            <tr>
                <td>2006</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>138  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/wi flag.jpg"/>116/2</td>
                
            </tr>
            <tr>
                <td>2009</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>206/4  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/nz flag.jpg"/>200/9</td>
                
            </tr>
            <tr>
                <td>2013</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/india flag.jpg"/>124/8  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/england flag.jpg"/>129/7</td>
                
            </tr>
            <tr>
                <td>2017</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/paksitan flag.jpg"/>338/4  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/india flag.jpg"/>158</td>
                
            </tr>
            
            </table>
       </div>
       </div>
   </div>
       </>
    );
}

export default Champion;