import React from "react";
import './Style.css';
import './media.css';
import Footer from "./Footer";
import { useEffect } from "react";

function Team(){
    useEffect(() =>{
        document.title ="International Cricket Council Teams"
    })
    return(
        <>
        <div class="team">
            <div class="team1" style={{backgroundImage:'url(images/blue.jpg)'}}>
                <img src="images/af.png"/>
                <h1 style={{fontSize:"30px",color:"white"}}>AFGHANISTAN</h1>
                
                <a href=""> <button>TEAM PROFILE</button> </a>
            </div>
            <div class="team1" style={{backgroundImage:'url(images/blue.jpg)'}}>
                <img src="images/aus.png"/>
                <h1 style={{fontSize:"30px",color:"white"}}>AUSTRALIA</h1>
               
                <a href=""> <button>TEAM PROFILE</button> </a>
                
            </div>
            <div class="team1" style={{backgroundImage:'url(images/blue.jpg)'}}>
                <img src="images/ban.png"/>
                <h1 style={{fontSize:"30px",color:"white"}}>BANGLADESH</h1>
              
                <a href=""> <button>TEAM PROFILE</button> </a>
                
            </div>
            <div class="team1" style={{backgroundImage:'url(images/blue.jpg)'}}>
                <img src="images/en.png"/>
                <h1 style={{fontSize:"30px",color:"white"}}>ENGLAND</h1>
               
                <a href=""> <button>TEAM PROFILE</button> </a>
                
            </div>
         </div>
            <div class="team">
            <div class="team1" style={{backgroundImage:'url(images/blue.jpg)'}}>
                <img src="images/in.png"/>
                <h1 style={{margin:"auto",textAlign:"center",fontSize:"30px",color:"white"}}>INDIA</h1>
               
                <a href="india.html"> <button>TEAM PROFILE</button> </a>
                </div>
                <div class="team1" style={{backgroundImage:'url(images/blue.jpg)'}}>
                    <img src="images/ire.png"/>
                    <h1 style={{fontSize:"30px",color:"white"}}>IRELAND</h1>
                   
                    <a href=""> <button>TEAM PROFILE</button> </a>
                    
                </div>
                <div class="team1"style={{backgroundImage:'url(images/blue.jpg)'}}>
                    <img  src="images/nz.png"/>
                    <h1 style={{fontSize:"30px",color:"white"}}>NEW ZEALAND</h1>
                   
                    <a href=""> <button>TEAM PROFILE</button> </a>
                    
                </div>
                <div class="team1"style={{backgroundImage:'url(images/blue.jpg)'}}>
                    <img src="images/pak.png"/>
                    <h1 style={{fontSize:"30px",color:"white"}}>PAKISTAN</h1>
                 
                    <a href=""> <button>TEAM PROFILE</button> </a>
                    
                </div>
            </div>
           
          <div>
            <Footer />
          </div>
            
        </>
    );
}


export default Team;