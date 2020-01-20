import React from 'react';
import classes from '../BuildControls/BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
import Aux from '../../../hoc/Auxiliary';

const controls = [
    {
        label: 'Salad', type: 'salad'
    },
    {
        label: 'Bacon', type: 'bacon'
    },
    {
        label: 'Cheese', type: 'cheese'
    },
    {
        label: 'Meat', type: 'meat'
    },
];
const buildControls = (props) => (
    <Aux>
        <div className={classes.BuildControls}>
            <p>Total Price : <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingridientAdded(ctrl.type)}
                    remove={() => props.ingridientRemove(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}

        </div>
        <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Order Now</button>
    </Aux>
);
export default buildControls;