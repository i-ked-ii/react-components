import React from "react";
import { TopTextStyle } from "./style";

const TopText = ({ title }) => {
  return (
    <TopTextStyle className="top_text">
      {title} <span></span>
    </TopTextStyle>
  );
};

export default TopText;
