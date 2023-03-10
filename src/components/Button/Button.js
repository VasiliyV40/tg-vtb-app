import React from 'react';
import classes from './button.module.scss'

const Button = (props) => {

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.fullWidth ? classes.fullWidth : ''}`}
    >
      {props.children}
    </button>
  );
};

export default Button;