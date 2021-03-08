import React from 'react';
import {OrderStyled, OrderContent} from './Order.styled'
import {ConfirmButtonStyled, FooterStyled} from '../../Styles/Global.styled';
import {IFood} from "../../Interfaces/food.module";

const Order: React.FC<IOrder> = ({orders, setOrders}) => {
    return (
        <OrderStyled>
            <OrderContent>
                {orders.length >= 1 ? `Found ${orders.length} orders` : `Your order's looking pretty empty.`}
            </OrderContent>
            <FooterStyled>
                <ConfirmButtonStyled>Checkout</ConfirmButtonStyled>
            </FooterStyled>
        </OrderStyled>
    )
}

interface IOrder {
    orders: IFood[];
    setOrders: Function
}


export default Order