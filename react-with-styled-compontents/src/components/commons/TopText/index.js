import React from "react";
import PropTypes from "prop-types";
import { TopTextStyle } from "./style";

const TopText = ({ className, title }) => {
  return (
    <TopTextStyle className={`top_text ${className}`}>
      {title} <span></span>
    </TopTextStyle>
  );
};

TopText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
TopText.defaultProps = {
  className: "",
};
export default TopText;
