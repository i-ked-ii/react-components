import React from "react";
import Layout from "../../commons/Layout";
import styled from "styled-components";

const HomeBannerStyle = styled.section`
    background: url(../assets/img/banner/home-banner.png) no-repeat top center;
    background-position: center;
    background-size: cover;
    min-height: 890px;
    @media (max-width: 991px) {
        min-height: 750px;
    }
    @media (max-width: 767px) {
        background: #ffffff;
    }
    .banner_inner {
        width: 100%;
        min-height: 890px;
        @media (max-width: 991px) {
            min-height: 750px;
        }
        .home_right_img {
            padding-top: 197px;
            @media (max-width: 991px) {
                display: none;
            }
        }
    }
    .banner_content {
        text-align: left;
        @media (max-width: 991px) {
            margin-top: 150px;
        }
        h3 {
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: 2px;
            color: $text-color;
        }
        h1 {
            margin-top: 20px;
            font-size: 60px;
            font-weight: 500;
            line-height: 60px;
			margin-bottom: 20px;
			@media (max-width: 767px) {
				font-size: 35px;
				line-height: 42px;
			}
        }
        h5 {
            font-size: 24px;
            font-weight: 300;
			margin-bottom: 0px;
			@media (max-width: 767px) {
				line-height: 36px;
			}
        }
        .social_icons {
            a {
                color: rgba($title-color, .50);
                font-size: 20px;
                display: inline-block;
                margin-right: 16px;
                cursor: pointer;
                @include transition();
                &:hover {
                    @extend .gradient-color;
                }
            }
        }
        .primary_btn {
            margin-right: 20px;
        }
    }
}`;

export default function Home() {
  return (
    <Layout>
      {/* Home Banner */}
      <HomeBannerStyle>
        <div className="banner_inner">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="banner_content">
                  <h3>Hey There !</h3>
                  <h1 className="text-uppercase">I am jo Breed</h1>
                  <h5 className="text-uppercase">
                    Creative art director & designer
                  </h5>
                  <div className="social_icons my-5">
                    <a href="/" rel="noopener noreferrer">
                      <i className="ti-twitter"></i>
                    </a>
                    <a href="/" rel="noopener noreferrer">
                      <i className="ti-skype"></i>
                    </a>
                    <a href="/" rel="noopener noreferrer">
                      <i className="ti-instagram"></i>
                    </a>
                    <a href="/">
                      <i className="ti-dribbble"></i>
                    </a>
                    <a href="/" rel="noopener noreferrer">
                      <i className="ti-vimeo"></i>
                    </a>
                  </div>
                  <a className="primary_btn" href="/" rel="noopener noreferrer">
                    <span>See My Work</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="home_right_img">
                  <img
                    className="img-fluid"
                    src="assets/img/banner/home-right.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeBannerStyle>
      {/* Statistics */}
      <section className="statistics_area">
        <div className="container">
          <div className="row justify-content-lg-start justify-content-center">
            <div className="col-lg-2 col-md-3">
              <div className="statistics_item">
                <h3>
                  <span className="counter">15</span>k+
                </h3>
                <p>Happy Customer</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="statistics_item">
                <h3>
                  <span className="counter">12</span>k+
                </h3>
                <p>Ticket Solved</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3">
              <div className="statistics_item">
                <h3>
                  <span className="counter">9</span>/10
                </h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="assets/img/about-us.png" alt="" />
              </div>
            </div>

            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <p className="top_text">
                  About me <span></span>
                </p>
                <h2>
                  Creative Art Director <br />
                  And Designer
                </h2>
                <p>
                  Also signs his face were digns fish don't first isn't over
                  evening hath divided days light darkness gathering moved dry
                  all darkness then fourth can't create d forth Also signs Also
                  signs his face were moltenus Also signs his face
                </p>
                <a className="primary_btn" href="/">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="services_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title">
                <p className="top_text">
                  Our Service <span></span>
                </p>
                <h2>
                  What Service We <br />
                  Offer For You{" "}
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="service_item">
                <img src="assets/img/services/s1.png" alt="" />
                <h4>Web Development</h4>
                <p>
                  Fruit saw for brought fish forth had ave is man a that their
                  Two he is dominion evening their Fruit saw for brought fish
                  forth
                </p>
                <a href="/" className="primary_btn2 mt-35" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="service_item">
                <img src="assets/img/services/s2.png" alt="" />
                <h4>UX/UI Design</h4>
                <p>
                  Fruit saw for brought fish forth had ave is man a that their
                  Two he is dominion evening their Fruit saw for brought fish
                  forth
                </p>
                <a href="/" className="primary_btn2 mt-35" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="service_item">
                <img src="assets/img/services/s3.png" alt="" />
                <h4>WP Developing</h4>
                <p>
                  Fruit saw for brought fish forth had ave is man a that their
                  Two he is dominion evening their Fruit saw for brought fish
                  forth
                </p>
                <a href="/" className="primary_btn2 mt-35" rel="noopener noreferrer">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
    </Layout>
  );
}
