import React from 'react';
import "./ExchangeRates.css"
import logo from "../../images/index-bg.svg"

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
        <span>447,1 - 449,7 ₸</span>
        <span>^</span>
      </div>
      <img src={logo}/>
    </div>
  );
};

export default ExchangeRates;