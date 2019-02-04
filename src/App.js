import React, { Component } from 'react';
import './App.css';
import List from './list';
import Display from './Display';

class App extends Component {
  state = {
    students: []
  };
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
  average = array => {
    let lengthArray = array.length;
    let sum = 0;
    for (let i = 0; i < lengthArray; i++) {
      sum = sum + Number(array[i]);
    }
    return sum / lengthArray + '%';
  };
  newTagPush = (i, x) => {
    /*const newTag = this.state.students.map(student => {
      if (student.id === i) {
        return student;
      }
      return {
        ...student,
        newTag: [x]
      };
    });
    this.setState({ students: newTag });*/
    //makes infinite loop
    console.log(i, x);
    /*this.setState({
      students: this.state.students.map((student, index) => {
        if (index === i) {
          return {
            ...student,
            newTag: [x]
          };
        }
        return student;
      })
    });*/
  };

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
