import React from 'react';
import {DialogStyled, DialogShadowStyled, DialogBannerStyled, DialogBannerName} from './FoodDialog.styled';
import {ConfirmButtonStyled, FooterStyled, ContentStyled} from '../../Styles/Global.styled'

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
                <ContentStyled>

                </ContentStyled>
                <FooterStyled>
                    <ConfirmButtonStyled>Add to order</ConfirmButtonStyled>
                </FooterStyled>
            </DialogStyled>
        </>
    )
}

interface IFoodDialog {
    openFood: IFood | null;
    onCloseModal: () => void
}

export default FoodDialog