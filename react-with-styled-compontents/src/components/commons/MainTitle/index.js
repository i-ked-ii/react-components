import React from "react";
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

export default MainTitle;
