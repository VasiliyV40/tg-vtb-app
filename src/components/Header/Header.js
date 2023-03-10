import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import ExchangeRates from '../ExchangeRates';
import account from "../../../images/account_icon.svg";

const Header = (props) => {

  const {tg, user, onClose } = useTelegram();
  tg.BackButton.isVisible = true;
  tg.WebAppUser.photo_url = "https://smmplanner.com/blog/content/images/2021/07/SaDlk7FV3e0--1-.jpg"


  return (
    <header
      className={"header " + props.className}
    >
      {/*<Button onClick={onClose}>Закрыть</Button>*/}

      <ExchangeRates/>

    </header>
  );
};

export default Header;