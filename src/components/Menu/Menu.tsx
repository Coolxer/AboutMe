import * as Styled from 'components/Menu/Menu.style';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const items = ['home', 'about', 'skills', 'projects', 'contact'];

type Props = {
    isOpen: boolean;
    onClick: () => void;
};

const MobileMenu = ({ isOpen, onClick }: Props) => {
    return (
        <Styled.Menu isOpen={isOpen}>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        <a href={'#' + item}> {item.toUpperCase()}</a>
                    </li>
                ))}
            </ul>
            <Styled.CircleButton icon={faCircleChevronLeft} onClick={onClick} />
        </Styled.Menu>
    );
};

export default MobileMenu;
