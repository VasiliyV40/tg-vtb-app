import React from 'react';
import classes from './accountItem.module.scss'
import kz from '../../../../images/account/kz.svg'
import usd from '../../../../images/account/usd.svg'
import eur from '../../../../images/account/eur.svg'
import calendar from '../../../../images/account/calendar_icon.svg'
import defaultCard from '../../../../images/blank_card_icon.svg'
import {Divider} from "antd";

const AccountItem = (props) => {
  const {
    data
    /*: {name, lastNumb, value, type, currency}*/
  } = props

  const showIcon = (type) => {
    switch (type){
      case 1:
        return kz;
      case 2:
        return usd;
      case 3:
        return eur;
      case 4:
        return calendar;
      default:
        return defaultCard;
    }
  }

  const backgroundColor = (type) => {
    switch (type){
      case 1:
        return "#2BB3FF";
      case 2:
        return "#5FE04B";
      case 3:
        return "#F2C937";
      case 4:
        return "#DE3B3B";
      default:
        return "#ffffff";
    }
  }

  return (

    <div className={classes.wrapper}>
      {data?.map((el, key)=> {
        return (
          <>
            <div className={classes.item}>
              <div className={classes.icon} style={{background: backgroundColor(el.type)}}>
                <img alt={name} src={showIcon(el.type)} className={`${classes.img} ${el.type === 0 ? classes.full : ''}`}/>
              </div>
              <div className={classes.balance}>
                <span className={classes.title}>{el?.name}</span>
                <span className={classes.number}>{el?.lastNumb}</span>
              </div>
              <div className={classes.summ}>{el?.value} {el?.currency}</div>
            </div>
            {
              key + 1 < data.length ?
                <Divider/> : null
            }
          </>
        )
      })}
     {/* <div className={classes.icon}>
        <img alt={name} src={showIcon(type)} className={`${classes.img} ${type === 0 ? classes.full : ''}`}/>
      </div>
      <div>
        <div className={classes.name}>{name} *{lastNumb}</div>
        <div className={classes.value}>{value} {currency}</div>
      </div>*/}
    </div>
  );
};

export default AccountItem;