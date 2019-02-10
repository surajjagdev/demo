import React from 'react';
class NewTag extends React.Component {
  state = {
    tag: ''
  };
  //handle input of input field and value to state property tag
  handleInput = e => {
    e.preventDefault();
    this.setState({ tag: e.target.value }, () => {});
  };
  //on click pass index of student and value of tag property in state
  addInformation = (i, x) => {
    this.props.newTagPush(i, x);
    console.log(i, x);
  };
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.addInformation(this.props.studentIndex, this.state.tag)
          }
        >
          Add new Tag
        </button>
        <input name="tag" type="text" onChange={e => this.handleInput(e)} />
      </div>
    );
  }
}
export default NewTag;
