import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "./auto.module.scss";
import {Card, Col, Divider, Form, Row} from "antd";
import bg from "../../../../images/page-img/auto-top-img.png";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Select from "../../../ui/selects/Select";
import InputNumber from "../../../ui/inputs/InputNumber";



class Auto extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <img alt="Кредит" src={bg} className={classes.background}/>
        <h1 style={{color: "#ffffff", textAlign: "left", padding: "0 16px", marginBottom: 16}}>Автокредит без&nbsp;залога</h1>
        <Card
          className={classes.card}
          bodyStyle={{padding: "24px 16px 24px 16px"}}
        >
          <h3 style={{marginBottom: 16}}>
            Покупайте автомобиль за 1 день!
          </h3>
          <ul className="list">
            <li>
              Без первоначального взноса;
            </li>
            <li>
              Без залога;
            </li>
            <li>
              Без страхования КАСКО;
            </li>
            <li>
              С любым сроком эксплуатации автомобиля.
            </li>
          </ul>
        </Card>
        <PrimaryButton
          style={{marginTop: 16}}
          title="Заказать звонок"
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

        {/*<h2 style={{marginBottom: 20}}>Автокредит без залога</h2>

        <Card
          bodyStyle={{padding: "16px 16px 32px 16px"}}
          className={classes.card}
        >
          <img alt="Кредит" src={bg} className={classes.background}/>
          <h3>Покупайте автомобиль за 1 день!</h3>
          <ul className="list">
            <li>
              Без первоначального взноса;
            </li>
            <li>
              Без залога;
            </li>
            <li>
              Без страхования КАСКО;
            </li>
            <li>
              С любым сроком эксплуатации автомобиля.
            </li>
          </ul>

          <PrimaryButton
            title="Заказать звонок"
            size="large"
            style={{marginTop: 20}}
            link="/orderCallback"
          />

          <h3 style={{marginTop: 20}}>Условия предоставления</h3>

          <Row gutter={[16, 0]} className={classes.row}>
            <Col span={12}>
              Целевая группа
            </Col>
            <Col span={12}>
              Валюта кредита
            </Col>
            <Col span={12}>
              от 22 лет**
            </Col>
            <Col span={12}>
              тенге
            </Col>
          </Row>
          <Row gutter={[16, 0]} className={classes.row}>
            <Col span={12}>
              Ставка вознаграждения
            </Col>
            <Col span={12}>
              ГЭСВ*
            </Col>
            <Col span={12}>
              с комиссией от 23% годовых,  без комиссии 43% годовых.
            </Col>
            <Col span={12}>
              от 25,6%
            </Col>
          </Row>
          <Row gutter={[16, 0]} className={classes.row} >
            <Col span={12}>
              Срок
            </Col>

            <Col span={12}>
              Сумма
            </Col>
            <Col span={12}>
              от 12 до 84 месяцев
            </Col>
            <Col span={12}>
              от 500 000 тенге до 6 000 000 тенге
            </Col>

          </Row>
          <p>
            *Годовая эффективная ставка вознаграждения<br/>
            **Гражданство РК, от 22 лет до пенсионного возраста. Последний платеж по кредиту должен быть осуществлен до достижения Заемщиком пенсионного возраста.
          </p>

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

export default connect(mapStateToProps, mapDispatchToProps)(Auto);