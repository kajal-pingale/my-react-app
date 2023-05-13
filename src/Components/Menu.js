import React from "react";
import "./Service.css";
// import pizzaimg from "../Images/pizza.jpg";
// import pizza4 from "../Images/pizza4.jpg";
// import pizza5 from "../Images/pizza5.jpg";
// import pizza6 from "../Images/pizza6.jpg";
import "./Service.css";
import RatingStars from "./RatingStars";

const Menu = (props) => {

  return (
    <div>
      <h4 className="menutitle">Our Menu</h4>
      <p className="menucontent">
        Unique wood fired pizzas or be tempted by our
        pasta,antipasta,facaccias,salads and Bruschettha dishes, Relax in
        <br />the friendly ambience as you enjoy the aromas of the woodovens or sit at fresco and soak up the Mildura sunshine
      </p>
      
      {/* <div className="pizzasection"> */}
      <div className="section1">
        {props.product.map((product)=>{
      return (
        // <div className="pizzasection">
      <div className="firstimgsection" key={product.id}>
        
        <img src={product.image} alt={product.image} className="Img1"></img> 
        <div>
            <h5 className="titlename">{product.title}</h5>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <RatingStars rating={product.rating}/>
            <button className="cartbtn">{product.button}</button>
        </div>
        
        </div>
        // </div>
      )
    
        })}
        
        </div>
        
    
        
    </div>
  );
};
export default Menu;
