import Image from 'next/image';

import * as Styled from 'components/Logo/Logo.style';
import LogoWhited from 'assets/images/logo/whited.svg';
import LogoGrayed from 'assets/images/logo/grayed.svg';
import LogoColorized from 'assets/images/logo/colorized.svg';

type Props = {
    grayed?: boolean;
    colorized?: boolean;
    big?: boolean;
};

const Logo = ({ grayed, colorized, big }: Props) => (
    <Styled.Wrapper big={big}>
        <Image
            src={grayed ? LogoGrayed : colorized ? LogoColorized : LogoWhited}
            alt="Logo"
            layout="responsive"
        />
    </Styled.Wrapper>
);

export default Logo;
