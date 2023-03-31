import React, {Component} from 'react';
import classes from './exchange.module.scss'
import ExchangeItem from './ExchangeItem';
import axios from "axios";



class ExchangeRates extends Component {
  state = {
    rate: {}
  }

  /*componentDidMount() {
    axios.post('https://nationalbank.kz/rss/rates_all.xml')
      .then(resp => console.log("RATE =>", resp))
  }*/

  render() {

    const test = () => {
      axios.get('https://nationalbank.kz/rss/rates_all.xml')
        .then(resp => console.log("RATE =>", resp)).catch(error => console.log("Error => ", error))
    }

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
        <div onClick={test}>
          fdfdfd
        </div>
      </div>
    );
  }

}

export default ExchangeRates;