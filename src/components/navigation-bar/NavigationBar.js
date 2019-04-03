import React, { Component } from 'react';
import './NavigationBar.css';
import ScrollIntoView from 'react-scroll-into-view'


class NavigationBar extends Component {
  render() {
    return (
        <div className="navigationBar">
            <ul>
              <li>
                <ScrollIntoView selector="#home">
                  <button>Home</button>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#cv">
                  <button>CV</button>
                </ScrollIntoView>
              </li>
              <li>
                <ScrollIntoView selector="#projects">
                  <button>Projects</button>
                </ScrollIntoView>
              </li>
            </ul>
        </div>  
    );
  }
} 

export default NavigationBar;
