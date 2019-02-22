import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  // Link 
} from 'react-router-dom';
import Search from '../src/components/Search';

function App() {
  return (
    <Router>
      < >
        <Route exact path='/' component={Search} />
        {/* <Route exact path='/about' component={About} /> */}
        {/* <Route exact path='/artist/:id' component={Artist} /> */}
        {/* <Route exact path='/work/:id' component={Song} /> */}
        {/* <Redirect to='/home' /> */}
      </>
    </Router>
  );
}

export default App;
