import React from 'react';
import {NavbarStyled, Logo} from './Navbar.styled'

const Navbar: React.FC = () => {
    return (
        <NavbarStyled>
            <Logo>
                Sliceline 🍕
            </Logo>
        </NavbarStyled>
    )
}

export default Navbar

