import React, {useState} from 'react';
import {GlobalStyle} from './Styles/Global.styled'
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner'
import Menu from './components/Menu/Menu'
import FoodDialog from './components/FoodDialog/FoodDialog'
import Order from "./components/Order/Order";

import {IFood} from "./Interfaces/food.module";

const App: React.FC = () => {
    const [openFood, setOpenFood] = useState<IFood | null>(null);

    const onSetOpenFoodHandler = (food: IFood) => {
        setOpenFood(food)
    }
    const onCloseModalHandler = () => {
        setOpenFood(null)
    }
    return (
        <>
            <GlobalStyle/>
            <FoodDialog openFood={openFood} onCloseModal={onCloseModalHandler}/>
            <Navbar/>
            <Order/>
            <Banner/>
            <Menu onSetOpenFood={onSetOpenFoodHandler}/>
        </>
    );
};

export default App;
