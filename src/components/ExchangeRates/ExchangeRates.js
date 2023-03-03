import React from 'react';
import classes from './ExchangeRates.css'

const ExchangeRates = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.ratesItem}>
        <span className={classes.icon}></span>
        <span>447,1 - 449,7 ₸</span>
        <span>^</span>
      </div>
      <div className={classes.ratesItem}>
        <span className={classes.icon}></span>
        <span>447,1 - 449,7 ₸</span>
        <span>^</span>
      </div>
    </div>
  );
};

export default ExchangeRates;