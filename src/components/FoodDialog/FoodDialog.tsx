import React from 'react';
import {DialogStyled, DialogShadowStyled, DialogBannerStyled, DialogBannerName} from './FoodDialog.styled';
import {ConfirmButtonStyled, FooterStyled, ContentStyled} from '../../Styles/Global.styled'
import {QuantityInput} from './QuantityInput';
import {useQuantity,useChoice, useToppings} from '../../Hooks'
import { IFood} from "../../Interfaces/food.module";
import {formatPrice, getPrice, IOrder} from "../../Data/FoodData";
import {Toppings} from './Topping'

const FoodDialogContainer: React.FC<IFoodDialog> = ({openFood, setOpenFood, orders, setOrders}) => {
    const quantity = useQuantity(openFood!.quantity);
    const toppings = useToppings(openFood?.toppings);
    // const choiceRadio = useChoice(openFood?.choice || '')
    if (!openFood) return null;

    const order: IOrder = {
        name: openFood.name,
        price: openFood.price,
        quantity: quantity.value,
        toppings: toppings.toppings,
        // choice: choiceRadio.value
    }

    const addToOrder = (): void => {
        setOrders([...orders, order]);
        setOpenFood(null)
    }

    const hasTopping = (openFood: IFood | null | undefined): boolean => {
        return openFood?.section === 'Pizza'
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
                    {hasTopping(openFood) && <>
                        <h3>Would you like toppings?</h3>
                        <Toppings {...toppings}/>
                    </>}

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
