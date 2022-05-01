import Image from 'next/image';

import * as Styled from 'components/Logo/Logo.style';
import LogoGrayed from 'assets/images/logo_grayed.svg';
import LogoColorized from 'assets/images/logo_colorized.svg';

type Props = {
    colorized?: boolean;
    big?: boolean;
};

const Logo = ({ colorized, big }: Props) => (
    <Styled.Wrapper big={big}>
        <Image
            src={colorized ? LogoColorized : LogoGrayed}
            alt="Logo"
            layout="responsive"
        />
    </Styled.Wrapper>
);

export default Logo;
