import React from "react";
import './Style.css';
import NavBar from "../Navbar";
import { NavLink } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Iframe from 'react-iframe';
import {iframe_a} from 'react-iframe';
import Home from "./home";
import { useEffect } from "react";
import Navbar2 from "./Navbar2";
import Classic from "./Classic";
import Champion from "./Champion";
import TrophyMain from "./Trophymain";
import Footer from "./Footer";


function Trophy(){
    useEffect(() =>{
        document.title = "International Cricket Council Trophy Lists"
    })
   
    return(
        <>
        
       <div>
        <TrophyMain />
       </div>
   
        <div className="trophy">
            <h1>ICC TOURNAMENT TROPHYS</h1>

            <div className="high">
                <h1>MOST ICC TROPHYS</h1>
                <table  style={{
                    width:"80%",
                    margin:"auto",

                }}>
                    <tr style={{backgroundColor:"#ddd", borderBottom: "5px solid yellow ", paddingBottom: "20px" }}>
                        <th style={{width:"100px", color:"black"}}>No</th>
                        <th  style={{width:"700px", textAlign:"left"}}>Team</th>
                        <th style={{width:"200px"}}>Trophys</th>
                    </tr>
                    <tr id="first" style={{backgroundColor:"#ddd", borderBottom: "5px solid yellow", paddingBottom: "20px" }}>
                        <td style={{textAlign:"center"}}>    1</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"25px",width:"60px", height:"35px",margin:"auto"}} src="images/aus flag.jpg" width={"100%"} alt=""/> AUSTRALIA</td>
                        <td style={{textAlign:"center"}}>10</td> 
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>2</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/india flag.jpg"  width={"100%"} alt=""/> INDIA</td>
                        <td style={{textAlign:"center"}}>6</td>
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>3</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/wi flag.jpg"  width={"100%"} alt=""/> WEST INDIES</td>
                        <td style={{textAlign:"center"}}>5</td>
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>4</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/england flag.jpg"  width={"100%"} alt=""/> ENGLAND</td>
                        <td style={{textAlign:"center"}}>3</td>
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>5</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/paksitan flag.jpg"  width={"100%"} alt=""/> PAKISTAN</td>
                        <td style={{textAlign:"center"}}>3</td>
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>6</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/Sri Lanka.jpeg"  width={"100%"} alt=""/> SRI LANKA</td>
                        <td style={{textAlign:"center"}}>3</td>
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>7</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/nz flag.jpg"  width={"100%"} alt=""/> NEW ZEALAND</td>
                        <td style={{textAlign:"center"}}>2</td>
                    </tr>
                    <tr style={{textAlign:"left"}}>
                        <td  style={{textAlign:"center"}}>8</td>
                        <td style={{paddingRight:"15px",float:"left"}}> <img style={{paddingRight:"20px",width:"60px", height:"35px"}}  src="images/sa flag.jpg"  width={"100%"}  alt=""/>SOUTH AFRICA</td>
                        <td style={{textAlign:"center"}}>1</td>
                    </tr>
                </table>
            </div> <br style={{paddingBottom:"300px"}}></br>
            
            
           
        </div>
        <div>
            <Footer />
        </div>
        
        </>
    );
}


export default Trophy;