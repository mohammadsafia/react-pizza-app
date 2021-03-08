import React from 'react';
import {MenuStyled} from './Menu.styled'
import {FoodList} from "../../Data/FoodData";
import {IFood} from "../../Interfaces/food.module";
import {FoodGridStyled, FoodStyled, FoodLabelStyled} from './FoodGrid.styled';

const Menu: React.FC = () => {
    return (
        <MenuStyled>
            <h1>Menu</h1>
            {Object.entries(FoodList).map(([sectionName, foods]: [string, IFood[]], index:number) => (
                <span key={index}>
                    <h1>{sectionName}</h1>
                    <FoodGridStyled>
                        {foods.map((food: IFood) => (
                            <FoodStyled img={food.img}>
                                <FoodLabelStyled>
                                    {food.name}
                                </FoodLabelStyled>
                            </FoodStyled>
                        ))}
                    </FoodGridStyled>
                </span>
            ))}
        </MenuStyled>
    )
}

export default Menu;

