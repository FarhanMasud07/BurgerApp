import React from 'react';
import burgerlogo from '../../assets/images/Logo.png';
import classes from '../Logo/Logo.css'
const logo = (props) => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerlogo} alt='Burger' />
    </div>
);
export default logo;