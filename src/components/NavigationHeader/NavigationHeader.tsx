import { useState } from 'react';
import * as Styled from 'components/NavigationHeader/NavigationHeader.style';

import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import Menu from 'components/Menu/Menu';

const NavigationHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <Styled.Wrapper>
            <Logo grayed onClick={closeMenu} />
            <Hamburger onClick={toggleMobileMenu} isMenuOpen={isMenuOpen} />
            <Menu isOpen={isMenuOpen} hideMenu={closeMenu} />
        </Styled.Wrapper>
    );
};

export default NavigationHeader;
