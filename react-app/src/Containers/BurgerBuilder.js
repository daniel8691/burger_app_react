// build burger builder component

import React, {Component} from 'react';
import Aux from '../HOC/Aux1';
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls';

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
        }
    }

    render() {
        return(
            <Aux>
                {/* pass the list of ingredients into the Burger tag */}
                <Burger ingredients={this.state.ingredients} />
                {/* <div>Burger</div> */}
                <BuildControls />

            </Aux>

        );
    }
}

export default BestBurger;
