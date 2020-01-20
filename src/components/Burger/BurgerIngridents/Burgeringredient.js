import React, { Component } from 'react';
import propTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngridinet extends Component {
    render() {
        let ingridient = null;
        //     "bread-top" 
        //     "cheese" 
        //    "meat"
        //  "bread-bottom" 
        switch (this.props.type) {
            case ('bread-top'):
                ingridient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('bread-bottom'):
                ingridient = <div className={classes.BreadBottom}></div>
                break;
            case ('meat'):
                ingridient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingridient = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingridient = <div className={classes.Bacon}></div>
                break;
            case ('salad'):
                ingridient = <div className={classes.Salad}></div>
                break;
            default:
                ingridient = null;
        }
        return ingridient;
    }
}

BurgerIngridinet.propTypes = {
    type: propTypes.string.isRequired
}

export default BurgerIngridinet;
