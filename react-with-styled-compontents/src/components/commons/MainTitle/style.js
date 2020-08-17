import styled from "styled-components";

export const MainTitleStyle = styled.p`
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
    background: rgba(237, 35, 159, 0.6);
    filter: blur(4px);
    border-radius: 5px;
  }
`;
