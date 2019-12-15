import React from 'react';
import './Button.css';

const Button = (props) => {
  let operator = props.children;
  let classOperator = operator === 'x' || operator === '+' || operator === '-' || operator === '/' ? "warpper-button opeartor" : "warpper-button";

  return(
    <>
      <button 
        className={classOperator}
        onClick={()=>props.handleClick(props.children)}
      > 
        {props.children} 
      </button>
    </>
  )
}

export default Button;