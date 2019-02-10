import React from 'react';
import NewTag from './newTag';
import './list.css';
const ExpandedGrades = props => {
  //individual student
  const additionalTagProp = props.students[props.index];
  //show nothing if the index prop is not equal to the student id
  if (props.index !== props.studentNumber) {
    return null;
  }
  const grades = props.grades;
  return (
    //map through grades array and list them out
    //if props newTag exists show it as disabled buttons
    <div key={props.studentNumber}>
      <ul className="gradeList">
        {grades.map(grade => {
          return <li>{grade}</li>;
        })}
        {props.newTag
          ? props.newTag.map(newTags => {
              return (
                <button type="button" disabled>
                  {newTags}
                </button>
              );
            })
          : null}
      </ul>

      <NewTag
        newTagInfo={additionalTagProp}
        newTagPush={props.newTagPush}
        studentIndex={props.index}
      />
    </div>
  );
};
export default ExpandedGrades;
