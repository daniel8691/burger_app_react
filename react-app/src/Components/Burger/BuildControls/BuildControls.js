import React from 'react';
import "./BuildControls.css"
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]


const buildControls = (props) => (
    // give styping with div tags
    <div className = "BuildControls">
        {/* use the toFixed() method to round to two decimal places */}
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {/* create a loop */}
        {controls.map(ctrl => (
            // console.log(ctrl.label);
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added = {() => props.ingredientAdded(ctrl.type)}
            removed = {() => props.ingredientRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}  />
        ))}
        {/* create a checkout button */}
        <button className = "OrderButton"
        disabled={!props.purchasable}
        onClick = {props.ordered}>ORDER NOW</button>


    </div>


)

export default buildControls;