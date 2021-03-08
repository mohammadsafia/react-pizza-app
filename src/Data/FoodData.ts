import {IFood} from "../Interfaces/food.module";

export const FoodItems: IFood [] = [
    {
        name: 'Cheese Pizza',
        img: '/images/pizza.jpg',
        section: 'Pizza'
    },
    {
        name: 'Chili Burger',
        img: '/images/burger-1.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Chili Wings',
        img: '/images/buf-wings.jpg',
        section: 'Frieze'
    },
    {
        name: 'Island Burger',
        img: '/images/burger-2.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Chicken Wings',
        img: '/images/chicken-wings.jpg',
        section: 'Frieze'
    },
    {
        name: 'Frieze',
        img: '/images/frize.jpg',
        section: 'Frieze'
    },
    {
        name: 'Frieze Chicken',
        img: '/images/frize-chicken.jpg',
        section: 'Frieze'
    },
    {
        name: 'Frieze Wings',
        img: '/images/frize-wings.jpg',
        section: 'Frieze'
    },
]

export const FoodList: { [key: string]: IFood[] } = FoodItems.reduce((res: any, food: any) => {
    if (!res[food.section]) {
        res[food.section] = []
    }
    res[food.section].push(food);
    return res
}, {})