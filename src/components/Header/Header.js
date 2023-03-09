import React from 'react';
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import ExchangeRates from '../ExchangeRates';

const Header = (props) => {

  const {tg, user, onClose } = useTelegram();
  tg.BackButton.isVisible = true

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