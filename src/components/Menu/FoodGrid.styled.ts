import styled from "styled-components";
import {Title} from '../../Styles/Global.styled';

export const FoodGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const FoodLabelStyled = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px
`

export const FoodStyled = styled.div`
  height: 15rem;
  padding: 10px;
  font-size: 20px;
  background-image: ${(({img}: { img: string }) => `url(${img})`)};
  background-size: cover;
  background-position: center;
  filter: contrast(75%);
  border-radius: 7px;
  box-shadow: 0 0 2px 0 gray;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transform: scale(1.01);
    box-shadow: 0 5px 10px 0 gray;
    filter: contrast(100%);
  }
`

