import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import ExchangeRates from '../ExchangeRates';
import account from "../../../images/account_icon.svg";

const Header = (props) => {

  const {tg, user, onClose } = useTelegram();
  tg.BackButton.isVisible = true;
  tg.WebAppUser.photo_url = "https://relaxed-seahorse-0c907a.netlify.app/static/media/credit-icon.6ecac5f4e62fca295873ca7e82c545fe.svg"


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