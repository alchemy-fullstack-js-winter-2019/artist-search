import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  // Link 
} from 'react-router-dom';
import Search from './Search';
import Songs from './songs/Songs';
import Song from './songs/Song';

function App() {
  return (
    <Router>
        < >
          <Route exact path='/' component={Search} />
          {/* <Route exact path='/about' component={About} /> */}
          <Route exact path='/artist/:id' component={Songs} />
          <Route exact path='/work/:artist/:song' component={Song} />
          {/* <Redirect to='/home' /> */}
        </> 
    </Router>
  );
}

export default App;
