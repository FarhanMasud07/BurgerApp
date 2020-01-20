import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer';
class Layout extends Component {
    state = {
        showSideDrawer: true,
    }
    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        })
    }
    render() {
        return (
            <Auxiliary>

                <Toolbar />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout