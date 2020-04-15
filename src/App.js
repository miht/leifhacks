import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './views/home.jsx';
import Projects from './views/projects';
import AboutPage from './views/about';

function App() {
  return (
    <Router>
      <div className="Root">
          <Switch>
            <Route exact path = "/" >
              <Home />
            </Route> <
            Route path = "/projects" >
              <Projects />
            </Route> <
            Route path = "/about" >
              <AboutPage />
            </Route> 
            </Switch>
      </div>
    </Router>
  );
}

export default App;
