import React, {Component} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";
import Spinner from "../components/Spinner";

class MainPage extends Component {
    state = {
        showThankYou: false
    };

    showThankYou = (value) => {
        this.setState({showThankYou: value})
    };

    render() {
        return (
            <div>
                <Header/>

                {this.props.showSpinner && !this.state.showThankYou &&(
                    <Spinner/>
                )}

                {!this.props.showSpinner &&  !this.state.showThankYou &&(
                    <Content recruiters={this.props.recruiters} places={this.props.places} onChange={this.showThankYou}/>
                )}

                {!this.props.showSpinner && this.state.showThankYou &&(
                  <p className={'thank-you'}>Thank You for your feedback !</p>
                )}

                <Footer/>
            </div>
        )
    }
}

export default MainPage;
