import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import ExchangeRates from '../ExchangeRates';
import { useNavigate } from "react-router-dom";


const Header = (props) => {

  const {tg, user, onClose } = useTelegram();
  const navigate = useNavigate();

  const aaa = () => {
    console.log("FFFFFF => ");
    navigate(-1)
  }


  return (
    <header
      className={"header " + props.className}
    >
      <Button onClick={() => aaa()}>Закрыть</Button>
      <ExchangeRates/>
    </header>
  );
};

export default Header;