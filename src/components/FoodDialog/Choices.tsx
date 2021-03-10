import React from 'react';
import {randomIdGenerator} from "../../Data/FoodData";
import {IUseChoice} from "../../Hooks";


export const Choices: React.FC<IChoices> = ({choices, choiceRadio}) => {
    return <div>
        {choices?.map((choice: string) => (
            <span key={randomIdGenerator('choice')}>
                <input type="radio" id={choice} name="choice" value={choice}
                       checked={choiceRadio.value === choice} onChange={choiceRadio.onChange}/>
            </span>
        ))}
    </div>
}

interface IChoices {
    choices: string[];
    choiceRadio: IUseChoice
}