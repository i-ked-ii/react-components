import React from "react";
import PropTypes from "prop-types";
import TopText from "../TopText";
import Button from "../Button";
import { MainTitleStyle } from "./style";

const MainTitle = ({
  className,
  toptitle,
  title,
  subtitle,
  desc,
  hasButton,
  btnClass,
  btnTxt,
  onClick,
}) => {
  return (
    <MainTitleStyle className={className}>
      <TopText title={toptitle} />
      <div className="main_title text-left">
        <h2>
          {title} <br />
          {subtitle}
        </h2>
        <p>{desc}</p>
        {hasButton === true ? (
          <Button className={btnClass} btnTxt={btnTxt} onClick={onClick} />
        ) : (
          ""
        )}
      </div>
    </MainTitleStyle>
  );
};

MainTitle.propTypes = {
  className: PropTypes.string,
  toptitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  desc: PropTypes.string,
  hasButton: PropTypes.bool,
  btnClass: PropTypes.string,
  btnTxt: PropTypes.string,
  onClick: PropTypes.func,
};
MainTitle.defaultProps = {
  className: "",
};
export default MainTitle;
