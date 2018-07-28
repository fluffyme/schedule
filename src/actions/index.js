import { FETCH_COURSES } from './types';

function fetchCourses() {
    return{
        type: FETCH_COURSES,
        payload: [
            {
                title: "Problem Solving",
                description: "Up and Runnig with Redis"
            },
            {
                title: "Html/Css bootcamp",
                description: "Learn  Html5 and Css3 from scratch"
            },
            {
                title: "UX for Developpers",
                description: "This User Experience (UX) course examines how to"
            }
        ]
    }
}