import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Chat from './components/pages/Chat';
import Events from './components/pages/Events';
import Homepage from  './components/pages/Homepage';
import News from './components/pages/News';
import Voter from './components/pages/Voter';

import BudgetState from './context/budget/BudgetState';
import './App.css';

function App() {
  return (
    <BudgetState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/vote-register' component={Voter} />
              <Route exact path='/news' component={News} />
              <Route exact path='/events' component={Events} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </BudgetState>
  );
}

export default App;
