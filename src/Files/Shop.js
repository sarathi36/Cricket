import React from "react";
import './Style.css';
import { useEffect } from "react";
import './media.css';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function Shop(){
    useEffect(() => {
        
        document.title = "ICC Men's T20 World Cup 2024"
      }, [])
    return(
        <>
        <div class="shop">
            <div class="shop1" style={{backgroundColor:"rgb(3, 3, 58)"}}>
               <a href="indiashop.html "> <h1>INDIA SHOP</h1>  </a> 
                <p>Click here if you are fan residing **in india** and looking to get your hands on merchandies from the T20 World Cup.</p>
            </div>
            <div class="shop2">
                <img style={{width:"100%"}} src="shop/india shop.png" alt=""/>
            </div>
        </div>
        <div class="shop">
            <div class="shop1" style={{backgroundColor:"rgb(3, 3, 58)"}}>
                <NavLink to="/Globalshop"> <h1>GLOBAL SHOP</h1>     </NavLink>  
                <p>Click here if you are fan residing **outside of india** and looking to get your hands on merchandies from the T20 World Cup.</p>
            </div>
            <div class="shop2">
                <img style={{width:"100%"}} src="shop/global shop.jpeg" alt=""/>
            </div>
        </div>

        <div>
            <Footer />
        </div>
        </>
    );
}

export default Shop;