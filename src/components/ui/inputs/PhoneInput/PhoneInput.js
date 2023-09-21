import React from 'react';
import {Form, Input, Select} from "antd";
import classes from './input.module.scss'
import {MaskedInput} from "antd-mask-input";
import TextInput from "../TextInput";

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
  return (
    <TextInput
      {...props}
      addonBefore={prefixSelector}
      style={{
        width: '100%',
      }}
      type="text"
      inputMode="tel"
      size={"large"}
      className={classes.input}
    />

    /*<MaskedInput
      {...props}
      addonBefore={prefixSelector}
      style={{
        width: '100%',
      }}
      className={classes.input}
      size={"large"}
      mask={'(000) 000-00-00'}
      inputMode="tel"
    />*/
  );
};

export default PhoneInput;