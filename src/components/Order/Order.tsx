import React from 'react';
import {OrderStyled, OrderContent, OrderContainer, OrderItem} from './Order.styled'
import {ConfirmButtonStyled, FooterStyled} from '../../Styles/Global.styled';
import {IFood} from "../../Interfaces/food.module";

const Order: React.FC<IOrder> = ({orders, setOrders}) => {
    return (
        <OrderStyled>
            {orders.length >= 1 ?
                <OrderContent>
                    <OrderContainer>
                        {`Your Order:`}
                    </OrderContainer>
                    {orders.map(o => (
                        <OrderContainer>
                            <OrderItem>
                                {o.name}
                            </OrderItem>
                        </OrderContainer>
                    ))}
                </OrderContent>
                :
                <OrderContent>
                    Your order's looking pretty empty.
                </OrderContent>}
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