import React, { Component } from 'react';
import CV from './components/cv/CV'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import NavigationBar from './components/navigation-bar/NavigationBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
          <NavigationBar/>
          <Home/>
          <CV/>
          <Projects/>
          <Contact/>
      </div>        
    );
  }
}

export default App;
