import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
    // extract keys of object and gives you an array of the keys
    const transformedIngredients = Object.keys(props.ingredients)
        // create a function called ingredient keys
        .map(igKey => {        
        // get an array of the number of ingredients we have
        // use the "_" to indicate a blank, we only want the index of the element
        return ([...Array(props.ingredients[igKey])]).map((_,i) => {
            console.log(igKey + i)
            // igKey is the things like "salad" and the i is simply 1,2,3 and so on
            return <BurgerIngredient key = {igKey + i} type = {igKey} /> // right now we have an array of two elements
        })
    }).reduce((arr,el) => {
        
        // need to use the reduce method to make array length 0 if no ingredients are selected
        // return the updated value starting with the initial one (arr)
        // this simply take the given element for which we are looping and add it to this array
        return arr.concat(el)
    }, []);
    // return a statement if the ingredients section is empty
    if (transformedIngredients.length == 0) {
        // transformedIngredients = "<p>check check one two</p>"
    }

    console.log(props.ingredients);
    console.log(transformedIngredients);
    console.log(transformedIngredients.length);
    return (
        <div className="Burger">
            
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            {/* <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/> */}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default burger;