import React from "react";
import "./Service.css";
import pizzaimg from "../Images/pizza.jpg";
import pizza4 from "../Images/pizza4.jpg";
import pizza5 from "../Images/pizza5.jpg";
import pizza6 from "../Images/pizza6.jpg";
const Service = () => {
  return (
    <div>
      <h4 className="menutitle">Our Menu</h4>
      <p className="menucontent">
        Unique wood fired pizzas or be tempted by our
        pasta,antipasta,facaccias,salads and Bruschettha dishes, Relax in
        <br />the friendly ambience as you enjoy the aromas of the woodovens or sit at fresco and soak up the Mildura sunshine
      </p>
      <div className="pizzasection">
      <div className="firstimgsection">
        
        <img src={pizzaimg} className="Img1"></img> 
        <div>
            <h5>Original</h5>
            <p>Tomato sauce,mozzarella &<br/> oregano</p>
            <p className="price">$18.00</p>
            <button className="cartbtn">ADD TO CART</button>
        </div>
        
        </div>
        <div className="firstimgsection">
        
        <img src={pizza4} className="Img1"></img> 
        <div>
            <h5>Salami</h5>
            <p>Tomato sauce,mozzarella <br/>& oregano</p>
            <p className="price">$15.00</p>
            <button className="cartbtn">ADD TO CART</button>
        </div>
        
        </div>
        <div className="firstimgsection">
        
        <img src={pizza5} className="Img1"></img> 
        <div>
            <h5>Cheese</h5>
            <p>Tomato sauce,mozzarella <br/>& oregano</p>
            <p className="price">$15.00</p>
            <button className="cartbtn">ADD TO CART</button>
        </div>
        
        </div>
        <div className="firstimgsection">
        
        <img src={pizza6} className="Img1"></img> 
        <div>
            <h5>Chiken</h5>
            <p>Tomato sauce,mozzarella <br/>& oregano</p>
            <p className="price">$15.00</p>
            <button className="cartbtn">ADD TO CART</button>
        </div>
        
        </div>
        <div className="firstimgsection">
        
        <img src={pizzaimg} className="Img1"></img> 
        <div>
            <h5>Salami</h5>
            <p>Tomato sauce,mozzarella <br/>& oregano</p>
            <p className="price">$15.00</p>
            <button className="cartbtn">ADD TO CART</button>
        </div>
        
        </div>
        <div className="firstimgsection">
        
        <img src={pizzaimg} className="Img1"></img> 
        <div>
            <h5>Salami</h5>
            <p>Tomato sauce,mozzarella <br/>& oregano</p>
            <p className="price">$15.00</p>
            <button className="cartbtn">ADD TO CART</button>
        </div>
        
        </div>
        
        </div>
    </div>
  );
};
export default Service;
