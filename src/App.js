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
    ]
  }
  render() {
    const courses = this.state.courses;
    const courseList = courses.map((course,index) => {
      return <CourseList details={course} key={index}/>
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
