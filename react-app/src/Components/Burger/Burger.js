import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
    // extract keys of object and gives you an array fo the keys
    const transformedIngredients = Object.keys(props.ingredients)
        // create a function called ingredient keys
        // .map(igKey => {
        //     // get an array of the number of ingredients we have
        //     return [...Array(props.ingredients[igKey])].map((_,i) => {
        //         // need to assign key because its an array of JSX elements
        //         <BurgerIngredient key = {igKey + i} type = {igKey} /> // right now we have an array of two elements
        //         // console.log(_);
        //         console.log(igKey);
        //     }); 
        // })
    console.log(props);
    console.log(transformedIngredients);
    return (
        <div className="Burger">
            
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
};

export default burger;