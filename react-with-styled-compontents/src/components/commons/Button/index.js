import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./style";

const Button = ({ className, onClick, btnTxt }) => {
  return (
    <ButtonStyle className={className} onClick={onClick}>
      {btnTxt}
    </ButtonStyle>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  btnTxt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  className: "",
};
export default Button;
