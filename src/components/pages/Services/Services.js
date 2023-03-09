import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from "../../Slider";
import classes from "../notAutorized/Services/index.module.scss";
import {Col, Row} from "antd";
import ServiceButton from "../../ui/buttons/ServiceButton";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import account from "../../../images/account_icon.svg";
import issueCard from "../../../images/issue_card_icon.svg";
import payment from "../../../images/payment_icon.svg";
import transfer from "../../../images/transfer_icon.svg";
import signIn from "../../../store/actions/authorization";



class Services extends Component {
  render() {
    const service = [
      {
        title: "Cчета",
        icon: account,
        link: "accounts"
      },
      {
        title: "Выпустить карту",
        icon: issueCard,
        link: "issue-card"
      },
      {
        title: "Платежи",
        icon: payment,
        link: "payments"
      },
      {
        title: "Переводы",
        icon: transfer,
        link: "transfers"
      },
    ]

    return (
      <div className={classes.wrapper}>
        <Row gutter={[16, 16]} style={{marginBottom: 16}}>
          {
            service.map((el, key) => {
              return (
                <Col className="gutter-row" key={key} span={12}>
                  <ServiceButton title={el.title} icon={el.icon} link={el.link} vertical />
                </Col>
              )
            })
          }
        </Row>
        <PrimaryButton title="Выйти" onClick={this.props.signOut} />
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signOut: (tel, pass, isLogin) => dispatch(signIn(tel, pass, isLogin))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);