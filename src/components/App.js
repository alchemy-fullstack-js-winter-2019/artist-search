import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Search from './search/Search';
import Artist from './artist/Artist';
import Work from './artist/Work';
import Lyrics from './lyrics/Lyrics';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Search}/>
                    <Route exact path='/:name/:id' component={Artist}/>
                    <Route exact path='/songs/:artistName/:song' component={Lyrics}/>
                    <Route exact path='/:name/:work/:id' component={Work}/>
                </Switch>
            </Router>
        );
    }
}
