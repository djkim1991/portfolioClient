import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import PortfolioContainer from './containers/portfolioContainer/PortfolioContainer';
import HomeContainer from './containers/bodyContainer/HomeContainer';
import ResumeContainer from './containers/bodyContainer/ResumeContainer';
import SkillsContainer from './containers/bodyContainer/SkillsContainer';
import CareerContainer from './containers/bodyContainer/CareerContainer';

function App() {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={PortfolioContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path="resume" component={ResumeContainer}/>
            <Route path="skills" component={SkillsContainer}/>
            <Route path="career" component={CareerContainer}/>
        </Route>
    </Router>
  );
}

export default App;
