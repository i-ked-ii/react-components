import styled from "styled-components";

export const MainTitleStyle = styled.div`
  margin-bottom: 80px;
  @media (max-width: 1199px) {
    margin-bottom: 40px;
  }
  p.top_text {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    position: relative;
    margin-bottom: 10px;
    span {
      position: relative;
      top: -2px;
      display: inline-block;
      margin-left: 5px;
      width: 80px;
      height: 4px;
      background: rgba($primary-color2, 0.6);
      @include filter(blur(4px));
      border-radius: 5px;
    }
  }
  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 0px;
    line-height: 52px;
    text-transform: capitalize;
    @media (max-width: 767px) {
      font-size: 30px;
      line-height: 34px;
    }
    br {
      @media (max-width: 991px) {
        display: none;
      }
    }
  }
`;
