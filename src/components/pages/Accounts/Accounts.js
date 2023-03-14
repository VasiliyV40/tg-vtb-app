import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";
import {Card, Divider, Skeleton} from "antd";
import AccountItem from "../../ui/account/AccountItem";


class Accounts extends Component {
  state = {
    data: null,
    loading: false
  }

  fetchDataObj = {
    totalSum: "3 637 293 ₸",
    debt: "3 500 000 ₸",
    account: [
      {
        type: 1,
        name: "visa Gold",
        lastNumb: "5521",
        value: "460 341",
        currency: "₸"
      },
      {
        type: 1,
        name: "visa Platinum",
        lastNumb: "0061",
        value: "1 017 200",
        currency: "$"
      },
      {
        type: 2,
        name: "mc Gold",
        lastNumb: "9020",
        value: "3 500",
        currency: "€"
      },
      {
        type: 2,
        name: "mc Platinum",
        lastNumb: "1194",
        value: "4 200",
        currency: "₸"
      },
      {
        type: 1,
        name: "visa Gold",
        lastNumb: "5521",
        value: "0",
        currency: "₸"
      },
    ]
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    setTimeout(() => this.fetchData(this.fetchDataObj), 3000)
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

        <h2>Cчета</h2>
        <Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px", }}
        >
          <Skeleton loading={loading} active>
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
        </Card>
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