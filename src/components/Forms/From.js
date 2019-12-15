import React from 'react';

const FromInput = (props) => {
  return(
    <>
      <div className="input-group mb-3">
        <input 
          type="text"
          className="form-control"
          value={props.value}
          onChange={props.hanldeChange}
        />
        <div className="input-group-append">
          <button 
            type="button"
            className="input-group-text btn btn-primary"
            onClick={()=> props.hanldeCheck()}
          >
            Check
          </button>
        </div>
      </div>
    </>
  );
}

export default FromInput;