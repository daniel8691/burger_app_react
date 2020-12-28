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


    </div>


)

export default buildControls;