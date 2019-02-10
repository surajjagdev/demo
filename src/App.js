import React, { Component } from 'react';
import './App.css';
import List from './list';
import Display from './Display';

class App extends Component {
  state = {
    students: []
  };
  //fetch data and format to json then set to state
  fetchStudents = async () => {
    const res = await fetch('https://www.hatchways.io/api/assessment/students');
    const formatted = await res.json();

    this.setState({ students: formatted.students }, () => {
      console.log(this.state.students);
    });
  };
  async componentWillMount() {
    this.fetchStudents();
  }
  //take length of grades array and get average by dividing sum over length
  average = array => {
    let lengthArray = array.length;
    let sum = 0;
    for (let i = 0; i < lengthArray; i++) {
      sum = sum + Number(array[i]);
    }
    return sum / lengthArray + '%';
  };
  //make a new array with students in state, then change one student to add in new property in the student object
  newTagPush = (i, x) => {
    console.log(i, x);
    let allStudents = [...this.state.students];
    let student = allStudents[i];
    if (student.newTag === undefined) {
      student.newTag = [];
    }
    student.newTag.push(x);
    if (student.newTag.length > 0) {
      this.setState({ students: allStudents }, () => {
        console.log(this.state.students);
      });
    }
  };
  //pass in props students, avg fn and new tag fn to List
  render() {
    return (
      <Display>
        <List
          students={this.state.students}
          averageFn={this.average}
          newTagPush={this.newTagPush}
        />
      </Display>
    );
  }
}

export default App;
