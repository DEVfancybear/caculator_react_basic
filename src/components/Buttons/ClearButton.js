import React from 'react';
import './ClearButton.css';

const ClearButton = (props) => {
  return(
    <>
      <button 
        className="clear"
        onClick={() => props.handleClear()}
      >
        Clear
      </button>
    </>
  );
}

export default ClearButton;