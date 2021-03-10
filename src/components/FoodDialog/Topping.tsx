import React from 'react';

import {ToppingGrid, ToppingCheckbox, ToppingLabel} from "./FoodDialog.styled";
import {IUseTopping} from "../../Hooks/useToppings";
import {randomIdGenerator} from "../../Data/FoodData";

export const Toppings: React.FC<IUseTopping> = ({toppings, checkTopping}) => {
    return (
        <ToppingGrid>
            {toppings.map((topping,ind) => (
                <ToppingLabel key={randomIdGenerator(`topping-${topping.name}`)}>
                    <ToppingCheckbox type='checkbox' checked={topping.checked}
                                     onClick={()=>checkTopping(ind)}/>
                    {topping.name}
                </ToppingLabel>
            ))}

        </ToppingGrid>
    )
}