import React, {Component} from 'react';
import logo from './../images/avenga_logo.png'

class Header extends Component {
    style = {
        height: "50px",
        width: "100%",
        top: "0",
        left: "0",
        position: "fixed",
        textAlign: 'center',
        backgroundColor: "#181818",
        zIndex: '1'
    };

    logoStyle = {
        height: '100%'
    };

    render() {
        return (
            <div>
                <div style={this.style}>
                    <img style={this.logoStyle} src={logo} alt="logo"/>
                </div>
            </div>

        )
    }
}

export default Header;
