import React from 'react';
import classes from './SideDrawer.css'
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../HOC/Auxillary/auxillary';

const SideDrawer = (props) => {
    return (
        <Aux>
             <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
               
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>

                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;