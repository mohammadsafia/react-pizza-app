import React from 'react';
import {IUseQuantity} from '../../Hooks/useQuantity'
import {QuantityInputStyled, IncrementContainer, IncrementButton} from './FoodDialog.styled'

export const QuantityInput: React.FC<IQuantityInput> = ({quantity}) => {
    return <IncrementContainer>
        <div>Quantity:</div>
        <IncrementButton onClick={() => {
            quantity.setValue(+quantity.value - 1)
        }} disabled={quantity.value === 1}> -</IncrementButton>
        <QuantityInputStyled {...quantity}/>

        <IncrementButton onClick={() => {
            quantity.setValue(+quantity.value + 1)
        }} disabled={false}> +</IncrementButton>
    </IncrementContainer>
}

interface IQuantityInput {
    quantity: IUseQuantity;
}