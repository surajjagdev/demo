import React from 'react';
import './list.css';
const ImageDisplay = props => {
  return (
    <div className="pictureBorder">
      <img alt="student picture" src={props.image} id="displayPicture" />
    </div>
  );
};
export default ImageDisplay;
