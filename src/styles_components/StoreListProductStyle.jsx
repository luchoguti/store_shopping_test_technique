import styled from "styled-components";
import {device_max_with} from "./MediaQuerys";
import {orange} from "./GeneralStyles";


export const StoreListProductGeneralStyle = styled.div`
  text-align: center;
  ${this} > div:first-child img {
    width: 4%;
  }
  ${this} > div:first-child{
    text-align: end;
    cursor: pointer;
  }
  ${this} > .total_section{
    padding-top: 1em;
  }
  ${this} > .total_section > span:nth-child(1){
    color: gray;
    font-size: 26px;
    padding-right: 0.8em;
  }
  ${this} > .total_section > span:nth-child(2){
    color: ${orange};
    font-size: 26px;
  }
  ${this} > .total_section{
    text-align: end;
  }
  ${this} > .btn-pay{
    display: flex;
    justify-content: center;
    padding-top: 1em;
  }
  ${this} > .btn-pay div{
    background-color: dodgerblue;
    padding-bottom: 0.7em;
    padding-top: 0.7em;
    border-radius: 27px;
    width: 25%;
    cursor: pointer;
  }
  ${this} > .btn-pay div span:first-child img{
    width: 9%;
  }
  ${this} > .btn-pay div span:nth-child(2){
    margin-left: 4px;
    top: -4px;
    position: relative;
  }
  @media (${device_max_with.tablet}) {
    ${this} > div:first-child img {
      width: 12%;
    }
    ${this} > .total_section > span:nth-child(1){
      font-size: 18px;
    }
    ${this} > .total_section > span:nth-child(2){
      font-size: 18px;
    }
    ${this} > .btn-pay div{
      padding-bottom: 0.7em;
      padding-top: 0.9em;
      width: 66%;
    }
    ${this} > .btn-pay div span:first-child img{
      width: 12%;
    }
  }
`
export const StoreListProductStyle = styled.div`
  border-bottom: 1px solid ${orange};
  padding-top: 2em;
  padding-bottom: 2em;
  
  ${this} > div:first-child{
    background-color: orangered;
    border-radius: 30px;
    padding: 0.4em;
    width: 5%;
    height: 38px;
    color: white;
    text-align: center;
    position: relative;
    top: 3em;
    font-size: 27px;
  }

  ${this} > div:nth-child(2){
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 2em;
  }
  ${this} > div:nth-child(2) img {
    width: 20%;
  }
  @media (${device_max_with.tablet}) {
    ${this} > div:nth-child(2) img {
      width: 60%;
    }
    ${this} > div:first-child{
      border-radius: 30px;
      width: 13%;
      height: 20px;
      font-size: 14px;
    }
  }
`
