import React from 'react';
import './CSECourses.css';

/**
 * Define Courses, a React componment of cse4050 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cse4050models.coursesModel().
 */
class CSECourses extends React.Component {
  constructor(props) {
    super(props);
    console.log('window.cse4050models.coursesModel()', window.cse4050models.coursesModel());
  }

  render() {
    return (
      <div>
        Replace this with the code for CSE4050 Project #4, Problem #2
      </div>
    );
  }
}

export default CSECourses;
