// build burger builder component

import React, {Component} from 'react';
import Aux from '../HOC/Aux1';
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls';

// typically we use all capital letters for constants you want to use a global constants
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BestBurger extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        // careful that this is an object not any array (cannot map() through)
        ingredients: {
            salad:0,
            bacon:0,
            cheese: 0,
            meat: 0
        },
        // add a totla price property to the ingredient
        totalPrice: 4
    }

    // create a handler that allow users to add ingredients on click (on the "More" button)
    addIngredientHandler = (type) => {
        // find the old ingredient count is before adding new ingredients
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        // update the ingredients and update the price
        this.setState({
            totalPrice:newPrice,
            ingredients: updatedIngredients
        });
        
        // console.log(oldCount);
    }

    // create a handler that allow users to add ingredients on click on the "Less" button
    removeIngredientHandler = (type) => {
        
    }




    render() {
        return(
            <Aux>
                {/* pass the list of ingredients into the Burger tag */}
                <Burger ingredients={this.state.ingredients} />
                {/* <div>Burger</div> */}
                <BuildControls 
                // we will then add this property name (ingredientAdded) into the BuildControls.js
                    ingredientAdded = {this.addIngredientHandler} />

            </Aux>

        );
    }
}

export default BestBurger;
