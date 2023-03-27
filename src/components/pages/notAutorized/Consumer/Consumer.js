import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './consumer.module.scss';
import {Card, Col, Row, Table} from "antd";
import bg from '../../../../images/page-img/consumer-top-img.jpg'
import PrimaryButton from "../../../ui/buttons/PrimaryButton";



class Consumer extends Component {
  render() {

    const dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
      },
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];


    return (
      <div className={classes.wrapper}>
        <h2 style={{marginBottom: 20}}>Потребительские кредиты</h2>
        <Card
          bodyStyle={{padding: "16px 16px 32px 16px"}}
          className={classes.card}
        >
          <img alt="Кредит" src={bg} className={classes.background}/>
          <p>
            Банк ВТБ (Казахстан) предлагает кредиты на покупку товаров и услуг партнеров банка,
            размещенных в торговых центрах Нур-Султан,  Алматы, Уральск, Шымкент и Караганды.
            В ближайшее время эта услуга появится и в других регионах страны.
          </p>
          <p>
            Наша программа товарного кредитования позволит оформить заём на
          </p>
          <ul className="list">
            <li>
              <b>покупку:</b>
              <ul>
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
            </li>
          </ul>

          <PrimaryButton
            title="Заказать звонок"
            size="large"
            style={{marginTop: 20}}
          />

          <h3 style={{marginTop: 20}}>Кредит на потребительские цели</h3>

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
              от 0,1%
            </Col>
            <Col span={12}>
              от 0,1%
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
              от 3 до 36 месяцев
            </Col>
            <Col span={12}>
              до 3 000 000
            </Col>

          </Row>
          <p>
            *Годовая эффективная ставка вознаграждения<br/>
            **Гражданство РК, от 22 лет до пенсионного возраста.<br/>
            Первоначальный взнос: от 0-99%.
          </p>
          <p>
            Комиссии, связанные с выдачей кредита: отсутствуют.
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

export default connect(mapStateToProps,mapDispatchToProps)(Consumer);