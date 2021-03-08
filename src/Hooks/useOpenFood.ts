import {useState} from 'react';
import {IFood} from "../Interfaces/food.module";

export const useOpenFood = () => {
    const [openFood, setOpenFood] = useState<IFood | null>();

    return {
        openFood, setOpenFood
    }
};


