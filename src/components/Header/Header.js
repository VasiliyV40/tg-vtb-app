import React from 'react';
import Button from "../Button/Button";

const Header = (props) => {

  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  }

  return (
    <Header
      className={"header " + props.className}
    >
      <Button onClick={onClose}>Закрыть</Button>
      <span>{tg.initDataUnsafe?.user?.username}</span>
    </Header>
  );
};

export default Header;