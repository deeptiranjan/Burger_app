import React, { Component } from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideToggle from '../../Navigation/SideDrawer/SideToggle/SideToggle';

class Toolbar extends Component {
    render() {
        return (
            <header className={classes.Toolbar}>
                <SideToggle clicked = {this.props.drawerToggle}></SideToggle>
                <div className={classes.Logo}>
                    <Logo height='60%'></Logo>
                </div>
                <nav className={classes.desktopOnly}>
                    <NavigationItems></NavigationItems>
                </nav>
            </header>
        );
    }
}

export default Toolbar;