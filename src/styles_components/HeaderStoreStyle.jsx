import styled from "styled-components";
import {device_max_with} from "./MediaQuerys";
import {orange} from "./GeneralStyles";


export const HeaderStoreContainerPrincipal  = styled.div`
  display: flex;
  color: ${orange};
  padding-right:1.5em;
  padding-left: 1.5em;
  padding-top: 1.5em;
  ${this} section:nth-child(1) img {
    width: 7%;
    cursor: pointer;
  }
  ${this} section:nth-child(2) img:first-child {
    width: 17%;
    height: 22px;
    position: relative;
    top: 5px;
    padding-left: 6px;
    padding-right: 12px;
  }
  ${this} .delete_store {
    width: 13%;
    position: relative;
    left: 0.5em;
    top: 6px;
    cursor: pointer;
  }
  ${this} section:nth-child(2){
    display: flex;
    justify-content: space-between;
  }
  ${this} section:nth-child(1) p{
    font-weight: bold; 
  }
  ${this} section:nth-child(2) p{
    position: relative;
    font-weight: bold;
    top: 3em;
  }
  ${this} section:nth-child(2) div{
    background: ${orange};
    color: white;
    height: 2.3em;
    width: 23%;
    text-align: center;
  }
  ${this} section {
    width: 100%;
    border-bottom: 3px solid ${orange};
    margin-left: 1em;
  }

  @media (${device_max_with.tablet}) {
    ${this} section:nth-child(1) img {
      width: 27%;
    }
    ${this} section:nth-child(2) div{
      height: 1.7em;
      width: 6em;
    }
    ${this} section:nth-child(2) div span{
      bottom: 0.2em;
    }
    ${this} section:nth-child(2) p{
      font-size: 12px;
      top: 4em;
    }
    ${this} section:nth-child(2) img:first-child{
      width: 16%;
      height: 8px;
      position: relative;
      top: 1px;
      padding-left: 0px;
      padding-right: 3px;
      padding-bottom: 4px;
    }
    ${this} section:nth-child(2) span {
      font-size: 9px;
      position: relative;
    }
    ${this} .delete_store {
      width: 21px;
      cursor: pointer;
      top: 3px;
    }
  }
`
