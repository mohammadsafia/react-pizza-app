import React from 'react';
import {DialogStyled, DialogShadowStyled, DialogBannerStyled, DialogBannerName} from './FoodDialog.styled';
import {ConfirmButtonStyled, FooterStyled, ContentStyled} from '../../Styles/Global.styled'

import {IFood} from "../../Interfaces/food.module";

const FoodDialog: React.FC<IFoodDialog> = ({openFood, setOpenFood, orders, setOrders}) => {
    if (!openFood) return null;
    const order: { name: string } = {
        name: openFood.name
    }

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenFood(null)
    }
    return (
        <>
            <DialogShadowStyled onClick={setOpenFood.bind(null, null)}/>
            <DialogStyled>
                <DialogBannerStyled img={openFood.img}>
                    <DialogBannerName>{openFood.name}</DialogBannerName>
                </DialogBannerStyled>
                <ContentStyled>

                </ContentStyled>
                <FooterStyled>
                    <ConfirmButtonStyled onClick={addToOrder}>Add to order</ConfirmButtonStyled>
                </FooterStyled>
            </DialogStyled>
        </>
    )
}

interface IFoodDialog {
    openFood: IFood | null | undefined;
    setOpenFood: Function;
    orders: IFood[];
    setOrders: Function
}

export default FoodDialog