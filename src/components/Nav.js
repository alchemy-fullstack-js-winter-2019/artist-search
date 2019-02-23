import React from 'react';
import Search from './Search';
import Work from './Work';
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
          <Route path="/works/:name/:title" component={Work} />
          <Route path="/artistDetail/:id" component={ArtistDetail} />
          <Route path="/" component={Search} />
        </Switch>
      </>
    </Router>

  );
}
