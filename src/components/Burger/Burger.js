import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngridient from '../Burger/BurgerIngridents/Burgeringredient';
const Burger = (props) => {
    let transformedIngridients = Object.keys(props.ingridients)
        .map(igkey => {
            return [...Array(props.ingridients[igkey])].map((_, i) => {
                return <BurgerIngridient key={igkey + i} type={igkey} />;
            });
        }).reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);

    if (transformedIngridients.length === 0) {
        transformedIngridients = <p>Please start adding ingridinets</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformedIngridients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
};

export default Burger;