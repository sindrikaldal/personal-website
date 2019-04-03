import React, { Component } from 'react';
import './CV.css';
import CvEntry from './CvEntry/CvEntry'
import Fade from 'react-reveal/Fade';
import * as StringConstants from '../../constants/Strings'


class CV extends Component {
  render() {
    
    return (
        <div id="cv">
            <div className="cvContainer">
                <Fade left>
                    <CvEntry title="WOW Air" description={StringConstants.WOW_AIR_DESCRIPTION}/>
                    <CvEntry title="Síminn" description={StringConstants.SIMINN_DESCRIPTION}/>
                </Fade>
            </div>
        </div>
    );
  }
}

export default CV;
