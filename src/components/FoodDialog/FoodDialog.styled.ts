import styled from 'styled-components'
import {FoodLabelStyled} from "../Menu/FoodGrid.styled";
import {Title} from '../../Styles/Global.styled';
import {pizzaRed} from '../../Styles/colors'

export const DialogStyled = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 100%;
    left: 0px;
    z-index: 12;
  }
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
  ${(({img}: { img: string }) => `background-image: url(${img})`)};
  background-size: cover;
  background-position: center;
  filter: contrast(75%);
`
export const DialogBannerName = styled(FoodLabelStyled)`
  top: 100px;
  font-size: 30px;
  padding: 5px;
`
export const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`

export const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`

export const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0 10px;
  border: 1px solid ${pizzaRed};
  ${({disabled}: { disabled: boolean }) => disabled && `
    opacity: 0.3;
    pointer-events: none
  `};

  &:hover {
    background-color: #ffe3e3;
  }
`

export const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`

export const ToppingLabel = styled.label`
  cursor: pointer;
`
