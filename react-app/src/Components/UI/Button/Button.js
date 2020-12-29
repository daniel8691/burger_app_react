import React from 'react';

// import css
import "./Button.css"

const button = (props) => (
    // grab a normal button element
    <button 
        className = {`Button ${props.btnType}`}
        onClick={props.clicked}>
        {props.children}
    </button>

);



export default button;
