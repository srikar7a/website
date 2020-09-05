import React from 'react';
import styles from './App.module.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import Home from './Home';
import Work from './Work';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={() => <Home/>} exact/>
          <Route path="/projects"/>
          <Route path="/work" component={() => <Work/>}/>
          <Route path="/contact"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
