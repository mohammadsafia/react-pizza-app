import {IDefaultTopping} from "../Hooks/useToppings";

export type FoodType = 'Pizza' | 'Sandwich' | 'Frieze'

export interface IFood {
    name: string;
    img: string;
    section: FoodType,
    price: number,
    quantity?: 1,
    toppings?: IDefaultTopping[]
}