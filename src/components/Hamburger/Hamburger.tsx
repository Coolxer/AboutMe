import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as Styled from 'components/Hamburger/Hamburger.style';

type Props = {
    isMenuOpen: boolean;
    onClick: () => void;
};

const Hamburger = ({ isMenuOpen, onClick }: Props) => (
    <Styled.Hamburger onClick={onClick}>
        <Styled.Icon icon={faBars} open={isMenuOpen} />
    </Styled.Hamburger>
);

export default Hamburger;
