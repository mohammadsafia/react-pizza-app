import React, {useState} from 'react';

export const useQuantity = (defaultQuantity: number | undefined): IUseQuantity => {
    const [value, setValue] = useState<number>(defaultQuantity || 1);

    const onChange = ({currentTarget: input}: React.ChangeEvent<HTMLInputElement>) => {
        if (!(+input.value >= 1)) {
            setValue(1);
            return;
        }
        setValue(+input.value)
    }
    return {
        value,
        setValue,
        onChange,
    }
}

export interface IUseQuantity {
    value: number;
    setValue: Function;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
