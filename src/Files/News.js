import React from "react";
import './Style.css';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

function News(){
    useEffect(() =>{
        document.title ='International Cricket Council News'
    })
    return(
        <>
         <div class="news">
        <h1>NEWS</h1>
        <div id="team">
             <NavLink to="/News"  > <p>Overview</p> </NavLink> 
             <NavLink to="/CNews"  > <p>World Cup</p></NavLink>
        </div>
    </div> <br style={{width:'80%'}}></br>

    <div id="content">
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/hp.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> Pandya reveals World Cup pain ahead of injury return</p>
                <p>19 March, 2024</p>
            </div>
           
            
        </div>
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/te7.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para"> Where each team stands in the current World Test Championship cycle</p>
                <p>7 April, 2024</p>
            </div>
        </div>
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/koh.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> Kohli closes in: Top ODI ranking within sight for India star</p>
                <p>22 November, 2023</p>
            </div>
        </div>
        
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/rosad.png" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> Rohit Sharma breaks silence for first time since CWC23 Final</p>
                <p>13 December, 2023</p>
            </div>
        </div>
        
    </div>
    

    <div id="content">
        <div id="content1"style={{margin:"auto"}}>
            <div>
                <img  src="player/pat.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> R Ashwin decodes the brilliance of Pat Cummins in the World Cup Final</p>
                <p>24 November, 2023</p>
            </div>
           
            
        </div>
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/buttler.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> Buttler excited about fresh talent as England aim to ...</p>
                <p>2 December, 2023</p>
            </div>
        </div>

        
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/roko.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> Suresh Raina reveals what proved the difference in World Cup final</p>
                <p>21 November, 2023</p>
            </div>
        </div>
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="images/incrowd.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> More history made at World Cup as new record for spectators broken</p>
                <p>21 November, 2023</p>
            </div>
        </div>
    </div>

    <div id="content">
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/te1.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para"> England name squad for first two Tests against West Indies</p>
                <p>5d</p>
            </div>
           
            
        </div>
        
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/te2.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para">India announce international fixtures for home season 2024-25</p>
                <p>20 June, 2024</p>
            </div>
        </div>
        <div id="content1"style={{margin:"auto"}}>
            <div>
                <img  src="player/te3.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para"> West Indies spring top-order surprise in Test squad for England series</p>
                <p>4 June, 2024</p>
            </div>
        </div>
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/te4.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para"> West Indies pacer hails Anderson after England veteran announces retirement </p>
                <p>13 May, 2024</p>
            </div>
        </div>
    </div>
    

    <div id="content">
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/te5.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para">The Test, Season 3: Trailer released of series chronicling Australia's WTC23-win and Ashes</p>
                <p>7 May, 2024</p>
            </div>
           
            
        </div>
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="player/te6.png" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">News</p>
                <p id="para">Sri Lanka, Bangladesh players shuffle as Test best hold top ranking positions</p>
                <p>10 April, 2024</p>
            </div>
        </div>
        
        <div id="content1" style={{margin:"auto"}}>
            <div>
                <img  src="images/ausfinal.jpeg" width="100%" alt=""/>
            </div>
            <div>
                <p id="para1">Cricket World Cup</p>
                <p id="para"> World Cup 2023 smashes broadcast and digital records</p>
                <p>27 December, 2023</p>
            </div>
        </div>
       
    </div>
      <div>
        <Footer />
      </div>
        </>
    )
}

export default News;