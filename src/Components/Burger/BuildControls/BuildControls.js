import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const buildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Meat', type: 'meat' },
        { label: 'Cheese', type: 'cheese' },
    ]
    return (
        <div className={classes.buildControls}>
            <p>Current Price: $<strong>{Number(props.totalIngredients.totalPrice).toFixed(2)}</strong></p>
            {controls.map(data => {
                return <BuildControl
                    key={data.label}
                    label={data.label}
                    count ={props.totalIngredients.ingredients[data.type]}
                    added={() => props.ingredientCount(data.type)}
                    remove={() => props.ingredientSubtract(data.type)}>
                </BuildControl>
            })}
            <div>
            <button className={classes.OrderButton} disabled={!props.totalIngredients.purchasable} onClick= {props.orderClick}>Order</button>
            </div>
        </div>
    )
}

export default buildControls;