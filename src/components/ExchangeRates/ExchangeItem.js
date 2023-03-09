import React from 'react';
import classes from './exchange.module.scss'
import './country.css'



const ExchangeItem = (props) => {
  const {value, currency, chart} = props


  return (
    <div className={classes.ratesItem}>
      <span className={`${classes.icon} ${currency}`}/>
      <span className={classes.value}>{value} ₸</span>
      <span className={`${classes.chart} ${chart === 'up' ? classes.up : classes.down}`}/>
    </div>
  );
};

export default ExchangeItem;