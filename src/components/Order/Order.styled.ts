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

  @media (max-width: 400px) {
    position: relative;
    width: 100%;
  }
`
export const OrderContent = styled(ContentStyled)`
  padding: 20px;
  height: 100%;
`

export const OrderContainer = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid gray;
`

export const DetailsItem = styled.div`
  color: gray;
  font-size: 10px;
`

export const OrderItem = styled.div`
  padding: 10px 0;
  display: grid;
  grid-template-columns: 20px 95px 20px 60px;
  justify-content: space-between;
`