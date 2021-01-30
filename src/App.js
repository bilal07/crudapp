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
    this.setState({
      current: e.target.value
    })
  }
  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name:current});
    this.setState({
      courses,
      current: ''
    })
  }
  render() {
    const courses = this.state.courses;
    const courseList = courses.map((course,index) => {
      return <CourseList details={course} key={index} />
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
