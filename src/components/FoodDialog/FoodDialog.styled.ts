import styled from 'styled-components'
import {FoodLabelStyled} from "../Menu/FoodGrid.styled";

export const DialogStyled = styled.div`
  width: 500px;
  height: 2000px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px)
`


export const DialogShadowStyled = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`

export const DialogBannerStyled = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  background-image: ${(({img}: { img: string }) => `url(${img})`)};
  background-size: cover;
  background-position: center;
  filter: contrast(75%);
`
export const DialogBannerName = styled(FoodLabelStyled)`
  top:100px;
  font-size: 30px;
  padding: 5px;
`