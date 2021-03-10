import React from 'react';
import {DialogStyled, DialogShadowStyled, DialogBannerStyled, DialogBannerName} from './FoodDialog.styled';
import {ConfirmButtonStyled, FooterStyled, ContentStyled} from '../../Styles/Global.styled'
import {QuantityInput} from './QuantityInput';
import {useQuantity} from '../../Hooks/useQuantity'
import {IFood} from "../../Interfaces/food.module";
import {formatPrice, getPrice} from "../../Data/FoodData";

const FoodDialogContainer: React.FC<IFoodDialog> = ({openFood, setOpenFood, orders, setOrders}) => {
    const quantity = useQuantity(openFood!.quantity)
    if (!openFood) return null;

    const order: IOrder = {
        name: openFood.name,
        price: openFood.price,
        quantity: quantity.value,
    }

    const addToOrder = (): void => {
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
                    <QuantityInput quantity={quantity}/>
                </ContentStyled>
                <FooterStyled>
                    <ConfirmButtonStyled onClick={addToOrder}>
                        Add to order: {formatPrice(getPrice(order))}
                    </ConfirmButtonStyled>
                </FooterStyled>
            </DialogStyled>
        </>
    )
}

export const FoodDialog: React.FC<IFoodDialog> = (props) => {
    if (!props.openFood) return null;
    return <FoodDialogContainer {...props}/>
}

interface IFoodDialog {
    openFood: IFood | null | undefined;
    setOpenFood: Function;
    orders: IFood[];
    setOrders: Function
}

type IOrder = { name: string, price: number, quantity: number }