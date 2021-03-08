import styled from 'styled-components';
import {ContentStyled} from "../../Styles/Global.styled";

export const OrderStyled = styled.div`
  position: fixed;
  right: 0;
  top: 48px;
  width: 340px;
  height: calc(100% - 48px);;
  background-color: white;
  z-index: 10;
  box-shadow: 4px 0 5px 4px gray;
  display: flex;
  flex-direction: column;
`
export const OrderContent = styled(ContentStyled)`
  padding: 20px;
  height: 100%;
`