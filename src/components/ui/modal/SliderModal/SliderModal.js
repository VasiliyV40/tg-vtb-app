import React, {Component} from 'react';
import {Modal} from "antd";
import classes from './sliderModal.module.scss'
import SliderImage from '../../../../images/slider-icon/slider-first-img.svg'
import close from '../../../../images/close_white_icon.svg'
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";

class SliderModal extends Component{


  render() {

    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: classes.slider
    };

    const CloseIcon = () => {
      return <img src={close} alt="Закрыть" />
    }

    return (
      <Modal
        {...this.props}
        className={classes.modal}
        bodyStyle={{backgroundColor:"transparent"}}
        footer={null}
        closeIcon={<CloseIcon/>}
      >
        <Slider {...settings}>
          <div className={classes.slideItem}>
            <img alt="Защитник" src={SliderImage} style={{width:"90%", maxWidth: "314px", margin: "100px auto 0 auto"}} />
            <h1 style={{textAlign: "left", margin: "auto"}}>Обезопасьте себя<br/>
              от мошенников!</h1>
          </div>
          <div className={`${classes.slideItem} ${classes.secondBg}`} style={{padding: 40, background: "linear-gradient(180deg, #367BE0 0%, #1B45C7 100%), #D9D9D9"}}>
            <h1 style={{textAlign: "left", margin: "55px auto 32px auto"}}>
              Мошенник может представиться сотрудником банка
            </h1>
            <div style={{marginBottom: "auto"}}>
              <p>
                Сотрудник банка никогда<br/>
                не запрашивают эти данные<br/>
                по телефону:
              </p>
              <ul>
                <li>
                  PIN-код
                </li>
                <li>
                  CVV-код
                </li>
                <li>
                  Код-пароль из СМС
                </li>
                <li>
                  Сумму на вашем счете
                </li>
              </ul>
            </div>
          </div>
          <div className={`${classes.slideItem} ${classes.secondBg}`} style={{padding: 40, background: "linear-gradient(180deg, #367BE0 0%, #1B45C7 100%), #D9D9D9"}}>
            <div style={{margin: "auto 0"}}>
              <h1 style={{textAlign: "left", margin: "20px auto 32px auto"}}>
                Топ-3 фраз мошенников
              </h1>
              <ol className={classes.numeric}>
                <li>
                  <h4>
                    В другом городе была совершена сомнительная операция по Вашей карте.
                  </h4>
                  <p>
                    Мошенники вовлекают вас в разговор и под предлогом обезопасить сбережения узнают конфиденциальную информацию по банковской карте.
                  </p>
                </li>
                <li>
                  <h4>
                    Сообщите примерную сумму на вашем счете.
                  </h4>
                  <p>
                    Так они хотят узнать не более какой суммы они смогут попытаться похитить с вашей карты.
                  </p>
                </li>
                <li>
                  <h4>
                    На ваше имя оформили кредит, срочно скачайте приложение по ссылке, которую мы вам сейчас отправим.
                  </h4>
                  <p>
                    Мошенники хотят ввести вас в стрессовую ситуацию, чтобы вы перешли по ссылке и указали конфиденциальную информацию.
                  </p>
                </li>
              </ol>
            </div>

          </div>
        </Slider>

      </Modal>
    )
  }
}
/*
const SliderModal = (props) => {
  const settings = {
    responsive: {
      0: { items: 1 }
    },
    keyboardNavigation: false,
    infinite: true,
    paddingLeft:0,
    paddingRight:0,
    mouseTracking: true,
  };

  const CloseIcon = () => {
    return <img src={close} alt="Закрыть" />
  }

  return (
    <Modal
      {...props}
      className={classes.modal}
      bodyStyle={{backgroundColor:"transparent"}}
      footer={null}
      closeIcon={<CloseIcon/>}
    >
      {
        <AliceCarousel mouseTracking {...settings}>
            <div className={classes.slideItem}>
              <img alt="Защитник" src={SliderImage} style={{width:"90%", maxWidth: "314px", margin: "100px auto 0 auto"}} />
              <h1 style={{textAlign: "left", margin: "auto"}}>Обезопасьте себя<br/>
                от мошенников!</h1>
            </div>
            <div className={`${classes.slideItem} ${classes.secondBg}`} style={{padding: 40, background: "linear-gradient(180deg, #367BE0 0%, #1B45C7 100%), #D9D9D9"}}>
              <h1 style={{textAlign: "left", margin: "80px auto 32px auto"}}>
                Мошенник может представиться сотрудником банка
              </h1>
              <div style={{marginBottom: "auto"}}>
                <p>
                  Сотрудник банка никогда<br/>
                  не запрашивают эти данные<br/>
                  по телефону:
                </p>
                <ul>
                  <li>
                    PIN-код
                  </li>
                  <li>
                    CVV-код
                  </li>
                  <li>
                    Код-пароль из СМС
                  </li>
                  <li>
                    Сумму на вашем счете
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${classes.slideItem} ${classes.secondBg}`} style={{padding: 40, background: "linear-gradient(180deg, #367BE0 0%, #1B45C7 100%), #D9D9D9"}}>
              <div style={{margin: "auto 0"}}>
                <h1 style={{textAlign: "left", margin: "0px auto 32px auto"}}>
                  Топ-3 фраз мошенников
                </h1>
                <ol className={classes.numeric}>
                  <li>
                    <h4>
                      В другом городе была совершена сомнительная операция по Вашей карте.
                    </h4>
                    <p>
                      Мошенники вовлекают вас в разговор и под предлогом обезопасить сбережения узнают конфиденциальную информацию по банковской карте.
                    </p>
                  </li>
                  <li>
                    <h4>
                      Сообщите примерную сумму на вашем счете.
                    </h4>
                    <p>
                      Так они хотят узнать не более какой суммы они смогут попытаться похитить с вашей карты.
                    </p>
                  </li>
                  <li>
                    <h4>
                      На ваше имя оформили кредит, срочно скачайте приложение по ссылке, которую мы вам сейчас отправим.
                    </h4>
                    <p>
                      Мошенники хотят ввести вас в стрессовую ситуацию, чтобы вы перешли по ссылке и указали конфиденциальную информацию.
                    </p>
                  </li>
                </ol>
              </div>

            </div>
          </AliceCarousel>
      }


    </Modal>
  );
};*/

export default SliderModal;