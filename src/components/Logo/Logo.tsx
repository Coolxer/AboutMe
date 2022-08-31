import Image from 'next/image';

import * as Styled from 'components/Logo/Logo.style';
import LogoWhited from 'assets/images/logo/whited.webp';
import LogoGrayed from 'assets/images/logo/grayed.webp';
import LogoColorized from 'assets/images/logo/colorized.webp';

type Props = {
    grayed?: boolean;
    colorized?: boolean;
    className?: string;
    onClick?: () => void;
};

const Logo = ({ grayed, colorized, className, onClick }: Props) => (
    <Styled.Wrapper
        className={className}
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={onClick}>
        <Image
            src={grayed ? LogoGrayed : colorized ? LogoColorized : LogoWhited}
            alt="logo"
            layout="fill"
        />
    </Styled.Wrapper>
);

export default Logo;
