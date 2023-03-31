import React from 'react';
import classes from './slider.module.scss'
import {useNavigate} from "react-router-dom";




const SlideItem = (props) => {
  let navigate = useNavigate();

  const action = () => {
    if (props.action){
      props.action()
    } else if (props.link){
      navigate(props.link)
    } else null
  }
  return (
    <div className={classes.slideBlock} >
      <div className={classes.slideItem} onClick={action} style={{backgroundColor:props?.bgColor, color:props?.color, backgroundImage: `url(${props?.background})`}}>

        <div className={classes.innerWrapper}>
          {props.icon ? <img alt={props.title} src={props.icon} className={classes.icon} /> : null}
          <div className={classes.text}>{props?.title}</div>
        </div>

      </div>
    </div>
  );
};

export default SlideItem;