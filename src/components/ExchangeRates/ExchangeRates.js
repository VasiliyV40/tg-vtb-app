import React from 'react';
import classes from './exchange.module.scss'
import ExchangeItem from './ExchangeItem';

const ExchangeRates = (props) => {
  return (
    <div className={classes.wrapper}>
      <ExchangeItem
        value="447,1 - 449,7"
        currency="usd"
        chart="up"
      />
      <ExchangeItem
        value="5,9 - 6,1"
        currency="rub"
        chart="down"
      />
    </div>
  );
};

export default ExchangeRates;