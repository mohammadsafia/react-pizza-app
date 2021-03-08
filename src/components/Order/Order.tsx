import React from 'react';
import {OrderStyled, OrderContent, OrderContainer, OrderItem} from './Order.styled'
import {ConfirmButtonStyled, FooterStyled} from '../../Styles/Global.styled';
import {IFood} from "../../Interfaces/food.module";
import {formatPrice} from "../../Data/FoodData";

const Order: React.FC<IOrder> = ({orders, setOrders}) => {
    return (
        <OrderStyled>
            {orders.length >= 1 ?
                <OrderContent>
                    <OrderContainer>
                        {`Your Order:`}
                    </OrderContainer>
                    {orders.map((o:IFood) => (
                        <OrderContainer>
                            <OrderItem>
                                <div>1</div>
                                <div> {o.name}</div>
                                <div>{formatPrice(o.price)}</div>
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