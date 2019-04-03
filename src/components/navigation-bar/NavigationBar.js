import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
        <div className="navigationBar">
            <ul>
              <li>Home</li>
              <li>CV</li>
              <li>Projects</li>
            </ul>
        </div>  
    );
  }
}

export default NavigationBar;
