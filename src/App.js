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
                <div className = "AlertBar" >
                  <p>Important information! This website is currently experiencing 404 issues caused by refreshing. I am currently investigating this problem; thank you for your patience.</p>
                </div>
          <Switch>
            <Route exact path = "/leifhacks/" >
              <Home />
            </Route> <
            Route path = "/leifhacks/projects" >
              <Projects />
            </Route> <
            Route path = "/leifhacks/about" >
              <AboutPage />
            </Route> 
            </Switch>
      </div>
    </Router>
  );
}

export default App;
