import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import ExchangeRates from '../ExchangeRates';
import account from "../../../images/account_icon.svg";

const Header = (props) => {

  const {tg, user, onClose } = useTelegram();
  tg.BackButton.isVisible = true;
  tg.WebAppUser.photo_url = account


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