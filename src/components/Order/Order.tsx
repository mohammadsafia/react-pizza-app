import React from 'react';
import {OrderStyled, OrderContent, OrderContainer, OrderItem, DetailsItem} from './Order.styled'
import {ConfirmButtonStyled, FooterStyled} from '../../Styles/Global.styled';
import {IFood} from "../../Interfaces/food.module";
import {formatPrice, getPrice} from "../../Data/FoodData";

const Order: React.FC<IOrder> = ({orders, setOrders}) => {
    const subTotal = orders.reduce((total: number, order: IFood) => {
        return total + getPrice(order)
    }, 0)
    const tax: number = subTotal * 0.16;
    const total: number = subTotal + tax;

    const deleteOrder = (index: number) => {
        const newOrders = orders.slice();
        newOrders.splice(index, 1);
        setOrders(newOrders)
    }
    return (
        <OrderStyled>
            {orders.length >= 1 ?
                <OrderContent>
                    <OrderContainer>
                        {`Your Order:`}
                    </OrderContainer>
                    {orders.map((o: IFood, index: number) => (
                        <OrderContainer>
                            <OrderItem>
                                <div>{o.quantity}</div>
                                <div> {o.name}</div>
                                <div style={{cursor: 'pointer'}} onClick={() => deleteOrder(index)}>delete</div>
                                <div>{formatPrice(getPrice(o))}</div>
                            </OrderItem>
                            <DetailsItem>
                                {o && o?.toppings?.filter(t => t.checked).map(topping => topping.name).join(', ')}
                            </DetailsItem>
                        </OrderContainer>
                    ))}
                    <OrderContainer>
                        <OrderItem>
                            <div/>
                            <div>Sub-Total</div>
                            <div>{formatPrice(subTotal)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Tax</div>
                            <div>{formatPrice(tax)}</div>
                        </OrderItem>
                        <OrderItem>
                            <div/>
                            <div>Total</div>
                            <div>{formatPrice(total)}</div>
                        </OrderItem>
                    </OrderContainer>
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