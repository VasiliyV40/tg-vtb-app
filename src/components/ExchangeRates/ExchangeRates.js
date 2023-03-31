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

    async function fetchAsync (url) {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    }



    const test = () => {
      axios.get("http://qiwi.kz:8001/voucher")
        .then(resp => console.log("GET => ", resp))

      /*axios({
        method: 'get',
        url: 'https://nationalbank.kz/rss/rates_all.xml',
        responseType: 'text/xml',
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(resp => console.log("RATE =>", resp))
        .catch(error => console.log("Error => ", error))*/
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
      </div>
    );
  }

}

export default ExchangeRates;