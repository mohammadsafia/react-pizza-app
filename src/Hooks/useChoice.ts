import React, {useState} from 'react';

export const useChoice = (defaultChoice: string):IUseChoice => {
    const [value, setValue] = useState<string>(defaultChoice);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
}

export interface IUseChoice {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

