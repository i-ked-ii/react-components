import React from "react";
import { ButtonStyle } from "./style";

const Button = ({ className, onClick, btnTxt }) => {
  return (
    <ButtonStyle className={className} onClick={onClick}>
      {btnTxt}
    </ButtonStyle>
  );
};

export default Button;
