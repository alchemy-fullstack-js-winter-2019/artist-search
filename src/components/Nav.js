import React from 'react';
import Search from './Search';
import WorkDetail from './pages/WorkDetail';
import ArtistDetail from './pages/ArtistDetail';
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
          <Route path="/works/:name/:title" component={WorkDetail} />
          <Route path="/artistDetail/:name/:id" component={ArtistDetail} />
          <Route path="/" component={Search} />
        </Switch>
      </>
    </Router>

  );
}
