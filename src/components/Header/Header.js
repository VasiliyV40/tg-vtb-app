import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = (props) => {

  const {user, onClose } = useTelegram()

  return (
    <header
      className={"header " + props.className}
    >
      <Button onClick={onClose}>Закрыть</Button>
      <span>{user?.username}</span>
    </header>
  );
};

export default Header;