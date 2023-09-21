import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "./cardInfo.module.scss";
import vtbCard from "../../../images/page-img/vtb-card.png";
import {Card, Col, Divider, Row} from "antd";
import PrimaryButton from "../../ui/buttons/PrimaryButton";



class CardInfo extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <img alt="VTB карта" src={vtbCard} className={classes.creditCard}/>
        <h1 style={{color: "#ffffff", textAlign: "left", padding: "0 16px", marginBottom: 16}}>Виртуальная карта&nbsp;Мир</h1>
        <Card
          className={classes.card}
          bodyStyle={{padding: "24px 16px 24px 16px"}}
        >
          <h3 style={{marginBottom: 16}}>
            Бесплатно, действует 3 года
          </h3>
          <p style={{marginBottom: 0}}>
            Идеальна для покупок онлайн. Привязывается к Samsung и Mir Pay.
          </p>
        </Card>
        <PrimaryButton
          style={{marginTop: 16}}
          title="Заказать карту"
        />
        <Card
          className={classes.card}
          style={{marginTop: 16}}
          bodyStyle={{padding: "24px 16px 24px 16px"}}
        >
          <h3 style={{marginBottom: 16}}>
            Условия предоставления
          </h3>
          <Row gutter={[16,16]}>
            <Col span={12}>
              <div>
                Целевая группа
              </div>
              <b>от 22 лет**</b>
            </Col>
            <Col span={12}>
              <div>
                Валюта кредита
              </div>
              <b>тенге</b>
            </Col>
            <Col span={12}>
              <div>
                Валюта кредита
              </div>
              <b>тенге</b>
            </Col>
            <Col span={12}>
              <div>
                Срок
              </div>
              <b>от 12 до 84 месяцев</b>
            </Col>
            <Col span={24}>
              <div>
                Сумма
              </div>
              <b>от 500 000  до 6 000 000 тенге</b>
            </Col>
            <Col span={24}>
              <div>
                Ставка вознаграждения
              </div>
              <b>с комиссией от 23% годовых, без комиссии 43% годовых.</b>
            </Col>
            <Col span={24}>
              <Divider style={{marginTop: 0, marginBottom: 0}}/>
            </Col>
            <Col className={classes.disclaim}>
              *Годовая эффективная ставка вознаграждения<br/>
              **Гражданство РК, от 22 лет до пенсионного возраста. Последний платеж по кредиту должен быть осуществлен до достижения Заемщиком пенсионного возраста.
            </Col>
          </Row>
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

export default connect(mapStateToProps,mapDispatchToProps)(CardInfo);