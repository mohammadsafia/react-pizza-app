import React from 'react';
import {GlobalStyle} from './Styles/Global.styled'
import Navbar from "./components/Shared/Navbar/Navbar";
import Banner from './components/Shared/Banner/Banner'



const App: React.FC = () => {
    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Banner/>
            <div>Hello world</div>
        </>
    );
}

export default App;
