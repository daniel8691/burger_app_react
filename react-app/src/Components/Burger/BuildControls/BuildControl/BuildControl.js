import React from 'react';
import "./BuildControl.css"


const buildControl = (props) => (
    <div className = "BuildControl">
        {/* for the text to add later */}
        {/* props.(whatever name you want) */}
        <div className="Label">{props.label}</div>
        {/* create a button to remove an ingredient */}
        <button className="Less" onClick={props.removed} disabled = {props.disabled}>Less</button>
        {/* create one to ADD ingredient */}
        <button className = "More" onClick={props.added}>More</button>
        )
    </div>
);


export default buildControl;