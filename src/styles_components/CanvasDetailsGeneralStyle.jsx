import styled from "styled-components";
import {device_max_with} from "./MediaQuerys";

export const CanvasDetailsGeneralStyle = styled.div`
  width: 50%;
  ${this} .empty_label{
    color: gray;
    font-size: 19px;
  }
  @media (${device_max_with.tablet}) {
    font-size: 9px;
    ${this} .empty_label{
      font-size: 10px;
    }
  }
`
