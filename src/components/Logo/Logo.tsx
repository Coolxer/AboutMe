import Image from 'next/image';
import logoSVG from 'assets/images/logo.svg';

import * as Styled from 'components/Logo/Logo.style';

const Logo = () => (
    <Styled.Wrapper>
        <Image src={logoSVG} alt="Logo" layout="responsive" />
    </Styled.Wrapper>
);

export default Logo;
