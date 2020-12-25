import React, {Component} from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';


class burgerIngredient extends Component {
    render() {
        let ingredient = null;
        // expect to receive the type
        // ingredient is either null, or one of the many "DIVs"
                switch (this.props.type) {
                case ('bread-bottom'):
                    ingredient = <div className="BreadBottom"></div>
                    break;
                case ('bread-top'):
                    ingredient = (
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds2"></div>
                        </div>
                    );
                    break;
                case('meat'):
                    ingredient = <div className="Meat"></div>
                    break;
                case("cheese"):
                    ingredient = <div className="Cheese"></div>
                    break;
                case("salad"):
                    ingredient = <div className="Salad"></div>
                    break;
                case("bacon"):
                    ingredient = <div className="Bacon"></div>
                    break;
                default:
                    ingredient=null;
        
                }
        
            return ingredient
            };
    };
        
burgerIngredient.popTypes = {
    // make sure the type is sting
    // if you try to use the ingredient component without passing a type, you'll get an error
    type: PropTypes.string.isRequired
}

export default burgerIngredient;