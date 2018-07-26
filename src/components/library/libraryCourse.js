import React, { Component } from 'react';
import Icon from '../icon';

export default class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-coure__title">Problem Solving</label>
                {Icon('fas fa-check', 'library-course__icon')}

                <div className="library-course__description">
                 <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor convallis ante, non elementum odio tincidunt a. Cras eu orci ullamcorper, vestibulum lorem nec, pulvinar velit. Cras non dolor at purus dignissim vulputate.</p>
                </div>
            </div>
        );
    }
}