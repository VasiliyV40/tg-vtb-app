import React from 'react';
import {Form, Input, Select} from "antd";
import classes from './input.module.scss'

const {Option} = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="7">+7</Option>
      <Option value="8">+8</Option>
    </Select>
  </Form.Item>
)



const PhoneInput = (props) => {
  const {onChange, name, data} = props

  return (
    <Input
      addonBefore={prefixSelector}
      style={{
        width: '100%',
      }}
      inputMode="tel"
      value={data}
      placeholder="Введите номер телефона"
      className={classes.input}
      onChange={e => onChange(name, e.target.value.replace(/[^+\d]/g, ''))}
    />
  );
};

export default PhoneInput;