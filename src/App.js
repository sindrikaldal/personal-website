import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import CV from './components/cv/CV'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import NavigationBar from './components/navigation-bar/NavigationBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
            <NavigationBar/>
            <div className="mainContent">
              <Home/>
              <CV/>
              <Projects/>
            </div>
        </div>

        
      </Router> 
    );
  }
}

export default App;
