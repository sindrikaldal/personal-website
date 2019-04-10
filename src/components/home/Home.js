import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="spacer">&nbsp;</div>
        <div className="homeContainer">
            <img className="portrait circle responsive-img" src="https://scontent.frkv1-1.fna.fbcdn.net/v/t1.0-9/48391144_10216474477886202_8504353979898003456_o.jpg?_nc_cat=100&_nc_ht=scontent.frkv1-1.fna&oh=e9a834e0568b7d1f43962b218d46a86e&oe=5D0E8046"/>
            <span className="description">A passionate software developer & coffee drinker.</span> <br/>
            <span className="description">This website contains <strong>almost</strong> all the things you might want to know about me.</span>
        </div>
      </div>
    );
  }
}

export default Home;
