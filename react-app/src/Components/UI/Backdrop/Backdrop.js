import React from 'react';

import './Backdrop.css'

// create a functional component
const Backdrop = (props) => (
    // ternary expression (the ? mark)
    // return div, if not, return null (nothing is rendered)
    props.show ? <div className={"Backdrop"} onClick={props.clicked}></div> : null

);





export default Backdrop;