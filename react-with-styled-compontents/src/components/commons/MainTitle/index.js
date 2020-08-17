import React from "react";
import { MainTitleStyle } from "./style";

const MainTitle = ({ title }) => {
  return (
    <MainTitleStyle class="top_text">
      {title} <span></span>
    </MainTitleStyle>
  );
};

export default MainTitle;
