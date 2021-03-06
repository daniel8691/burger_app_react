import React from 'react';

import Aux from '../../../HOC/Aux1';

import Button from "../../UI/Button/Button"

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
            {/* round 2 two decimal places */}
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            {/* for the Button tags, we need to set the two properties defined in Button.js ("clicked" and 'btnType') */}
            <Button btnType = "Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = "Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )

};


export default orderSummary;