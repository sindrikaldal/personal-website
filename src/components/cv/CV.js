import React, { Component } from 'react';
import './CV.css';
import CvEntry from './CvEntry/CvEntry'
import Fade from 'react-reveal/Fade';
import * as StringConstants from '../../constants/Strings'


class CV extends Component {
  render() {
    
    return (
        <div id="cv">
            <div className="spacer">&nbsp;</div>
            <div className="cvContainer">
                <Fade center>
                    <CvEntry 
                        title="WOW Air" 
                        description={StringConstants.WOW_AIR_DESCRIPTION}
                        startDate="August 2018"
                        endDate="March 2019"
                    />
                </Fade>
                <Fade center>
                    <CvEntry 
                        title="Síminn" 
                        description={StringConstants.SIMINN_DESCRIPTION}
                        startDate="Summer between 2015"
                        endDate="2017"
                    />
                </Fade>
                <Fade center>
                    <CvEntry 
                        title="KTH & RU" 
                        description={StringConstants.ASSISTANT_TEACHER_DESCRIPTION}
                        startDate="Various semesters between 2014"
                        endDate="2017"
                    />
                </Fade>
            </div>
        </div>
    );
  }
}

export default CV;
