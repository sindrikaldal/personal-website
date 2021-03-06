import React, { Component } from 'react';
import './CvEntry.css';

class CvEntry extends Component {
  constructor() {
    super();

    this.state = {
      inputHidden: true,
    }
  }

  toggleInput = () => {
    this.setState({
      inputHidden: !this.state.inputHidden
    })
  };
  
  render() {
    const descriptionClass = this.state.inputHidden ? 'hideDescription' : 'showDescription';
    const containerClass = this.state.inputHidden ? 'hideContainer' : 'showContainer';
    const chevronClass = this.state.inputHidden ? 'fas fa-chevron-down fa-2x' : 'fas fa-chevron-up fa-2x';
    return (
      <div className={["cvEntryContainer", containerClass].join(' ')}>
          <button onClick={this.toggleInput}><h1>{this.props.title}<i className={chevronClass}></i></h1></button>
          <div className={descriptionClass}>
            <div className="cvEntryContent">
              <h5>{this.props.startDate} - {this.props.endDate}</h5>
              <h4>{this.props.description}</h4>
              <h5>
                {this.props.techStack.join(" - ")}
              </h5>   
            </div>  
          </div>
      </div>
    );
  }
}

export default CvEntry;
