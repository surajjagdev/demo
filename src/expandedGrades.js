import React from 'react';
import NewTag from './newTag';
const ExpandedGrades = props => {
  const additionalTagProp = props.students[props.index];
  if (props.index !== props.studentNumber) {
    return null;
  }
  if (props.newTag !== 'undefined' && props.newTag) {
    props.newTag.map(tag => {
      return <li>{tag}</li>;
    });
  }
  const grades = props.grades;
  return (
    <div key={props.studentNumber}>
      <ul>
        {grades.map(grade => {
          return <li>{grade}</li>;
        })}
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
