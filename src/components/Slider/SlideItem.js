import React from 'react';
import classes from './slider.module.scss'

const SlideItem = (props) => {
  return (
    <div className={classes.slideBlock} {...props}>
      <div className={classes.slideItem}>
        {props.title}
      </div>
    </div>
  );
};

export default SlideItem;