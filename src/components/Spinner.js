import React, {Component} from 'react';
import "./spinner.css"

class Spinner extends Component {
    element = (
        <div className="bouncy-castle">
            <div className="ball"></div>
            <div className="ball-shadow"></div>
        </div>
    );

    constructor(props) {
        super(props);
    }

    render() {
        return this.element;
    }
}

export default Spinner;
