import React from "react";
import './Style.css';
import TrophyMain from "./Trophymain";
function T20(){
    return(
        <>
        <div>
            <TrophyMain />
        </div>
        <div>
       <h1>T20 World Cup </h1>
       <div class="cup">
           <div class="cup1"  style={{paddingBottom:"50px"}}>
               <img src="images/t20 cup.webp" width={"100%"}/>

           </div>
           <div class="cup2">
               <h1>SUCCESSFUL TEAMS</h1>
               <table>
                   <tr style={{borderBottom:"3px solid rgb(200,200,7)"}}>
                       <td>1</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}  > <img src="images/england flag.jpg"/>ENGLAND</td>
                       <td>2</td>
                   </tr>

                
                   
                   <tr>
                       <td>2</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}> <img src="images/india flag.jpg"/>INDIA</td>
                       <td>2</td>
                   </tr>

                   <tr>
                       <td>3</td>
                       <td style={{fontFamily:"serif",textAlign:"left"}}> <img src="images/wi flag.jpg"/>WEST INDIES</td>
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
                <td>2007</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/india flag.jpg"/>157/5  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/paksitan flag.jpg"/>152</td>
                
            </tr>
            <tr>
                <td>2009</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/paksitan flag.jpg"/>139/2 <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/Sri Lanka.jpeg"/>138/6</td>
                
            </tr>
            <tr>
                <td>2010</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/england flag.jpg"/>148/3  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/aus flag.jpg"/>147/6</td>
                
            </tr>
            <tr>
                <td>2012</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/wi flag.jpg"/>137/6  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/Sri Lanka.jpeg"/>101</td>
                
            </tr>
            <tr>
                <td>2014</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/ban flag.jpg"/>BANGLADESH</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/Sri Lanka.jpeg"/>134/4  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/india flag.jpg"/>130</td>
                
            </tr>
            <tr>
                <td>2016</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/wi flag.jpg"/>155/9  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/england flag.jpg"/>161/6</td>
                
            </tr>
            <tr>
                <td>2021</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/oman.jpg"/>OMAN</td>
              <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>172/2  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/nz flag.jpg"/>173/2</td>
                
            </tr>
            <tr>
                <td>2022</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/england flag.jpg"/>137/8  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/paksitan flag.jpg"/>138/5</td>
                
            </tr>
            <tr>
                <td>2024</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/wi flag.jpg"/>WEST INDIES</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/india flag.jpg"/>176/7  <strong style={{fontSize:"15px",color:"black"}}>V</strong> <img src="images/sa flag.jpg"/>169/8</td>
                
            </tr>

            </table>
            </div>
       </div>
   </div>
       </>
    );
}

export default T20;