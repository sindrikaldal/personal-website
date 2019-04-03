import React, { Component } from 'react';
import './CvEntry.css';

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
    const buttonLabel = this.state.inputHidden ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
    return (
      <div className="cvEntryContainer">
          <h1>{this.props.title}</h1> <button onClick={this.toggleInput}><i class={buttonLabel}></i></button>
          <div className={descriptionClass}>
            <h4>{this.props.description}</h4>
          </div>
          
      </div>
    );
  }
}

export default CvEntry;
