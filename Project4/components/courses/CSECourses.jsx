import React from 'react';
import './CSECourses.css';
import Search from '../Search/Search';

/**
 * Define Courses, a React componment of cse4050 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cse4050models.coursesModel().
 */

class CSECourses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validCourses: window.cse4050models.coursesModel(),
    };

    this.updateCourses = (string) => {
      this.setState({validCourses: string});
    };

    //console.log('window.cse4050models.coursesModel()', window.cse4050models.coursesModel());
  }

  render() {
    return (
      <div className ="cse4050-courses" id={'cse4050-courses'}>
        <Search searchItems = {window.cse4050models.coursesModel()} searchCallback={this.updateCourses}/>
        {this.state.validCourses.map((validCourses) => <div className='cse4050-courses-title' id={validCourses.slice(0,6)} key = {validCourses.slice(0,6)}>{validCourses}</div>)}
      </div>
    );
  }

  
}

export default CSECourses;