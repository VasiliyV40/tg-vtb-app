import React, {Component} from 'react';
import {connect} from 'react-redux';
import credit from '../../../../images/credit-icon.svg';
import accountIcon from '../../../../images/account_icon.svg';
import classes from '../Services/index.module.scss';
import {Col, Row} from 'antd';
import ServiceButton from '../../../ui/buttons/ServiceButton';
import PrimaryButton from '../../../ui/buttons/PrimaryButton';
import {Link} from "react-router-dom";
import Button from "../../../Button";
import withRouter from "../../../../hoc/withRouter";



class Credits extends Component {
  render() {
    const service = [
      {
        title: "Кредит наличными",
        icon: accountIcon,
        link: "cash"
      },
      {
        title: "Автокредит",
        icon: accountIcon,
        link: "auto"
      },
      {
        title: "Потребительские кредиты",
        icon: accountIcon,
        link: "consumer"
      },
    ]

    return (
      <div className={classes.wrapper}>
        <Row gutter={[16, 16]} style={{marginBottom: 16}}>
          {
            service.map((el, key) => {
              return (
                <Col className="gutter-row" key={key} span={this.props.vertical ? 12 : 24}>
                  <ServiceButton title={el.title} icon={el.icon} link={el.link} />
                </Col>
              )
            })
          }
          <Col span={24}>
            <PrimaryButton title="Назад" link="/" />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Credits));