import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from "antd";
import classes from "./successPage.module.scss";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import icon from "../../../images/success_green_icon.svg"



class SuccessPage extends Component {
  render() {
    return (
      <div className={classes.wrapper}>


        <Card
          className={classes.card}
          bodyStyle={{padding: "24px 16px 24px 16px"}}
        >
          <img src={icon} className={classes.icon}/>
          <h2 style={{marginBottom: 16}}>
            Ваша заявка
            успешно отправлена
          </h2>
          <p>
            Наши специалисты свяжутся с Вами и предоставят подробную консультацию, определят оптимальные условия кредитования для Вашего бюджета.
          </p>
        </Card>
        <PrimaryButton
          style={{marginTop: 16}}
          title="На главную"
          link="/"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(SuccessPage);