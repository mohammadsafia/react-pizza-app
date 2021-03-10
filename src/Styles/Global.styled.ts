import styled, {createGlobalStyle} from "styled-components";
import {pizzaRed} from "./colors";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden auto;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    -webkit-user-select: none;
    background-color: #FFF;

    &::-webkit-scrollbar {
      width: 0.45rem;
    }

    &::-webkit-scrollbar-thumb {
      background: ${pizzaRed};
      border-radius: 20px;
    }
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`


export const Title = styled.div`
  font-family: 'Righteous', cursive;
`

export const ConfirmButtonStyled = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px) scale(1.01);
  }
`

export const ContentStyled = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0 40px 80px 40px;
`
export const FooterStyled = styled.div`
  box-shadow: 0 -2px 10px 0 gray;
  height: 60px;
  display: flex;
  justify-content: center;
`