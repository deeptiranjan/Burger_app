import React from 'react';
import Aux from '../../../HOC/Auxillary/auxillary';
import Buttons from '../../../UI/Buttons/Buttons';
const orderSummary = (props) =>{
    const ingredients = Object.keys(props.ingredients).map((data) =>{
        return (<li style={{'listStyle': 'none'}} key={data}>
            <span style={{'width':'50%', 'float': 'left', 'fontWeight': 'bold'}}>{data}</span>
            <span style={{'width':'50%'}}>{props.ingredients[data]}</span>
            </li>)
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with below ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <p> You have to pay <span style={{'fontWeight': 'bold'}}>${Number(props.price).toFixed(2)}</span></p>
            <p>Please click on Checkout to proceed. Do you want to proceed?</p>
            <Buttons buttonName='cancel' ButtonClick={props.modalCancel} buttonType='Danger'></Buttons>
            <Buttons buttonName='Checkout' ButtonClick={props.modalCheckout} buttonType='Success'></Buttons>
        </Aux>
    )
}

export default orderSummary;