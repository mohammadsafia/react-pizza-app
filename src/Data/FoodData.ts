import {IFood} from "../Interfaces/food.module";

export const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const getPrice = (order: IOrder | IFood): number => {
    return (order?.quantity || 1) * order.price || 1
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
        price: 12.20
    },
]

export const FoodList: { [key: string]: IFood[] } = FoodItems.reduce((res: any, food: any) => {
    if (!res[food.section]) {
        res[food.section] = []
    }
    res[food.section].push(food);
    return res
}, {})

export type IOrder = { name: string, price: number, quantity: number }