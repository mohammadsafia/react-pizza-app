import React from 'react';
import {createGlobalStyle} from "styled-components"
import {NavBar} from "./components/Shared/Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <div>Hello world</div>
        </>
    );
}

export default App;
