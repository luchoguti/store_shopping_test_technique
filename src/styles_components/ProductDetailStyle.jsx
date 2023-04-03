import styled from "styled-components";
import {device, device_max_with} from "./MediaQuerys";

export const ProductDetailStyled = styled.div`
  flex-basis: 100%;
  margin: 0.5em;
  padding-bottom: 1.5em;
  ${this} > div img {
    width:8%;
    cursor: pointer;
  }
  ${this} > img {
    width: 30%;
    cursor: pointer;
  }
`
