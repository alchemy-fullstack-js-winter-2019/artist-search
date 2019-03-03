import React from 'react';
import { ROUTES } from '../routes/Routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

export default function App(){
  return (

    <Router>
      <div>
        <h1>Artist Search</h1>
        <Switch>
          <Route component={ROUTES.ARTIST_SEARCH.Component} path={ROUTES.ARTIST_SEARCH.path} />  
        </Switch>
      </div>
    </Router>
  );
}
