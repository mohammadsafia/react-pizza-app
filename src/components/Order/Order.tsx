import React from 'react';
import {OrderStyled,OrderContent} from './Order.styled'
import {ConfirmButtonStyled, FooterStyled} from '../../Styles/Global.styled';

const Order: React.FC = () => {
    return <OrderStyled>
            <OrderContent>
                Your order's looking pretty empty.
            </OrderContent>
           <FooterStyled>
               <ConfirmButtonStyled>Checkout</ConfirmButtonStyled>
           </FooterStyled>

    </OrderStyled>
}


export default Order