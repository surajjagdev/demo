import React from 'react';
class NewTag extends React.Component {
  state = {
    tag: ''
  };
  handleInput = e => {
    e.preventDefault();
    this.setState({ tag: e.target.value }, () => {
      console.log(this.state.tag);
    });
  };
  addInformation = (i, x) => {
    this.props.newTagPush(i, x);
    //const newTagMade = (this.props.newTagInfo.newTag = [x]);
    console.log(i, x);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <button
          onClick={this.addInformation(this.props.studentIndex, this.state.tag)}
        >
          Add new Tag
        </button>
        <input name="tag" type="text" onChange={e => this.handleInput(e)} />
      </div>
    );
  }
}
export default NewTag;
