import {useState} from 'react';

export const useToppings = (defaultTopping: IDefaultTopping[] | undefined): IUseTopping => {
    const [toppings, setToppings] = useState<IDefaultTopping[]>(defaultTopping || getDefaultToppings());
    const checkTopping = (index: number) => {
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    };
    return {
        checkTopping,
        toppings
    }
};
const toppingList: string[] = [
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Ham"
]
const getDefaultToppings = (): IDefaultTopping[] => {
    return toppingList.map((topping) => ({
        name: topping,
        checked: false
    }))
}

export interface IUseTopping {
    checkTopping: (index: number) => void;
    toppings: IDefaultTopping[]
}

export interface IDefaultTopping {
    name: string;
    checked: boolean
}
