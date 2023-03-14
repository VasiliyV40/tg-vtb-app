import React from 'react';
import classes from './button.module.scss';
import DangerousHTML from "react-dangerous-html/lib/DangerousHTML";
import {Link} from "react-router-dom";

const ServiceButton = (props) => {
  const {link} = props
  return (
    <div>
      <Link to={`./${link}`}>
        <div className={`${classes.wrapper} ${props.vertical ? classes.vertical : null} ${props.roundIcon ? classes.service : null}`}>
          {
            props.icon ? <img src={props.icon} style={props.bgColor && props.roundIcon ? { background: props.bgColor } : null} className={`${props.roundIcon ? classes.round : null}`}/> : null
          }
          <DangerousHTML html={props.title} className={props.vertical ? classes.verticalText : classes.text} />
        </div>
      </Link>
    </div>

  );
};

export default ServiceButton;