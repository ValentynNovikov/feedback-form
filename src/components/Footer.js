import React, {Component} from 'react';
import Background from '../images/Avenga-wave.png';


class Footer extends Component {
    style = {
        backgroundImage: `url(${Background})`,
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "100px",
        width: "100%",
    };

    render() {
        return (
            <div style={this.style}>
            </div>
        )
    }
}

export default Footer;
