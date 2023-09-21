import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './consumer.module.scss';
import {Card, Col, Divider, Row, Table} from "antd";
import bg from '../../../../images/page-img/consumer-top-img.jpg'
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import vtbCard from "../../../../images/page-img/vtb-card.png";



class Consumer extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 style={{color: "#ffffff", textAlign: "left", padding: "0 16px", marginBottom: 16}}>Потребительские кредиты</h1>
        <Card
          className={classes.card}
          bodyStyle={{padding: "24px 16px 24px 16px"}}
        >
          <h3 style={{marginBottom: 16}}>
            Заявка на получение кредита наличными без залога
          </h3>
          <p style={{marginBottom: 16}}>
            Наша программа товарного кредитования позволит оформить заём на покупку:
          </p>
          <ul className="list">
            <li>
              мебели;
            </li>
            <li>
              крупной и мелкой бытовой техники;
            </li>
            <li>
              компьютеров, комплектующих и расходных материалов;
            </li>
            <li>
              автозапчастей, услуг СТО;
            </li>
            <li>
              строительных материалов.
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
              <div style={{marginTop: 24}}>Комиссии, связанные с выдачей кредита: отсутствуют.</div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Consumer);