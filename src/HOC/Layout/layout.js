import React, { Component } from 'react';
import Aux from '../../HOC/Auxillary/auxillary';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        backdropShow: false
    };

    backdropToggle = () => {
        this.setState({
            backdropShow: false
        })
    }
    toggleSideDrawer = () => {
        this.setState((prevState) => {
            return { backdropShow: !prevState.backdropShow }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggle={this.toggleSideDrawer}></Toolbar>
                {
                    this.state.backdropShow ? 
                    <SideDrawer modalClosed={this.backdropToggle} show={this.state.backdropShow}></SideDrawer> 
                 : null
                 }
                <div style={{ 'marginTop': '56px' }}>{this.props.children}</div>
            </Aux>
        )
    }
}

export default Layout;