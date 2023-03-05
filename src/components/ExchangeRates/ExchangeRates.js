import React from 'react';
import "./ExchangeRates.css"

const ExchangeRates = (props) => {
  return (
    <div className={'wrapper'}>
      <div className={'ratesItem'}>
        <span className={'icon'}></span>
        <span>447,1 - 449,7 ₸</span>
        <span>^</span>
      </div>
      <div className={'ratesItem'}>
        <span className={'icon'}></span>
        <span className={'icon'}>447,1 - 449,7 ₸</span>
        <span>^</span>
      </div>
    </div>
  );
};

export default ExchangeRates;