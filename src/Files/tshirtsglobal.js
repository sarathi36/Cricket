import React  from "react";
import './Style.css';
import Globalshop from "./GlobalShop";

function GlobalTshirt(){
    return(
        <>
        <div>
            <Globalshop />
        </div>

<div class="cap">
        <h1 style={{color:'rgb(3,3,58)'}}>T-Shirts</h1>
    </div>

    <div class="imac">

       <div id="content1" style={{padding:'10px'}}>
        <div>
            <img src="shop/t1.webp" width="100%" alt=""/> 
        </div>
        <div>
            <p id="fot" style={{fontFamily:'sans-serif'}}>USA ICC Men's T20 World Cup Official Navy Team T-shirt</p>    
            <div style={{display:'flex',margin:'auto'}} >
                <p id="fot" style={{textDecoration:"line-through", paddingRight:"20px"}}>$50.00 CAD</p>
                <p id="fot"style={{fontFamily:'sans-serif'}} >$25.00 CAD</p> 
            </div>   
        </div>
       
                    
       </div>
       <div id="content1"style={{padding:'10px'}}> 
        <div>
            <img src="shop/t2.webp" width="100%" alt=""/>   
        </div>
        <div>
            <p id="fot" style={{fontFamily:'sans-serif'}}>India ICC Men's T20 World Cup Official Blue Team T-shirt</p>           
            <p id="fot" style={{fontFamily:'sans-serif'}}>$64.00 CAD</p> 
        </div>
        
        
        
                        
       </div>
       <div id="content1" style={{padding:'10px'}}>
        <div>
            <img src="shop/t3.webp" width="100%" alt=""/> 
        </div>
        <div>
            <p id="fot" style={{fontFamily:'sans-serif'}}>Official Adidas Team India Cricket T20 International Jersey</p>    
            <p id="fot" style={{fontFamily:'sans-serif'}}>$181.00 CAD</p>      
        </div>
                      
       </div>
       <div id="content1" style={{padding:'10px'}}>
        <div>
            <img src="shop/t4.webp" width="100%" alt=""/> 
        </div>
        <div>
            
        <p id="fot" style={{fontFamily:'sans-serif'}}>ICC Men's T20 World Cup West Indies & USA 2024 Official Logo Navy T-shirt</p>    
        <div style={{display:'flex',margin:'auto'}} >
            <p id="fot" style={{textDecoration:"line-through", paddingRight:"20px"}}>$50.00 CAD</p>
            <p  id="fot" style={{fontFamily:'sans-serif'}} >$38.00 CAD</p> 
        </div>    

        </div>
                      
       </div>  
       
       
    </div>

    <div class="imac">
        <div id="content1"  style={{padding:'10px'}}>
            <div>
                <img src="shop/t5.webp" width="100%" alt=""/>  
            </div>
            <div>
                <p id="fot" style={{fontFamily:'sans-serif'}}>ICC Men's T20 World Cup West Indies & USA 2024 All Nations White T-shirt</p>     
                <div style={{display:'flex',margin:'auto'}} >
                   <p  id="fot" style={{textDecoration:"line-through", paddingRight:"20px"}}>$50.00 CAD</p>
                   <p  id="fot" style={{fontFamily:'sans-serif'}}>$38.00 CAD</p> 
               </div>   
            </div>
           
                
        </div>

        <div id="content1"  style={{padding:'10px'}}>
            <div>
                <img src="shop/t6.webp" width="100%" alt=""/>  
            </div>
            <div>
                <p id="fot" style={{fontFamily:'sans-serif'}}>ICC Men's T20 World Cup West Indies & USA 2024 All Nations Navy T-shirt</p>
                <div style={{display:'flex',margin:'auto'}} >
            <p  id="fot" style={{fontFamily:'sans-serif'}}>$64.00 CAD</p>
            <p  id="fot" style={{fontFamily:'sans-serif'}}>$49.00 CAD</p> 
        </div>
            </div>
        
                             
        </div>

        <div id="content1"  style={{padding:'10px'}}>
            <div>
                <img src="shop/t7.webp" width="100%" alt=""/>     
            </div>
            <div>
                <p  id="fot"  style={{fontFamily:'sans-serif'}}>ICC T20 India Cricket Country Jersey Blue T-shirt</p>      
            <p   id="fot" style={{fontFamily:'sans-serif'}}>$64.00 CAD</p> 
            </div>
         
        
                     
        </div>

        <div id="content1"  style={{padding:'10px'}}>
            <div>
                <img src="shop/t8.webp" width="100%" alt=""/> 
            </div>
            <div>
                <p  id="fot" style={{fontFamily:'sans-serif'}}>ICC T20 India Cricket Player Flag Art White T-shirt</p>
         
                <p  id="fot" style={{fontFamily:'sans-serif'}}>$64.00 CAD</p> 
            </div>
           
        
                       
     </div>  
        
        
     </div>


        </>
    )
}

export default GlobalTshirt;