import React, {Component} from 'react';
import Classes from './Backdrop.css'
class Backdrop extends Component{
    shouldComponentUpdate (nextProps,nextState) {
        return nextProps.show !== this.props.show;
    }
    render(){
        return(
            this.props.show ? <div className={Classes.Backdrop} onClick={this.props.clicked}></div> : null
        )
    }
};

export default Backdrop;