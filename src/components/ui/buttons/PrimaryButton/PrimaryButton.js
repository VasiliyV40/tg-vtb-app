import React from 'react';
import {Button, Space} from 'antd';
import classes from './button.module.scss'
import {Link} from "react-router-dom";

const PrimaryButton = (props) => {
  const {title, link} = props
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      {link ?
        <Link to={`./${link}`}>
          <Button
            size="large"
            type="primary"
            block
            className={classes.button}
          >
            {title}
          </Button>
        </Link> :
        <Button
          size="large"
          type="primary"
          block
          className={classes.button}
          onClick={props?.onClick}
        >
          {title}
        </Button>
      }
    </Space>
  );
};

export default PrimaryButton;