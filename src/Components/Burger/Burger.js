import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let transformIngredients = Object.keys(props.type.ingredients).map(ingData => {
        return [...Array(props.type.ingredients[ingData])].map((_, i) => {
            return <BurgerIngredients key={ingData + i} type={ingData}></BurgerIngredients>
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <span>Please add ingredients</span>
    }
    return (
        <div className={classes.burger}>
            <BurgerIngredients type="bread-top"></BurgerIngredients>
            {transformIngredients}
            <BurgerIngredients type="bread-bottom"></BurgerIngredients>
        </div>
    )
}

export default burger;