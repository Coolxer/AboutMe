import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';

import * as Styled from 'components/Header/Header.style';

const Header = () => (
    <Styled.Wrapper>
        <Logo />
        <Styled.Author>Łukasz Miłoś</Styled.Author>
        <Hamburger />
    </Styled.Wrapper>
);

export default Header;
