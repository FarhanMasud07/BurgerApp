import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from '../SideDrawer/Sidedrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sidedrawer = (props) => {
    let attachClasses = [classes.Sidedrawer, classes.Close];
    if (props.open) {
        attachClasses = [classes.Sidedrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')}>

                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <Navigationitems />
                </nav>
            </div>
        </Aux>
    );
};
export default sidedrawer;