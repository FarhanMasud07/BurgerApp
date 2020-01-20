import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSumary/Ordersumury';

const INGRIDIENT_PRICES = {
    salad: 0.4,
    bacon: 0.4,
    cheese: 0.1,
    meat: 2.1,

}
class BurgerBuilder extends Component {
    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,

        },
        totalPrice: 5,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey];

        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            purchasable: sum > 0
        })
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients

        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingridients: updatedIngridients,
        });

        this.updatePurchaseState(updatedIngridients);

    }
    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if (oldCount <= 0) {
            return console.log('Can not -1 or 0');
        }
        const updatedCount = oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingridients

        };
        updatedIngridients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingridients: updatedIngridients,
        });

        this.updatePurchaseState(updatedIngridients);
    }
    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        });
    }
    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
        })
    }

    purchaseContinueHandler = () => {
        alert('you can continue');
    }

    render() {
        const disableInfo = {
            ...this.state.ingridients
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingridients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice} />
                </Modal>

                <Burger ingridients={this.state.ingridients} />

                <BuildControls ingridientAdded={this.addIngridientHandler}
                    ingridientRemove={this.removeIngridientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />

            </Auxiliary>);
    };
}
export default BurgerBuilder;