import React, { Component } from "react";
import Layout from "../../commons/Layout";
import HeadPage from "../../commons/HeadPage";

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
        LLL
      </Layout>
    );
  }
}

export default About;
