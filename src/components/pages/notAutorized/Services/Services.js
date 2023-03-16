import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './index.module.scss';
import PrimaryButton from '../../../ui/buttons/PrimaryButton';
import credit from '../../../../images/credit-icon.svg';
import remittance from '../../../../images/remittance-ru-icon.svg'
import protectIcon from '../../../../images/slider-icon/protect_icon.svg'
import ServiceButton from '../../../ui/buttons/ServiceButton';
import {Col, Row, Modal} from 'antd';
import Slider from "../../../Slider";
import SliderModal from "../../../ui/modal/SliderModal";

class Services extends Component {

  state = {
    showModal : false
  }

  render() {


    const openModal = () => {
      this.setState({
        showModal: true
      });
    }

    const closeModal = () => {
      this.setState({
        showModal: false
      });
    }

    const service = [
      {
        title: "Взять<br/> кредит",
        icon: credit,
        link: "credits"
      },
      {
        title: "Переводы<br/> в Россию",
        icon: remittance,
        link: "transfers"
      },
    ]

    const history = [
      {
        color: "#ffffff",
        bgColor: "#3272F1",
        title: "Осторожно мошенники",
        icon: protectIcon,
        action: openModal,
      },
      {
        title: "История 2"
      },
      {
        title: "История 3"
      },
      {
        title: "История 4"
      },
      {
        title: "История 5"
      },
      {
        title: "История 6"
      },
      {
        title: "История 7"
      },
      {
        title: "История 8"
      },
    ]

    return (
      <>
        <Slider data={history}/>
        <div className={classes.wrapper}>
          <Row gutter={[16, 16]} style={{marginBottom: 16}}>
            {
              service.map((el, key) => {
                return (
                  <Col className="gutter-row" key={key} span={12}>
                    <ServiceButton title={el.title} icon={el.icon} link={el.link} vertical />
                  </Col>
                )
              })
            }
          </Row>
          <PrimaryButton title="Войти в личный кабинет" link="signIn" />
        </div>
        <SliderModal open={this.state.showModal} onCancel={closeModal} />

      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(Services);