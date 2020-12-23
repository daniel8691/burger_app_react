// build burger builder component

import React, {Component} from 'react';
import Aux from '../HOC/Aux1';


class Burger extends Component {
    render() {
        return(
            <Aux>
                <div>Burger</div>
                <div>Build Controls</div>

            </Aux>

        );
    }
}

export default Burger;
