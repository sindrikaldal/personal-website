import React, { Component } from 'react';
import './CvEntry.css';
import Fade from 'react-reveal/Fade';

class CvEntry extends Component {
  constructor() {
    super();

    this.state = {
      inputHidden: true
    }
  }

  toggleInput = () => {
    this.setState({
      inputHidden: !this.state.inputHidden
    })
  };
  
  
  render() {
    const descriptionClass = this.state.inputHidden ? 'hide' : 'show';
    const buttonLabel = this.state.inputHidden ? 'fas fa-chevron-down fa-2x' : 'fas fa-chevron-up fa-2x'
    return (
      <div className="cvEntryContainer">
          <h1>{this.props.title}</h1> <button onClick={this.toggleInput}><i class={buttonLabel}></i></button>
          <div className={descriptionClass}>
            <Fade center>
              <h4>{this.props.description}</h4>
            </Fade>
          </div>
          
      </div>
    );
  }
}

export default CvEntry;
