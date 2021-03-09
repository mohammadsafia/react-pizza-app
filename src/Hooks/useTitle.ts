import {useEffect} from 'react';
import {IFood} from "../Interfaces/food.module";

export const useTitle = ({
                             openFood,
                             setOpenFood,
                             orders,
                             setOrders
                         }: { openFood: IFood | null | undefined, setOpenFood: Function, orders: IFood[]; setOrders: Function }) => {
    useEffect(() => {
        if (openFood) {
            document.title = openFood.name;
        } else {
            document.title = orders.length === 0 ? `What's for dinner?` : `[${orders.length}] items in your order`;
        }
    })
}