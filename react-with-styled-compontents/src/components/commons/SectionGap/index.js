import React from "react";
import PropTypes from "prop-types";
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

SectionGap.propTypes = {
  className: PropTypes.string,
  titleClass: PropTypes.string,
  toptitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  desc: PropTypes.string,
  hasButton: PropTypes.bool,
  btnClass: PropTypes.string,
  btnTxt: PropTypes.string,
  imgSrc: PropTypes.string,
  imgTitle: PropTypes.string,
  onClick: PropTypes.func,
};
SectionGap.defaultProps = {
  className: "",
};
export default SectionGap;
