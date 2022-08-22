import { useState } from 'react';
import * as Styled from 'components/NavigationHeader/NavigationHeader.style';

import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import Menu from 'components/Menu/Menu';

const NavigationHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Styled.Wrapper>
            <Logo grayed />
            <Hamburger onClick={toggleMobileMenu} isMenuOpen={isMenuOpen} />
            <Menu
                isOpen={isMenuOpen}
                hideMenu={() => {
                    setIsMenuOpen(false);
                }}
            />
        </Styled.Wrapper>
    );
};

export default NavigationHeader;
