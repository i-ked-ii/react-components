import React from "react";
import { HeadPageStyle } from "./style";
import { Link } from "react-router-dom";

const HeadPage = ({ title, navlink }) => {
  const pathname = window.location.pathname;
  return (
    <HeadPageStyle className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div className="banner_content text-center">
            <h2>{title}</h2>
            <div className="page_link">
              {navlink.map((i) => (
                <Link
                  className={pathname === i.path ? "active" : ""}
                  to={i.path}
                  key={i.key}
                >
                  {i.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeadPageStyle>
  );
};

export default HeadPage;
