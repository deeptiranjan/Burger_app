import React from 'react';
import classes from './SideToggle.css';

const SideToggle = (props) => (
    <div onClick = {props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default SideToggle;