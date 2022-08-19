import Image from 'next/image';

import * as Styled from 'components/Logo/Logo.style';
import LogoWhited from 'assets/images/logo/whited.webp';
import LogoGrayed from 'assets/images/logo/grayed.webp';
import LogoColorized from 'assets/images/logo/colorized.webp';

type Props = {
    grayed?: boolean;
    colorized?: boolean;
    className?: string;
};

const Logo = ({ grayed, colorized, className }: Props) => (
    <Styled.Wrapper className={className}>
        <Image
            src={grayed ? LogoGrayed : colorized ? LogoColorized : LogoWhited}
            alt="logo"
            layout="fill"
            placeholder="blur"
        />
    </Styled.Wrapper>
);

export default Logo;
