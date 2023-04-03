import styled from "styled-components";
import {device_max_with} from "./MediaQuerys";
import {orange} from "./GeneralStyles";

export const ProductDetailStyled = styled.div`
  margin: 0.5em;
  padding-bottom: 1.5em;
  text-align: center;

  ${this} > div:first-child {
    display: flex;
    justify-content: space-around;
  }
  ${this} > div:first-child span:first-child{
    background-color: ${orange};
    border-radius: 30px;
    padding: 0.4em;
    width: 3%;
    position: relative;
    left: 1.2em;
    top: 1em;
    color: white;
  }
  ${this} > div:first-child .close_detail img{
    height: 28px;
    cursor: pointer;
  }
  ${this} > div:nth-child(2n+2){
     text-align: center;
  }
  ${this} > div:nth-child(2n+2) img {
    width: 50%;
    cursor: pointer;
  }
  ${this} > div:nth-child(2n+3) img {
    width:3%;
    cursor: pointer;
  }
  ${this} > div:nth-child(2n+3) {
    display: flex;
    justify-content: space-evenly;
  }
  ${this} > a {
    background: ${orange};
    padding: 0.7em 1em 0.7em 0.7em;
    border-radius: 15px;
    color: white;
    cursor: pointer;
  }
  ${this} > a img {
    width: 4%;
    height: 22px;
  }

  ${this} > a span {
    position: relative;
    bottom: 0.2em;
  }
  ${this} > p:nth-child(2n+2) {
    text-align: justify;
    border-top: 1px ${orange} solid;
    border-bottom: 1px ${orange} solid;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  ${this} > p:nth-child(2n+1) {
    color: ${orange};
    font-weight: bold;
    font-size: 22px;
  }
  ${this} .close_detail{
    visibility: visible !important;
  }
  @media (${device_max_with.tablet}) {
    font-size: 11px;
    ${this} > div:first-child {
      justify-content: space-between;
    }
    ${this} > div:first-child span:first-child{
      width: 11%;
      height: 17px;
    }
    ${this} > div:first-child span:nth-child(2n+2) img {
      height: 23px;
    }
    ${this} > div:nth-child(2n+2) img {
      width: 100%;
    }
    ${this} > div:nth-child(2n+3) img {
      width:13%;
    }
    ${this} > a img {
      width: 14%;
      height: 15px;
    }
  }
`
