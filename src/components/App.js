import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Search from './search/Search';
import Home from './home/Home';


export default class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/search" component={Search}/>
                </Switch>
            </Router>
        );
    }
}






