import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../notAutorized/Services/index.module.scss";
import {Button, Card, Col, Row} from "antd";
import vtbCard from "../../../images/page-img/vtb-card.png";
import PrimaryButton from "../../ui/buttons/PrimaryButton";



class IssueCard extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h2 style={{marginBottom: 20}}>Выпустить карту</h2>
        <Row gutter={16}>
          <Col span={24} style={{marginTop: 0}}>
            <Card
              style={{borderRadius: 11}}
              bodyStyle={{padding: "24px 16px 24px 16px", }}
            >
              <div style={{textAlign: "center"}}>
                <img alt="VTB карта" src={vtbCard} className={classes.creditCard}/>
                <h3 style={{marginBottom: 16}}>
                  Виртуальная карта Мир
                </h3>
                <p style={{marginBottom: 0}}>
                  Наши специалисты свяжутся с Вами и предоставят подробную консультацию, определят оптимальные условия кредитования для Вашего бюджета.
                </p>
                <PrimaryButton
                  style={{marginTop: 20}}
                  title="Подробнее"
                  link="/card-info"
                />
              </div>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              style={{borderRadius: 11, marginTop: 16}}
              bodyStyle={{padding: "24px 16px 24px 16px"}}

            >
              <div style={{textAlign: "center"}}>
                <img alt="VTB карта" src={vtbCard} className={classes.creditCard}/>
                <h3 style={{marginBottom: 16}}>
                  Виртуальная карта Мир
                </h3>
                <p style={{marginBottom: 0}}>
                  Наши специалисты свяжутся с Вами и предоставят подробную консультацию, определят оптимальные условия кредитования для Вашего бюджета.
                </p>
                <PrimaryButton
                  style={{marginTop: 20}}
                  title="Подробнее"
                  link="/card-info"
                />
              </div>
            </Card>
          </Col>
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

export default connect(mapStateToProps,mapDispatchToProps)(IssueCard);