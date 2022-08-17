import * as Styled from 'components/Menu/Menu.style';
import { Link } from 'react-scroll';

const items = ['home', 'about', 'skills', 'projects', 'hobbies', 'contact'];

type Props = {
    isOpen: boolean;
    hideMenu: () => void;
};

const Menu = ({ isOpen, hideMenu }: Props) => {
    const closeMenu = (): void => {
        if (!isOpen) return;
        hideMenu();
    };

    return (
        <Styled.Menu isOpen={isOpen}>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        <Link
                            activeClass="active"
                            to={item}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenu}>
                            {item.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </Styled.Menu>
    );
};

export default Menu;
