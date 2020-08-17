import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #021017;
  padding: 120px 0;
  position: relative;
  @media (max-width: 1024px) {
    padding: 60px 0;
  }
  .footer_logo {
    text-align: center;
  }
  .footer_social {
    text-align: center;
    margin: 5px 0px 30px;
    a {
      display: inline-block;
      width: 45px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: #ffffff;
      border-radius: 36px;
      color: #05364d;
      font-size: 16px;
      margin-right: 12px;
      transition: all 0.4s ease 0s;
      &:hover {
        background: linear-gradient(90deg, #1345e6 0%, #ed239f 100%);
        color: #ffffff;
      }
      &:last-child {
        margin-right: 0px;
      }
    }
  }
  .footer_bottom {
    text-align: center;
    p {
      margin-bottom: 0;
    }
    a {
      color: #a932c7;
    }
  }
`;
