import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary/auxillary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/modal/modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import WithErrorHandler from '../../HOC/WithErrorHandler/WithErrorHandler'

const INGREDIENTS_PRICE = {
    'salad': 0.4,
    'meat': 0.6,
    'bacon': 0.8,
    'cheese': 1.0
}
class burgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: {
                'salad': 0,
                'meat': 0,
                'bacon': 0,
                'cheese': 0
            },
            totalPrice: 0.4,
            purchasable: false,
            modalPurchasable: false,
            spinner: false
        }
        this.baseState = this.state;
    }
    

    updatePurchaseState(ingredientState) {
        const sum = Object.keys(ingredientState).map((data) => {
            return ingredientState[data]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngredients = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount + 1;
        const ingredientsObj = { ...this.state.ingredients };
        ingredientsObj[type] = newIngredientCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: ingredientsObj,
            totalPrice: newPrice
        });
        this.updatePurchaseState(ingredientsObj);
    }

    removeIngredients = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const newIngredientCount = oldIngredientCount - 1;
        const ingredientsObj = { ...this.state.ingredients };
        ingredientsObj[type] = newIngredientCount;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: ingredientsObj,
            totalPrice: newPrice
        });
        this.updatePurchaseState(ingredientsObj);
    }
    orderPurchasable = () => {
        this.setState({
            modalPurchasable: !this.state.modalPurchasable
        })
    }
    orderCheckout = () => {
        this.setState({
            spinner: true
        })
        const order = {
            ingredients: {
                ...this.state.ingredients
            },
            customerDetails: {
                name: 'Deepti Ranjan Rout',
                state: 'Odisha',
                town: 'Rourkela'
            },
            price: this.state.totalPrice
        }
        axios.post('/orders', order)
            .then((successData) => {
                console.log(successData);
                this.setState(this.baseState);
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    spinner: false,
                    modalPurchasable: true
                })
            });
    }
    render() {
        let orderSummary = null;
        if (this.state.spinner) {
            orderSummary = <Spinner></Spinner>
        } else {
            orderSummary = <OrderSummary ingredients={this.state.ingredients} modalCancel={this.orderPurchasable}
                modalCheckout={this.orderCheckout}
                price={this.state.totalPrice}></OrderSummary>
        }
        return (
            <Aux>
                
                    <Modal show={this.state.modalPurchasable} modalClosed={this.orderPurchasable}>
                        {orderSummary}
                    </Modal>
                <Burger type={this.state}></Burger>
                <BuildControls totalIngredients={this.state} ingredientCount={this.addIngredients}
                    ingredientSubtract={this.removeIngredients} orderClick={this.orderPurchasable}></BuildControls>
            </Aux >
        )
    }
}

export default WithErrorHandler(burgerBuilder,axios);