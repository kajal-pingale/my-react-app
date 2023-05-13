import React from "react";
import pizzaimg from "../Images/pizza.jpg";

import "./About.css";
import AboutusContent from "./AboutusContent";

function About() {
  return (
    <div className="containe">
      <h4 className="line">About Us</h4>
      <p id="content">
        Pizza is a beloved beverage enjoyed by millions worldwide for it's bold
        flavor, rich aroma,and comforting warmth
      </p>

      <div className="section">
        <img src={pizzaimg} className="Image" />
        <div className="first-section">
          <h5 className="firstsectiontitle">PIZZA TO FIT ANY TASTE</h5>
          <p className="first-section-content">
            {/* Pizza is a dish of Italian origin consisting of a <br/>usually round, flat base
            of leavened wheat-based <br/>dough topped with tomatoes, cheese, and
            often various <br/>other ingredients (such as various types of sausage,
            anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.),
            which is then baked at a high temperature, traditionally in a
            wood-fired oven. */}
<AboutusContent/>
          </p>
          {/* <button type="button" className="readbtn">
            Read More
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default About;
