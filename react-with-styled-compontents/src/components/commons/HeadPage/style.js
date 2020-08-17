import styled from "styled-components";

export const HeadPageStyle = styled.section`
  &.banner_area {
    position: relative;
    z-index: 1;
    @media (max-width: 1199px) {
      min-height: 350px;
    }
    .banner_inner {
      position: relative;
      overflow: hidden;
      width: 100%;
      min-height: 450px;
      background-size: cover;
      z-index: 1;
      background: url("https://colorlib.com/preview/theme/breed2/img/banner/common-banner.png")
        no-repeat right bottom;
      @media (max-width: 1199px) {
        min-height: 350px;
      }
      .banner_content {
        margin-left: 50px;
        margin-top: 40px;
        @media (max-width: 991px) {
          margin-left: 0px;
        }
        h2 {
          color: #fff;
          font-size: 45px;
          font-family: "Roboto", sans-serif;
          margin-bottom: 10px;
          text-transform: uppercase;
          font-weight: 700;
          @media (max-width: 991px) {
            font-size: 30px;
          }
        }
        .page_link {
          a {
            font-size: 12px;
            text-transform: uppercase;
            color: #fff;
            font-family: "Roboto", sans-serif;
            padding-left: 20px;
            padding-right: 8px;
            position: relative;
            display: inline-block;
            &:before {
              font-style: normal;
              font-weight: normal;
              font-variant: normal;
              text-transform: none;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              content: ">";
              position: absolute;
              right: -10px;
              top: 50%;
              transform: translateY(-50%);
            }
            &:last-child {
              margin-right: 0px;
              &:before {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;
