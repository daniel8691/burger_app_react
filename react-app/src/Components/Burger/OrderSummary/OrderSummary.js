import React from 'react';

import Aux from '../../../HOC/Aux1';


const orderSummary =(props) => {

    // make list dynamic
const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            // add span tags to make the first letters uppercase
            return <li key = {igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            // <li>Salad:1</li> 
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}

            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    )

};


export default orderSummary;