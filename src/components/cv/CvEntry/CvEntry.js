import React, { Component } from 'react';
import './CvEntry.css';
import Fade from 'react-reveal/Fade';

class CvEntry extends Component {
  constructor() {
    super();

    this.state = {
      inputHidden: true,
      hovering: false
    }
  }

  toggleInput = () => {
    this.setState({
      inputHidden: !this.state.inputHidden
    })
  };

  hoverOn = () => {
    this.setState({
      hovering: true
    })
  };

  hoverOff = () => {
    this.setState({
      hovering: false
    })
  };
  
  
  render() {
    const descriptionClass = this.state.inputHidden ? 'hideDescription' : 'showDescription';
    const containerClass = this.state.inputHidden ? 'hideContainer' : 'showContainer';
    const headLineClass = this.state.hovering ? 'hovering' : 'notHovering'
    return (
      <div className={["cvEntryContainer", containerClass, headLineClass].join(' ')}>
          <button onClick={this.toggleInput} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}><h1>{this.props.title}</h1></button>
          <div className={descriptionClass}>
            <Fade center>
              <div className="cvEntryContent">
                <h5>{this.props.startDate} - {this.props.endDate}</h5>
                <h4>{this.props.description}</h4>
                <h5>
                  {this.props.techStack.join(" - ")}
                </h5>   
              </div>  
            </Fade>
          </div>
      </div>
    );
  }
}

export default CvEntry;
