import React from 'react';
import classes from './accountItem.module.scss'
import visa from '../../../../images/visa_icon.svg'
import mastercard from '../../../../images/mastercard_icon.svg'
import defaultCard from '../../../../images/blank_card_icon.svg'

const AccountItem = (props) => {
  const {data: {name, lastNumb, value, type, currency}} = props

  const showIcon = (type) => {
    switch (type){
      case 1:
        return visa;
      case 2:
        return mastercard;
      default:
        return defaultCard;
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.icon}>
        <img alt={name} src={showIcon(type)} className={`${classes.img} ${type === 0 ?  classes.full : ''}`}/>
      </div>
      <div>
        <div className={classes.name}>{name} *{lastNumb}</div>
        <div className={classes.value}>{value} {currency}</div>
      </div>
    </div>
  );
};

export default AccountItem;