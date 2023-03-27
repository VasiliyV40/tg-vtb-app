import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "./auto.module.scss";
import {Card, Col, Divider, Form, Row} from "antd";
import bg from "../../../../images/page-img/auto-top-img.jpg";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import Select from "../../../ui/selects/Select";
import InputNumber from "../../../ui/inputs/InputNumber";



class Auto extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2 style={{marginBottom: 20}}>Автокредит без залога</h2>

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

export default connect(mapStateToProps, mapDispatchToProps)(Auto);