import React from 'react';
import {DialogStyled, DialogShadowStyled, DialogBannerStyled, DialogBannerName} from './FoodDialog.styled'
import {IFood} from "../../Interfaces/food.module";

const FoodDialog: React.FC<IFoodDialog> = (props) => {
    if (!props.openFood) return null;

    return (
        <>
            <DialogShadowStyled onClick={props.onCloseModal}/>
            <DialogStyled>
                <DialogBannerStyled img={props.openFood.img}>
                    <DialogBannerName>{props.openFood.name}</DialogBannerName>
                </DialogBannerStyled>

            </DialogStyled>
        </>
    )
}

interface IFoodDialog {
    openFood: IFood | null;
    onCloseModal: () => void
}

export default FoodDialog