import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Navbar2 from './components/layout/Navbar2';
//import Home from './components/pages/Home';  <Route exact path='/' component={Home} />
import About from './components/pages/About';
import Chat from './components/pages/Chat';
import Events from './components/pages/Events';
import Homepage from  './components/pages/Homepage';
import News from './components/pages/News';
import './index.css';
import BudgetState from './context/budget/BudgetState';
import Voter from './components/pages/Voter';
import Projects from './components/pages/Projects';
//css files
import './App.css';
import './assets/css/Bootstrap-Chat.css';
import './assets/css/Call-to-Action-Div-with-Icon-Header--Button.css';
import './assets/css/Carousel-Hero.css';
import './assets/css/Latest-Events.css';
import './assets/css/Login-Box-En.css';
import './assets/css/Navbar-Dropdown-List-Item.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Navigation-with-Search.css';
import './assets/css/News-article-for-homepage-by-Ikbendiederiknl.css';
import './assets/css/Newsletter-Subscription-Form.css';
import './assets/css/Newsletter-v2.css';
import './assets/css/Pretty-Registration-Form.css';
import './assets/css/Process-Steps.css';
import './assets/css/Projects-Horizontal.css';
import './assets/css/styles.css';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BudgetState>
      <Router>
        <Fragment>
          <Navbar />
          <Navbar2/>
          <div className="container">
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/vote-register' component={Voter} />
              <Route exact path='/news' component={News} />
              <Route exact path='/events' component={Events} />
              <Route exact path='/chat' component={Chat} />
              <Route exact path='/news' component={News} />
              <Route exact path='/' component={Homepage} />
              <Route exact path='/projects' component={Projects} />
            </Switch>
          </div>
          //footer
        </Fragment>
      </Router>
    </BudgetState>
  );
}

export default App;
