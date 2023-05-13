import React, { useState } from "react";
import "./Navbar.css";
import pizza1 from "../Images/pizza1.jpg";
import { NavLink } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import AddtoCart from "./AddtoCart";


const Navbar = () => {
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState([]);


  return (
    // <div className='container-fluid nav_bg'>
    //   <div className='row'>
    //     <div className='col-10 mx-auto'>
    <>
      
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="">
            <img src={pizza1} id="pizzaimg" className="App-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Pizza</a></li>
            <li><a className="dropdown-item" href="#">Burger</a></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
              {/* <li><a className="dropdown-item" href="#">Sandwitch</a></li>
          </ul>
        </li>  */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  MENU
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link">
                  Admin Login
                </NavLink>
              </li>
              {/* <li className="nav-item"> */}
                {/* <NavLink className="nav-link"><i className="fa fa-shopping-cart me-auto"></i></NavLink> */}
                <button
                  className="btn shopping-cart-btn"
                  onClick={()=> setCartVisible(true)}
                >
                  
             <FaShoppingCart size={24} className="carticon"/>
                </button>
              {/* </li> */}

              <li className="nav-item">
                <NavLink className="nav-link">
                  <button className="olbtn">ONLINE ORDER</button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* // </div> */}
      {/* // </div>
      </div> */}
    </>
  );
};

export default Navbar;
