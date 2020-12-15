import React from 'react';
import classes from './Buttons.css';

const Buttons = (props) => (
    <button className={[classes.Button,classes[props.buttonType]].join(' ')} onClick ={props.ButtonClick}>{props.buttonName}</button>
)

export default Buttons