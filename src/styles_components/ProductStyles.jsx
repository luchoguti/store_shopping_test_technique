import styled from "styled-components";
import {device, device_max_with} from "./MediaQuerys";
import {orange} from "./GeneralStyles";


export const ProductStyled = styled.div`
  text-align: center;
  border: 1px #D3D3D3 solid;
  flex-basis: 100%;
  margin: 0.5em;
  padding-bottom: 1.5em;
  
  ${this} > div:first-child{
    background-color: ${orange};
    border-radius: 30px;
    padding: 0.4em;
    width: 9%;
    position: relative;
    left: 1.2em;
    top: 1em;
    color: white;
  }
  ${this} > div:nth-child(2n+2) img {
    width: 80%;
    cursor: pointer;
  }
  ${this} > h2 {
    padding-left: 0.8em;
    padding-top: 0.8em;
    padding-right: 0.8em;
    border-top: solid 2px ${orange};
    margin-left: 1em;
    margin-right: 1em;
  }

  ${this}  p {
    color: ${orange};
    font-weight: bold;
    font-size: 22px;
  }

  ${this} > a {
    background: ${orange};
    padding: 0.7em 1em 0.7em 0.7em;
    border-radius: 15px;
    color: white;
    cursor: pointer;
  }
  ${this} > div:nth-child(2n+3) {
    display: flex;
    justify-content: space-evenly;
  }
  ${this} > div:nth-child(2n+3) img:first-child {
    width:8%;
    cursor: pointer;
  }
  ${this} > div:nth-child(2n+3) img:nth-child(2) {
    width:8%;
    cursor: pointer;
  }
  ${this} > a img {
    width: 9%;
    height: 17px;
    padding-right: 5px;
  }

  ${this} > a span {
    position: relative;
    bottom: 0.2em;
  }

  @media ${device.tablet} {
    flex-basis: calc(33.33% - 20px);
  }
  @media (${device_max_with.tablet}) {
    font-size: 9px;
    ${this} > p {
      font-size: 12px;
    }
    ${this} > a img {
      position: relative;
      top: 0.5em;
    }
    ${this} > div:nth-child(2n+3) img {
      width:13%;
    }
  }
`
export const ProductListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  margin-right: 1.5em;
`
