import {IDefaultTopping} from "../Hooks";

export type FoodType = 'Pizza' | 'Sandwich' | 'Frieze' | 'Drinks'

export interface IFood {
    name: string;
    img: string;
    section: FoodType,
    price: number,
    quantity?: 1,
    toppings?: IDefaultTopping[],
    choices?: string[]
}