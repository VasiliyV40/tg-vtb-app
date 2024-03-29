import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './cash.module.scss';
import {
  Card,
  Col,
  Form,
  Row,
  Tabs,
  notification,
  Divider,
} from 'antd';

import PhoneInput from "../../../ui/inputs/PhoneInput";
import PrimaryButton from "../../../ui/buttons/PrimaryButton";
import {changeInput, clearForm} from "../../../../store/actions/gettingLoan";
import TextInput from "../../../ui/inputs/TextInput";
import Select from "../../../ui/selects/Select";
import MaskInput from "../../../ui/inputs/MaskInput";
import DateSelect from "../../../ui/selects/DateSelect";
import Checkbox from "../../../ui/selects/Checkbox";
import Loader from "../../../Loader/Loader";

class Cash extends Component {

  render() {
    return (
      <div className={classes.wrapper}>
        <h1 style={{color: "#ffffff", textAlign: "left", padding: "0 16px", marginBottom: 16}}>Кредит<br/> наличными</h1>
        <Card
          className={classes.card}
          bodyStyle={{padding: "24px 16px 24px 16px"}}
        >
          <h3 style={{marginBottom: 16}}>
            Заявка на получение кредита наличными без залога
          </h3>
          <p style={{marginBottom: 16}}>
            Уважаемый клиент! Вы можете заполнить предварительную заявку на получение кредита не посещая офис Банка.
          </p>
        </Card>
        <PrimaryButton
          style={{marginTop: 16}}
          title="Отправить заявку"
          link="/credits/form"
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
  return {
    form: state.gettingLoan
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInput: (name, value, filter) => dispatch(changeInput({name, value, filter})),
    clearForm: ()=> dispatch(clearForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cash);