import React from 'react';
import locale from "antd/locale/ru_RU";
import {ConfigProvider, DatePicker} from "antd";
import classes from "./dateSelect.module.scss"

const DateSelect = (props) => {
  return (
    <ConfigProvider locale={locale}>
      <DatePicker
        style={{width: "100%"}}
        className={classes.select}
        onChange={(data, dateString) => {
          props.onChange(props.name, dateString)
          return data
        }}
      />
    </ConfigProvider>
  );
};

export default DateSelect;