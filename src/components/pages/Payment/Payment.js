import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";
import {Card, Col, Row} from "antd";
import ServiceButton from "../../ui/buttons/ServiceButton";
import steam from "../../../images/payment/steam_icon.png";
import beeline from "../../../images/payment/beeline_icon.png";
import olx from "../../../images/payment/olx_icon.png";
import tele2 from "../../../images/payment/tele2_icon.png";
import xbet from "../../../images/payment/tele2_icon.png";
import activ from "../../../images/payment/activ_icon.png";
import olimpbet from "../../../images/payment/olimpbet_icon.png";
import altel from "../../../images/payment/altel_icon.png";
import onay from "../../../images/payment/onay_icon.png";
import umoney from "../../../images/payment/umoney_icon.png";



class Payment extends Component {
  render() {

    const service = [
      {
        title: <div>Steam</div>,
        icon: steam,
        link: "#"
      },
      {
        title: <div>Beeline</div>,
        icon: beeline,
        link: "#"
      },
      {
        title: <div>OLX.kz</div>,
        icon: olx,
        link: "#"
      },
      {
        title: <div>tele2</div>,
        icon: tele2,
        link: "#"
      },
      {
        title: <div>1xbet.kz</div>,
        icon: xbet,
        link: "#"
      },
      {
        title: <div>Activ</div>,
        icon: activ,
        link: "#"
      },
      {
        title: <div>olimpbet.kz</div>,
        icon: olimpbet,
        link: "#"
      },
      {
        title: <div>Altel 4G</div>,
        icon: altel,
        link: "#"
      },
      {
        title: <div>Транспортная карта</div>,
        icon: onay,
        link: "#"
      },
      {
        title: <div>ЮMoney</div>,
        icon: umoney,
        link: "#"
      },
    ]


    return (
      <div className={classes.wrapper}>
        <h2>Платежи</h2>
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


export default connect(mapStateToProps,mapDispatchToProps)(Payment);