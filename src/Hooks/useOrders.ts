import {useState} from 'react';
import {IFood} from "../Interfaces/food.module";

export const useOrders = () => {
    const [orders, setOrders] = useState<IFood[]>([]);

    return {
        orders, setOrders
    }
};


