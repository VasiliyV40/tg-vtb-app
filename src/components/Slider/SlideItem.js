import React from 'react';
import classes from './slider.module.scss'

const SlideItem = (props) => {
  return (
    <div className={classes.slideBlock} >
      <div className={classes.slideItem} onClick={props.action? ()=> props.action() : null} style={{backgroundColor:props?.bgColor, color:props?.color}}>

        <div className={classes.innerWrapper}>
          {props.icon ? <img alt={props.title} src={props.icon} className={classes.icon} /> : null}
          <div className={classes.text}>{props?.title}</div>
        </div>

      </div>
    </div>
  );
};

export default SlideItem;