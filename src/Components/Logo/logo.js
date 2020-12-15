import React from 'react';
import classes from './logo.css'
import BurgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt='burger'></img>
    </div>
)

export default logo;