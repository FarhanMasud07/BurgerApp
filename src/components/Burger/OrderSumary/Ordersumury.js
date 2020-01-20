import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(igkey => {
        return (
            <li key={igkey}>
                <span style={{ textTransform: 'capitalize' }}>{igkey}</span> : {props.ingredients[igkey]}
            </li>
        )
    })
    return (
        <Aux>
            <h1>Total Price: ${props.price.toFixed(2)}</h1>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};
export default orderSummary;