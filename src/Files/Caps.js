import React from "react";
import './Style.css';
import Globalshop from "./GlobalShop";

function Caps(){
    return(
        <>
         <div>
            <Globalshop />
         </div>

         <div class="cap">
        <h1 style={{color:'rgb(3,3,58)'}}>Caps</h1>
    </div>

    <div class="imac">
       <div id="content1" style={{padding:"10px"}} >
       <div>
        <img src="shop/cap1.webp" width="100%" alt=""/>
       </div> 
       <div>
        <p  id="fot" style={{fontFamily:"sans-serif"}}>ICC T20 World Cup All Nations Navy Cap - West Indies & USA</p>    
        <p  id="fot"  style={{fontFamily:"sans-serif" ,fontWeight:'bolder'}} >$73.00 CAD</p>    
       </div>           
       </div>
       <div  id="content1" style={{padding:"10px"}}> 
        <div>
            <img src="shop/cap2.webp" width="100%" alt=""/> 
        </div>  
        <div>
            <p id="fot" style={{fontFamily:"sans-serif"}}>ICC T20 World Cup India Blue Cap</p>  
        <div style={{display:'flex',margin:'auto'}} >
            <p  id="fot" style={{textDecoration:"line-through", paddingRight:"20px"}} >$52.00 CAD</p>
            <p  id="fot"  style={{fontFamily:"sans-serif" ,fontWeight:'bolder'}}>$39.00 CAD</p> 
        </div>  
        </div>
                        
       </div>
       <div  id="content1" style={{padding:"10px"}}>
       <div>
        <img src="shop/cap3.webp" width="100%" alt=""/> 
       </div>
       <div>
        <p  id="fot" style={{fontFamily:"sans-serif"}}>ICC T20 World Cup USA Navy Cap</p>    
        <p  id="fot" style={{fontFamily:"sans-serif" ,fontWeight:'bolder'}}>$27.00 CAD</p>
       </div>                    
       </div>
       <div  id="content1" style={{padding:"10px"}}>
       <div>
        <img src="shop/cap4.webp" width="100%" alt=""/> 
       </div>
       <div>
        <p  id="fot" style={{fontFamily:"sans-serif"}}>ICC T20 World Cup Navy Bolt Cap - West Indies & USA 2024 Edition</p>    
        <p  id="fot" style={{fontFamily:"sans-serif" ,fontWeight:'bolder'}}>$39.00 CAD</p>    
       </div>                
       </div>  
       
       
    </div>

    <div class="imac">
        <div  id="content1">
        <div>
            <img src="shop/cap5.webp" width="100%" alt=""/>
        </div>     
        <div>
            <p id="fot" style={{fontFamily:"sans-serif"}}>ICC T20 World Cup India Blue Orange Cap</p>     
            <p  id="fot" style={{fontFamily:"sans-serif " ,fontWeight:'bolder'}}>$52.00 CAD</p>  
        </div>         
        </div>
        <div  id="content1">
        <div>
            <img src="shop/cap6.webp" width="100%" alt=""/>  
        </div>
        <div>
            <p id="fot" style={{fontFamily:"sans-serif"}}>ICC T20 World Cup Navy Cap - West Indies & USA 2024 Edition</p>
            <div style={{display:'flex',margin:'auto'}}>
               <p  id="fot"style={{textDecoration:"line-through", paddingRight:"20px"}}>$52.00 CAD</p>
               <p  id="fot" style={{fontFamily:"sans-serif" ,fontWeight:'bolder'}}>$39.00 CAD</p> 
           </div>  
        </div>                  
        </div>
        <div  id="content1">
        <div>
            <img src="shop/cap7.webp" width="100%" alt=""/>   
        </div>  
        <div>
            <p id="fot"  style={{fontFamily:"sans-serif"}}>ICC T20 World Cup Zig Zag Mint & Electric Blue Cap - West Indies & USA 2024 Edition</p>
            <div style={{display:'flex',margin:'auto'}}>
               <p  id="fot" style={{textDecoration:"line-through", paddingRight:"20px"}}>$50.00 CAD</p>
               <p  id="fot" style={{fontFamily:"sans-serif" ,fontWeight:'bolder'}}>$38.00 CAD</p> 
           </div>  
        </div>              
        </div>
        <div  id="content1">
         <div>
            <img src="shop/cap8.webp" width="100%" alt=""/>  
         </div> 
        <div>
            <p id="fot" style={{fontFamily:"sans-serif"}}>Dynamic Black & White Blend Cap - ICC Men's T20 World Cup West Indies & USA 2024 Edition</p>
            <div style={{display:'flex',margin:'auto'}}>
               <p  id="fot" style={{textDecoration:"line-through", paddingRight:"20px"}}>$52.00 CAD</p>
               <p  id="fot" style={{fontFamily:"sans-serif",fontWeight:'bolder'}}>$39.00 CAD</p> 
           </div>  
        </div>                  
        </div>  
        
        
     </div>

        </>
    )
}

export default Caps;