import React from "react";
import MainTitle from "../MainTitle";
import { SectionGapStyle } from "./style";

const SectionGap = ({
  className,
  titleClass,
  toptitle,
  title,
  subtitle,
  desc,
  hasButton,
  btnClass,
  btnTxt,
  onClick,
  imgSrc,
  imgTitle,
}) => {
  return (
    <SectionGapStyle className={className}>
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5">
            <div className="about_img">
              <img src={imgSrc} alt={imgTitle} />
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5">
            <MainTitle
              className={titleClass}
              toptitle={toptitle}
              title={title}
              subtitle={subtitle}
              desc={desc}
              hasButton={hasButton}
              btnClass={btnClass}
              btnTxt={btnTxt}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </SectionGapStyle>
  );
};

export default SectionGap;
