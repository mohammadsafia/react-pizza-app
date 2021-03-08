import React from 'react';
import {NavbarStyled, Logo} from './Navbar.styled'

const Navbar: React.FC = () => {
    return (
        <NavbarStyled>
            <Logo>
                Sliceline <span>🍕</span>
            </Logo>
        </NavbarStyled>
    )
}

export default Navbar

