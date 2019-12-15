import React from 'react';
import './RemoveButton.css';

const RemoveButton = (props) => {
  return(
    <>
      <button
        className="remove"
        onClick={()=> props.handleRemove()}
      >
        &larr;
      </button>
    </>
  )
}
export default RemoveButton;