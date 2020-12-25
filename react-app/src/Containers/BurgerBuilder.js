// build burger builder component

import React, {Component} from 'react';
import Aux from '../HOC/Aux1';
import Burger from '../Components/Burger/Burger';


class BestBurger extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        // careful that this is an object not any array (cannot map() through)
        ingredients: {
            salad:1,
            bacon:1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return(
            <Aux>
                {/* pass the list of ingredients into the Burger tag */}
                <Burger ingredients={this.state.ingredients} />
                <div>Burger</div>
                <div>Build Controls</div>

            </Aux>

        );
    }
}

export default BestBurger;
