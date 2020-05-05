import React, {Component} from 'react';
import './App.css';
import MainPage from './pages/Main';
import authService from "./services/auth.service";
import dataService from "./services/dataService";

class App extends Component {
    state = {
        showSpinner: true,
        recruiters: [],
        places: []
    };

    componentDidMount() {
        authService.getToken().then(() => {
            dataService.getData().then((data) => {
                this.setState({
                    showSpinner: false,
                    recruiters: data.recruiters,
                    places: data.places
                });
            });
        })

    }


    render() {
        return <MainPage recruiters={this.state.recruiters} showSpinner={this.state.showSpinner} places={this.state.places}/>
    }
}

export default App;
