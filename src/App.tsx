import React from 'react';
import {GlobalStyle} from './Styles/Global.styled'
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner'
import Menu from './components/Menu/Menu'
import FoodDialog from './components/FoodDialog/FoodDialog'
import Order from "./components/Order/Order";
import {useOpenFood} from "./Hooks/useOpenFood";
import {useOrders} from "./Hooks/useOrders";

const App: React.FC = () => {
    const openFood = useOpenFood();
    const orders = useOrders()

    return (
        <>
            <GlobalStyle/>
            <FoodDialog {...openFood} {...orders}/>
            <Navbar/>
            <Order {...orders}/>
            <Banner/>
            <Menu {...openFood}/>
        </>
    );
};

export default App;
