import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Search from './search/Search';
import Artist from './artist/Artist';


export default class App extends Component {
   

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path='/artist/:id' component={Artist}/>
                </Switch>
            </Router>
        );
    }
}






