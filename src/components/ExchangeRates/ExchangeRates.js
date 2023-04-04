import React, {Component} from 'react';
import classes from './exchange.module.scss'
import ExchangeItem from './ExchangeItem';
import axios from "axios";
import {Skeleton} from "antd";



class ExchangeRates extends Component {
  state = {
    rate: [],
    loading: true
  }

  componentDidMount() {
    axios.get('https://api.proidea.tech/exchange/get_rates')
      .then(({data}) => this.setState({rate: data.item, loading: false}))
      .catch(error => console.log("Error => ", error))
  }

  render() {

    console.log("State =>", this.state)

    return (
      <div className={classes.wrapper}>
        {
          <Skeleton
            size={"small"}
            style={{
              display: "flex"
            }}
            avatar={{
              size: "small"
            }}
            paragraph={{
              rows: 0,
              style: {marginTop: 0}
            }}
            title={{
              style: {margin: "5px 0 0 0"}
            }}
            loading={this.state.loading}
          >
            {
              this.state.rate.map((el, ind) => {
                return (
                  <ExchangeItem
                    key={ind}
                    value={el.description}
                    currency={el.title.toLowerCase()}
                    chart={el.index.toLowerCase()}
                  />
                )
              })
            }
          </Skeleton>
        }
        {/*<ExchangeItem
          value="447,1 - 449,7"
          currency="usd"
          chart="up"
        />
        <ExchangeItem
          value="5,9 - 6,1"
          currency="rub"
          chart="down"
        />*/}
      </div>
    );
  }

}

export default ExchangeRates;