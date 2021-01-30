import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList'
class App extends Component {
  state = {
    courses:[
      {name:'html'},
      {name:'css'},
      {name:'reactjs'},
      {name:'angular'},
    ],
    current: '' 
  }

  //UpdateCourse
  updateCourse = (e) => {
    console.log(e.target.value);
  }
  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
  }
  render() {
    const courses = this.state.courses;
    const courseList = courses.map((course,index) => {
      return <CourseList details={course} key={index}/>
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
