import React from 'react';
import {Form, Input, Select} from "antd";
import classes from './input.module.scss'
import {MaskedInput} from "antd-mask-input";

const {Option} = Select;

const prefixSelector = (
  <Form.Item name="prefix" noStyle initialValue={"7"}>
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
    <MaskedInput
      addonBefore={prefixSelector}
      style={{
        width: '100%',
      }}
      className={classes.input}
      name={name}
      size={"large"}
      mask={'(000) 000-00-00'}
      onChange={onChange}
    />
  );
};

export default PhoneInput;