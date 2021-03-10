import {IFood} from "../Interfaces/food.module";
import {IDefaultTopping} from "../Hooks/useToppings";

export const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const randomIdGenerator = (suffix: string = 'item', length: number = 1e9) => `${suffix}-${Math.floor(Math.random() * length).toString(16)}`;

const pricePerTopping = 0.5;
export const getPrice = (order: IOrder | IFood): number => {
    return (order?.quantity || 1) * (order.price || 1 + [...order?.toppings || []].filter(t => t.checked).length * pricePerTopping)
}

export const FoodItems: IFood [] = [
    {
        name: 'Cheese Pizza',
        img: '/images/pizza.jpg',
        section: 'Pizza',
        price: 200.20
    },
    {
        name: 'Chili Burger',
        img: '/images/burger-1.jpg',
        section: 'Sandwich',
        price: 23.20
    },
    {
        name: 'Chili Wings',
        img: '/images/buf-wings.jpg',
        section: 'Frieze',
        price: 44.20
    },
    {
        name: 'Island Burger',
        img: '/images/burger-2.jpg',
        section: 'Sandwich',
        price: 22.20
    },
    {
        name: 'Chicken Wings',
        img: '/images/chicken-wings.jpg',
        section: 'Frieze',
        price: 55.20
    },
    {
        name: 'Frieze',
        img: '/images/frize.jpg',
        section: 'Frieze',
        price: 43.20
    },
    {
        name: 'Frieze Chicken',
        img: '/images/frize-chicken.jpg',
        section: 'Frieze',
        price: 2.20
    },
    {
        name: 'Frieze Wings',
        img: '/images/frize-wings.jpg',
        section: 'Frieze',
        price: 12.20,
    },
    {
        name: 'Soda',
        img: '/images/soda.jpg',
        section: 'Drinks',
        price: 1,
        choices: ['Coke', 'Sprite']
    }
];

export const FoodList: { [key: string]: IFood[] } = FoodItems.reduce((res: any, food: any) => {
    if (!res[food.section]) {
        res[food.section] = []
    }
    res[food.section].push(food);
    return res
}, {})


export type IOrder = { name: string, price: number, quantity: number, toppings: IDefaultTopping[] }