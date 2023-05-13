import React from "react";
import backimg from "../Images/backimg.jpg"
import "./Home.css";
const Home=()=>{
    return(
<div id="homecontent">
    {/* <img src={backimg}></img> */}
    <div className="insidehomecontent">
    <h4 className="pl-20">The Best Place To <br/> Satisfy Your Tummy</h4>
<h6 className="hometitle">PIZZA TO FIT ANY TASTE</h6>
<a href="#" className="btn btn-order btn-dark">ORDER NOW</a>
{/* <button id="orderbtn">ORDER</button> */}


    </div>
    {/* <div className="Imagesection">
    <img src={backimg} className="Imagesection"></img>
    
    </div>
 */}

    

</div>



    );
};
export default Home;