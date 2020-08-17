import styled from "styled-components";
import { Button } from "reactstrap";

export const ButtonStyle = styled(Button)`
  background: ${(props) => props.theme.primary};
  color: #ffffff;
  border: 2px solid ${(props) => props.theme.primary};
  &.primary_btn {
    border: 0;
    display: inline-block;
    background: linear-gradient(
      to right,
      #1345e6 0%,
      #ed239f 51%,
      #1345e6 100%
    );
    color: #fff;
    letter-spacing: 0px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 50px;
    padding: 0 38px;
    outline: none !important;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 5px;
    background-size: 200% auto;
    &:hover {
      background-position: right center;
      color: #fff;
    }
  }
`;
