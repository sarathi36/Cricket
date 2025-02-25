import React from "react";
import './Style.css';
import TrophyMain from "./Trophymain";
function Classic(){
    return(
        <>
        <div>
            <TrophyMain />
        </div>
         <div>
        <h1>Classic World Cup</h1>
        <div class="cup">
            <div class="cup1" style={{paddingBottom:"50px"}}>
                <img src="images/World_Cup_2023.jpg.webp" width={"100%"}/>

            </div>
            <div class="cup2">
                <h1>SUCCESSFUL TEAMS</h1>
                <table>
                    <tr style={{borderBottom:"3px solid rgb(200,200,7)"}}>
                        <td>1</td>
                        <td style={{fontFamily:"serif",textAlign:"left"}}  > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                        <td>6</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td style={{fontFamily:"serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                        <td>2</td>
                       
                    </tr>
                    
                    <tr>
                        <td>3</td>
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
                <td>1975</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/wi flag.jpg"/>291/8  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/aus flag.jpg"/>274</td>
                
            </tr>
            <tr>
                <td>1979</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/wi flag.jpg"/>286/9  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/england flag.jpg"/>194</td>
                
            </tr>
            <tr>
                <td>1983</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/wi flag.jpg"/>WEST INDIES</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/india flag.jpg"/>183  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/wi flag.jpg"/>140</td>
                
            </tr>
            <tr>
                <td>1987</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>253/5  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/england flag.jpg"/>246</td>
                
            </tr>
            <tr>
                <td>1992</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/paksitan flag.jpg"/>249/6  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/england flag.jpg"/>227</td>
                
            </tr>
            <tr>
                <td>1996</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/Sri Lanka.jpeg"/>245/3  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/aus flag.jpg"/>241/7</td>
                
            </tr>
            <tr>
                <td>1999</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/paksitan flag.jpg"/>PAKISTAN</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>133/2  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/paksitan flag.jpg"/>132</td>
                
            </tr>
            <tr>
                <td>2003</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/sa flag.jpg"/>SOUTH AFRICA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>359/2  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/india flag.jpg"/>234</td>
                
            </tr>
            <tr>
                <td>2007</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/wi flag.jpg"/>WEST INDIES</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>281/4  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/Sri Lanka.jpeg"/>215/8</td>
                
            </tr>
            <tr>
                <td>2011</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/Sri Lanka.jpeg"/>SRI LANKA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/india flag.jpg"/>277/4  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/Sri Lanka.jpeg"/>274/6</td>
                
            </tr>
            <tr>
                <td>2015</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/aus flag.jpg"/>AUSTRALIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/aus flag.jpg"/>186/3  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/nz flag.jpg"/>183</td>
                
            </tr>
            <tr>
                <td>2019</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/nz flag.jpg"/>NEW ZEALAND</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/england flag.jpg"/>ENGLAND</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/england flag.jpg"/>26  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/nz flag.jpg"/>17</td>
                
            </tr>
            <tr>
                <td>2023</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} ><img src="images/aus flag.jpg"/>AUSTRALIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} >  <img src="images/india flag.jpg"/>INDIA</td>
                 <td style={{fontFamily:"sans-serif",textAlign:"left"}} > <img src="images/india flag.jpg"/>INDIA</td>
                <td style={{textAlign:"left",fontSize:"15px",display:"flex",margin:"auto"}}><img src="images/india flag.jpg"/>240  <strong style={{fontSize:"15px",color:"black"}}>V</strong>  <img src="images/aus flag.jpg"/>241/4</td>
                
            </tr>
            </table>
            </div>
        </div>
    </div>
        </>
    );
}


export default Classic;