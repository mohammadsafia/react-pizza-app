import React from 'react';
import {NavbarStyled, Logo} from './Navbar.styled'

export const NavBar: React.FC = () => {
    return (
        <NavbarStyled>
            <Logo>
                Sliceline 🍕
            </Logo>
        </NavbarStyled>
    )
}

