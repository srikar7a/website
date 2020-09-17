import React from 'react';
import styles from './App.module.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 
import Home from './Home';
import Work from './Work';
import Projects from './Projects';
import Contact from './Contact'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Redirect to="/"/>
        <Switch>
          <Route path="/" component={() => <Home/>} exact/>
          <Route path="/projects" component={() => <Projects/>}/>
          <Route path="/work" component={() => <Work/>}/>
          <Route path="/contact" component={() => <Contact/>}/>
          <Route path="/steignet" component={() => { window.location.href = 'www.steignet.com'; return null;}}/>
          <Route path="/uniflow" component={() => { window.location.href = 'https://www.uniflowcampus.com/'; return null;}}/>
          <Route path="/sri" component={() => { window.location.href = 'https://www.sri.com/'; return null;}}/>
          <Route path="/aetherpal" component={() => { window.location.href = "https://www.vmware.com/company/acquisitions/aetherpal.html"; return null;}}/>
          <Route path="/its" component={() => { window.location.href = "https://its.umich.edu/"; return null;}}/>
          <Route path="/juni" component={() => { window.location.href = "https://junilearning.com/"; return null;}}/>
          <Route path="/varsity" component={() => { window.location.href = "https://www.varsitytutors.com/"; return null;}}/>
          <Route path="/email" component={() => { window.location.href = "mailto: srikayy@umich.edu"; return null;}}/>
          <Route path="/linkedin" component={() => { window.location.href = "https://www.linkedin.com/in/srikayy"; return null;}}/>
          <Route path="/fb" component={() => { window.location.href = "https://www.facebook.com/srikar7a"; return null;}}/>
          <Route path="/ig" component={() => { window.location.href = "https://www.instagram.com/srikayy"; return null;}}/>
          <Route path="/yt" component={() => { window.location.href = "https://www.youtube.com/channel/UCBOT6ZmS_veEMUKUdvTMRlQ/"; return null;}}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
