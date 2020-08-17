import React, { Component } from "react";
import Layout from "../../commons/Layout";
import HeadPage from "../../commons/HeadPage";
import MainTitle from "../../commons/MainTitle";
import SectionGap from "../../commons/SectionGap";

class About extends Component {
  render() {
    const testimonial = [
      {
        id: "1",
        username: "Roser Henrique",
        image: "assets/img/testimonials/testimonial1.png",
        desc:
          "Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face",
      },
      {
        id: "2",
        username: "Roser Henrique",
        image: "assets/img/testimonials/testimonial1.png",
        desc:
          "Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face",
      },
      {
        id: "3",
        username: "Roser Henrique",
        image: "assets/img/testimonials/testimonial1.png",
        desc:
          "Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face",
      },
      {
        id: "4",
        username: "Roser Henrique",
        image: "assets/img/testimonials/testimonial1.png",
        desc:
          "Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face",
      },
    ];
    const breakcrumb = [
      { key: "1", title: "Home", path: "/" },
      { key: "2", title: "About", path: "/about" },
    ];
    return (
      <Layout notHome={true}>
        <HeadPage title="About Us" navlink={breakcrumb} />
        <SectionGap
          className="about_area"
          titleclassName="text-left"
          toptitle="About me"
          title="Creative Art Director"
          subtitle="And Designer"
          desc="Also signs his face were digns fish don't first isn't over evening hath divided days light darkness gathering moved dry all darkness then fourth can't create d forth Also signs Also signs his face were moltenus Also signs his face"
          imgSrc="assets/img/about-us.png"
          imgTitle=""
          hasButton={true}
          btnclassName="primary_btn"
          btnTxt="Download CV"
          // onClick={}
        />
        <section className="testimonial_area pb-xl-300px">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <MainTitle
                  className=""
                  toptitle="Our Tesitmonial"
                  title="Honourable Client Says"
                  subtitle="About Me"
                  // desc={desc}
                  // hasButton={hasButton}
                  // btnClass={btnClass}
                  // btnTxt={btnTxt}
                  // onClick={onClick}
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default About;
