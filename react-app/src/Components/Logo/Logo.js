import React from 'react';

// import the image to use
import burgerLogo from '../../assets/Images/burger-logo.png'
// import css
import "./Logo.css"

const logo=(props)=>(
    <div className="Logo">
        {/* can't use src="link to location" */}
        <img src= {burgerLogo} alt="myBurger"/>
    </div>

);



export default logo;