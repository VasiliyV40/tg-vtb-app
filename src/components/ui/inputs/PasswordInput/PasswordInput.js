import React from 'react';
import {Input} from 'antd';
import classes from './input.module.scss'

const PasswordInput = (props) => {
  const {onChange, name, data} = props
  return (
    <Input.Password
      placeholder="Введите пароль"
      className={classes.input}
      value={data}
      onChange={e => onChange(name, e.target.value)}
    />
  );
};

export default PasswordInput;