import React from 'react';
import {Modal} from "antd";
import classes from './sliderModal.module.scss'
import SliderImage from '../../../../images/slider-icon/slider-first-img.svg'

const SliderModal = (props) => {
  return (
    <Modal
      {...props}
      className={classes.modal}
      bodyStyle={{backgroundColor:"transparent"}}
      footer={null}
    >
      <img alt="Защитник" src={SliderImage} style={{width:"90%", maxWidth: "314px"}} />
      <h1>Обезопасьте себя
        от мошенников!</h1>
    </Modal>
  );
};

export default SliderModal;