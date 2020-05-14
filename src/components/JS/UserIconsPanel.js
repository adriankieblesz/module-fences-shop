import React, { Component } from 'react';
import UserIcon from './UserIcon';
import OrderCounter from './OrderCounter';
import signUp from '../../images/icons/signUp.png';
import login from '../../images/icons/login52.png';
import basket from '../../images/icons/basket48.png';
import "../SCSS/UserIconsPanel.scss";
class UserIcons extends Component {
    state = {
        order: [0]
    }
    componentDidUpdate() {
        if (this.state.order.length === 0) {
            let order = this.props.order;
            this.setState(() => ({
                order
            }))
        }
    }
    render() {
        console.log(this.state.order);
        return (
            <div id="user-icons">
                <div className="icons-container">
                    <UserIcon
                        className="sign-in"
                        content="Sign up"
                        icon={signUp}
                    />
                    <UserIcon
                        className="sign-up"
                        content="Login"
                        icon={login}
                    />
                    <UserIcon
                        className="sign-up"
                        content="Your order"
                        icon={basket}
                        orderCounter={this.props.order.length > 0 && (this.props.order[0].amount > 0 ? <OrderCounter amount={this.props.order[0].amount} /> : null)}
                    />
                </div>
            </div>
        );
    }
}

export default UserIcons;