import React from "react";
import './Style.css';
import Footer from "./Footer";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        
        document.title = "International Cricket Councill Website"
      }, [])
    return(
        
        <> 
        <style>
          
        </style>
         <div>
           {/*<div className="top">
            <div className="logo">
                <a href="index.html"><img src="images/icc-white-logo.svg" alt=""/></a>
            </div>
            <div className="head">
                <ul>
                    <li style={{fontSize:"20px"}} ><a href="match.html"> Matches </a></li>
                    <li style={{fontSize:"20px"}} ><a href="shop.html"> Shop </a></li>
                    <li style={{fontSize:"20px"}} > <a href="table.html"> Ranking </a></li>
                    <li style={{fontSize:"20px"}} ><a href="news.html"> News </a></li>
                    <li style={{fontSize:"20px"}} ><a href="team.html"> Teams </a></li>
                    <li style={{fontSize:"20px"}} ><a href="awards.html"> Awards </a></li>
                    <li style={{fontSize:"20px"}} ><a href="<Trophy />"> Trophys </a></li>
                </ul>
            </div>
            </div> */} 
            

            <div className="body" style={{backgroundImage: 'URL("images/india final.jpeg")'}}>                                     
          
               <div class="text">
                <h1>ICC MEN'S T20 WORLDCUP 2024</h1>
               
                <h1 id="hea" style={{fontFamily:"sans-serif",fontSize:"60px"}} >Legends lead the way as tributes pour in for India's World Cup triumph </h1>
               
                </div>
            </div>        
        </div>
        
        <div className="title">
            <h1 style={{paddingBottom:'65px'}}>TOP STORIES</h1>
        </div>
      
        <div className="video">                                    
            <div id="video1">
                <a href=""><img style={{width:"100%"}}  src="player/rohit.jpeg"/> </a>
               

            </div>
           
            <div id="video1">
                <a href=""><img  style={{width:"100%"}}  src="player/vii.jpeg"/> </a>
               
            </div>
            <div id="video1">
                <a href=""><img  style={{width:"100%"}} src="player/markram.jpeg"/> </a>

            </div>
           


           
        </div>

        <footer>
        <Footer />
        </footer>
        </>
       
    );
}

export default Home;
 