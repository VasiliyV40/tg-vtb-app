import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import ExchangeRates from '../ExchangeRates';
import { useNavigate, useLocation } from "react-router-dom";


const Header = (props) => {

  const {tg, user, onClose } = useTelegram();
  let location = useLocation();
  const navigate = useNavigate();

  if(location.pathname === "/"){
    tg.BackButton.isVisible = false;
  } else {
    tg.BackButton.isVisible = true;
    tg.BackButton.onClick(() =>navigate(-1));
  }
  

  const aaa = () => {
    navigate(-1)
    console.log("FFFFFF =>", location)
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