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
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm />
        <CourseList />
      </section>
    );
  }
}

export default App;
