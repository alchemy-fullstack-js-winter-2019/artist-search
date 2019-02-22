import React from 'react';
import Search from './Search';
import Artist from './artists/Artist';
import Work from './Work';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

export default function Nav() {
  return (
    <Router>
      <>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/work" component={Work} />
          <Route path="/artist" component={Artist} />
          <Route path="/" component={Search} />
        </Switch>
      </>
    </Router>

  );
}
