import React from 'react';
import {GlobalStyle} from './Styles/Global.styled'
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner'
import Menu from './components/Menu/Menu'


const App: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Banner/>
            <Menu/>
            <div>Hello world</div>
        </>
    );
}

export default App;
