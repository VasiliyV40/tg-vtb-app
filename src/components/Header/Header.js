import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import ExchangeRates from "../ExchangeRates/ExchangeRates";

const Header = (props) => {

  const {user, onClose } = useTelegram()

  return (
    <header
      className={"header " + props.className}
    >
      <Button onClick={onClose}>Закрыть</Button>

      <ExchangeRates/>

    </header>
  );
};

export default Header;