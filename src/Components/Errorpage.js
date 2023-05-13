import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Errorpage.css";
const Errorpage = () => {
  
  return (
    
    <div className='setStyle2'>
      <h4 className='errorcontent'>Looks like you are lost</h4>
      <p className='errorcontent'>Sorry, this page doesn't exist</p>
     <NavLink to="/"> <button className='gobackbtn'>GO TO HOME</button></NavLink>
{/* <NavLink to="/">Go to Home</NavLink> */}

    </div>
  );
};

export default Errorpage;
