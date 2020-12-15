import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className = {classes.NavigationItems}>
            <NavigationItem link="/" active='true' navigationName='Burger Builder'></NavigationItem>
            <NavigationItem link="/" navigationName='Checkout'></NavigationItem>
        </ul>

    )
}

export default NavigationItems