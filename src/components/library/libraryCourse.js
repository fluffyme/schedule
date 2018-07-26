import React, { Component } from 'react';
import Icon from '../icon';
import Arrow from '../arrow';

export default class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <div className="library-course__title-icon">
                    <label className="library-course__title">Problem Solving</label>
                    { Icon('fas fa-check', 'library-course__icon') }
                </div>
                    <Arrow className="library-course__arrow"/>
               
                <div className="library-course__description">
                 <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor convallis ante, non elementum odio tincidunt a. Cras eu orci ullamcorper, vestibulum lorem nec, pulvinar velit. Cras non dolor at purus dignissim vulputate.</p>
                </div>
            </div>
        );
    }
}