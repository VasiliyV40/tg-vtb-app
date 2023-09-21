import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";
import {Card, Divider, Skeleton} from "antd";
import AccountItem from "../../ui/account/AccountItem";
import portmone from "../../../images/account/portmone_icon.svg";
import calendar from '../../../images/account/calendar_icon.svg'


class Accounts extends Component {
  state = {
    data: null,
    loading: false
  }

  fetchDataObj = {
    totalSum: "3 637 293 ₸",
    debt: [
      {
        type: 4,
        name: "Ежемесячный платеж:",
        lastNumb: "5521",
        value: "460 341",
        currency: "₸"
      },
    ],
    account: [
      {
        type: 1,
        name: "Текущий счет",
        lastNumb: "Visa Gold *5521",
        value: "460 341",
        currency: "₸"
      },
      {
        type: 2,
        name: "Текущий счет",
        lastNumb: "Visa Platinum *0061",
        value: "1 341",
        currency: "$"
      },
      {
        type: 3,
        name: "Текущий счет",
        lastNumb: "MC Platinum *1194",
        value: "4 641",
        currency: "€"
      },
    ]
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    setTimeout(() => this.fetchData(this.fetchDataObj), 1000)
  }

  fetchData = (data) => {
    this.setState({
      data: data,
      loading: false
    })
  }

  render() {
    const {data, loading} = this.state

    return (
      <div className={classes.wrapper}>

        <div
          className={classes.card}
        >
          <Skeleton loading={loading} active>
            <div className={classes.accIcon} style={{backgroundColor: "#4D81E9"}}><img src={portmone}/></div>
            <div className={classes.balance}>
              <span className={classes.title}>Общий баланс:</span>
              <span className={classes.sumBig}>{data?.totalSum}</span>
            </div>
          </Skeleton>
        </div>

        <span className={classes.titleCounter}>Cчета ({data?.account?.length})</span>

        <div
          className={classes.card}
        >
          <Skeleton loading={loading} active>
            <AccountItem data={data?.account}/>
          </Skeleton>
        </div>

        <span className={classes.titleCounter}>Cчета ({data?.debt?.length})</span>

        <div
          className={classes.card}
        >
          <Skeleton loading={loading} active>
            <div className={classes.accIcon} style={{backgroundColor: "#DE3B3B"}}>
              <img src={calendar}/>

            </div>
            <span className={classes.credText}>
              Ежемесячный<br/> платеж:
            </span>
            <div className={classes.balance}>
              <span className={classes.sumMiddle}>{data?.totalSum}</span>
              <span className={classes.title}>до 28 декабря</span>
            </div>
          </Skeleton>
        </div>

        {/*<Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px"}}
          className={classes.card}
        >
          <Skeleton loading={loading} active>
            <div></div>
            <Divider orientation="left">Баланс:</Divider>
            <h1>{data?.totalSum}</h1>

            <Divider orientation="left">Счета:</Divider>
            <div style={{marginTop: 20}}>
              {data?.account.map((el, ind)=>{
                return (
                  <AccountItem key={ind} data={el}/>
                )
              })}
            </div>

            <Divider orientation="left">Задолженность:</Divider>
            <h1>{data?.debt}</h1>
          </Skeleton>
        </Card>*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(Accounts);