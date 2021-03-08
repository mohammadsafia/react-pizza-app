import React from 'react';
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`

const App: React.FC = () => {
    return (
        <>
            <h1>Hello</h1>
            <GlobalStyle/>
            <div>Hello world</div>
        </>
    );
}

export default App;
