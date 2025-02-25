import React from "react";
import './Style.css';
import './media.css';
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Champion from "./Champion";
import RankMain from "./RankMain";
import Footer from "./Footer";

function Ranking(){
    useEffect(() =>{
        document.title = "ICC Men's Cricket Ranking Overview"
    })
    return(
        <>
        
    <div>
        <h1>MEN'S RANKING</h1>
    </div>
<div class="group" style={{paddingTop:"20px",paddingBottom:"60px" , width:'70%',margin:'auto'}}>

<ul style={{width:'70%',margin:'auto',padding:'15px'}} >
    <div style={{width:'60%',margin:'auto'}}>
    <li style={{backgroundColor:"#ddd" ,padding:'15px',fontSize:"45px"}}> <NavLink to="/RankMain">  ODI</NavLink></li>
    <li style={{backgroundColor:"#ddd" ,padding:'15px',fontSize:"45px"}}> <NavLink to="/RankTest">  TEST</NavLink></li>
    <li style={{backgroundColor:"#ddd" ,padding:'15px',fontSize:"45px"}}> <NavLink to="/RankT20">  T20</NavLink></li>
    </div>
    
    
    
   
   
</ul>

</div>


        <div>
        <h1>MEN'S TEAM RANKING</h1>
    </div>
    <div class="tea">
        <div class="tea1">
                                                     
            <table id="table">
                <tr style={{borderBottom:"2px solid black"}} >
                    <th style={{margin:"auto",textAlign:"center",width:"20%",color:"rgb(69, 64, 64)"}}>Test </th>
                    <th style={{margin:"auto",textAlign:"center",width:"60%"}}>Team Ranking </th>

                </tr>
                    
                   
            <tr id="aus" style={{backgroundColor:"#ddd"}}  >
                    <td style={{fontFamily:"sans-serif",borderRight:"1px solid black"}}>01 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"25px"}} > <img style={{height:"30px",width:"40px",paddingRight:"5px"}} src="images/aus flag.jpg"/>AUSTRALIA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"30px"}}>124</td>
                   
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>02 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}}  src="images/india flag.jpg"/>INDIA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>120</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>03 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/england flag.jpg"/>ENGLAND</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>105</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>04 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>103</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>05 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/nz flag.jpg"/>NEW ZEALAND</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>96</td>
                </tr> 
               
                

            </table>
            </div>

            <div class="tea2">
                                                     
            <table id="table">
                <tr style={{borderBottom:"2px solid black"}} >
                    <th style={{margin:"auto",textAlign:"center",width:"20%",color:"rgb(69, 64, 64)"}}>ODI </th>
                    <th style={{margin:"auto",textAlign:"center",width:"60%"}}>Team Ranking </th>

                </tr>
                    
                   
            <tr id="aus" style={{backgroundColor:"#ddd"}}  >
                    <td style={{fontFamily:"sans-serif",borderRight:"1px solid black"}}>01 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"30px"}} > <img style={{height:"30px",width:"40px",paddingRight:"5px"}}src="images/india flag.jpg"/>INDIA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"30px"}}>122</td>
                   
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>02 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}}  src="images/aus flag.jpg"/>AUSTRALIA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>116</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>03 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>112</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>04 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/paksitan flag.jpg"/> PAKISTAN</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>106</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>05 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/nz flag.jpg"/>NEW ZEALAND</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>101</td>
                </tr> 
               
                

            </table>
            </div>

            <div class="tea3">
                                                     
            <table id="table">
                <tr style={{borderBottom:"2px solid black"}} >
                    <th style={{margin:"auto",textAlign:"center",width:"20%",color:"rgb(69, 64, 64)"}}>T20 </th>
                    <th style={{margin:"auto",textAlign:"center",width:"60%"}}>Team Ranking </th>

                </tr>
                    
                   
            <tr id="aus" style={{backgroundColor:"#ddd"}}  >
                    <td style={{fontFamily:"sans-serif",borderRight:"1px solid black"}}>01 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"30px"}} > <img style={{height:"30px",width:"40px",paddingRight:"5px"}} src="images/india flag.jpg"/>INDIA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"30px"}}>266</td>
                   
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>02 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}}  src="images/aus flag.jpg"/>AUSTRALIA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>256</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>03 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/england flag.jpg"/>ENGLAND</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>254</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>04 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/wi flag.jpg"/>WEST INDIES</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>252</td>
                </tr>
                <tr>
                    <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>05 </td>
                    <td style={{fontFamily:"sans-serif",textAlign:"left",padding:"15px",fontSize:"20px"}} > <img style={{height:"20px",width:"30px",paddingRight:"5px"}} src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                   <td style={{fontFamily:"sans-serif",fontSize:"20px"}}>251</td>
                </tr> 
               
                

            </table>
            </div>

            
    </div> 

    <div>
        <Footer />
    </div>
   

       
        </>
    );
}


export default Ranking;