import React, {Component} from 'react';
import Classes from './BurgerIngredients.css';
import PropTypes from 'prop-types';

class burgerIngredients extends Component {
    
    render(){
        let ingredients = null;
    switch (this.props.type) {
        case ('bread-bottom'):
            ingredients = <div className={Classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredients =(
                <div className={Classes.BreadTop}>
                    <div className={Classes.seeds1}></div>
                    <div className={Classes.seeds2}></div>
                </div>
            ) 
            break;
        case ('meat'):
            ingredients = <div className={Classes.Meat}></div>
            break;
        case ('cheese'):
            ingredients = <div className={Classes.Cheese}></div>
            break;
        case ('salad'):
            ingredients = <div className={Classes.Salad}></div>
            break;
        case ('bacon'):
            ingredients = <div className={Classes.Bacon}></div>
            break;
        default:
            ingredients = null
    }
    return ingredients;
}
}

burgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
}

export default burgerIngredients