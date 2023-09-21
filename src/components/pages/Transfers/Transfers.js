import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";
import mir from "../../../images/mir-logo.svg";
import vtb from "../../../images/vtb_icon.svg";
import korona from "../../../images/korona_icon.svg";
import wUnion from "../../../images/wUnion_icon.svg";

import {Col, Row} from "antd";
import ServiceButton from "../../ui/buttons/ServiceButton";



class Transfers extends Component {
  render() {
    const service = [
      {
        title: <div>На карту<br/> МИР</div>,
        icon: mir,
        link: "accounts",
        bgColor: "#0F754E"
      },
      {
        title: <div>На карту<br/> ВТБ</div>,
        icon: vtb,
        link: "issue-card",
        bgColor: "#00AAFF"
      },
      {
        title: <div>Золотая<br/>Корона</div>,
        icon: korona,
        link: "payments",
        bgColor: "#df212f"
      },
      {
        title: <div>Western<br/>Union</div>,
        icon: wUnion,
        link: "western-union",
        bgColor: "#000000"
      },
    ]

    return (
      <div className={classes.wrapper}>
        <h2>Переводы</h2>
        <Row gutter={[16, 16]} style={{marginBottom: 16, marginTop: 20}}>
          {
            service.map((el, key) => {
              return (
                <Col className="gutter-row" key={key} span={12}>
                  <ServiceButton title={el.title} icon={el.icon} roundIcon bgColor={el.bgColor} link={el.link} vertical />
                </Col>
              )
            })
          }
        </Row>
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

export default connect(mapStateToProps,mapDispatchToProps)(Transfers);