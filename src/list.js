import React from 'react';
import './list.css';
import ImageDisplay from './image.js';
import ExpandedGrades from './expandedGrades';
class List extends React.Component {
  state = {
    search: '',
    tagSearch: '',
    expanded: false,
    grades: [],
    index: ''
  };
  handleInput = e => {
    e.preventDefault();
    this.setState({ search: e.target.value, tagSearch: '' }, () => {
      console.log(this.state.search);
    });
  };
  handleTagInput = e => {
    e.preventDefault();
    this.setState({ tagSearch: e.target.value, search: '' }, () => {
      console.log(this.state.search);
    });
  };
  handleExpand = (x, y, z) => {
    let gradeArray = x.grades;
    this.setState({
      grades: gradeArray,
      expanded: !this.state.expanded,
      index: y
    });
  };
  searchTags = x => {
    if (typeof x.newTag !== 'undefined') {
      return x.newTag.indexOf(this.state.tagSearch) !== -1;
    }
    return false;
  };
  render() {
    /*filter the students state by individual student returning where student firstName or 
or lastName where indexOf of search String is equal to student info and return if found*/

    let filteredStudents = this.props.students.filter(student => {
      return (
        student.firstName
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        student.lastName
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1 ||
        this.searchTags(student)
      );
    });

    return (
      <div>
        <div>
          <input
            name="search"
            id="search"
            placeholder="Search Names"
            type="text"
            onKeyUp={e => {
              this.handleInput(e);
            }}
          />
          <input
            name="search"
            id="search"
            placeholder="Search Tags"
            type="text"
            onKeyUp={e => {
              this.handleTagInput(e);
            }}
          />
        </div>
        {filteredStudents.map((student, index) => {
          return (
            <div className="individualDisplay" key={index - 1}>
              <ImageDisplay image={student.pic} />
              <div className="informationDisplay">
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
                <div className="info">
                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: {this.props.averageFn(student.grades)}</p>
                </div>
                {this.state.expanded ? (
                  <i
                    className="fas fa-minus"
                    id="plus-Sign"
                    onClick={() =>
                      this.handleExpand(
                        filteredStudents[student.id - 1],
                        index,
                        student.id
                      )
                    }
                  />
                ) : (
                  <i
                    className="fas fa-plus"
                    id="plus-Sign"
                    onClick={() =>
                      this.handleExpand(
                        filteredStudents[student.id - 1],
                        index,
                        student.id
                      )
                    }
                  />
                )}

                {this.state.expanded ? (
                  <ExpandedGrades
                    key={index - 1}
                    studentDirectory={this.props.students}
                    grades={this.state.grades}
                    index={this.state.index}
                    studentNumber={student.id - 1}
                    newTag={student.newTag}
                    students={this.props.students}
                    newTagPush={this.props.newTagPush}
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default List;
