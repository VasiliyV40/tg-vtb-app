import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";
import {Button, Card} from "antd";
import vtbCard from "../../../images/page-img/vtb-card.png";
import PrimaryButton from "../../ui/buttons/PrimaryButton";



class IssueCard extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2 style={{marginBottom: 20}}>Выпустить карту</h2>
        <Card
          style={{borderRadius: 11}}
          bodyStyle={{padding: "24px 16px 32px 16px"}}
        >
          <div style={{display: "flex"}}>
            <img alt="VTB карта" src={vtbCard} className={classes.card}/>
          </div>

          <h3>
            Виртуальная карта Мир
          </h3>
          <h4>
            Бесплатно, действует 3 года
          </h4>
          <p>
            Идеальна для покупок онлайн.
            Привязывается к Samsung и Mir Pay.
          </p>
          <p>
            Бесплатна для «Профессионального» статуса
          </p>

          <PrimaryButton
            style={{marginTop: 20}}
            title="Заказать карту"
          />

          <PrimaryButton
            style={{marginTop: 20}}
            title="Подробнее"
            type
          />

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

export default connect(mapStateToProps,mapDispatchToProps)(IssueCard);