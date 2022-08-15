import * as Styled from 'components/Menu/Menu.style';
import { useEffect } from 'react';
import { Link } from 'react-scroll';

const items = ['home', 'about', 'skills', 'projects', 'hobbies', 'contact'];

type Props = {
    isOpen: boolean;
    hideMenu: () => void;
};

const Menu = ({ isOpen, hideMenu }: Props) => {
    useEffect(() => {
        // if (isOpen) {
        //     document.body.style.top = `-${window.scrollY}px`;
        //     document.body.style.position = 'fixed';
        // } else {
        //     const scrollY = document.body.style.top;
        //     document.body.style.top = '';
        //     document.body.style.position = '';
        //     window.scrollTo(0, parseInt(scrollY || '0') * -1);
        // }
    });

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
                            onSetActive={() => {
                                if (!isOpen) return;
                                hideMenu();
                            }}>
                            {item.toUpperCase()}
                        </Link>
                    </li>
                ))}
            </ul>
        </Styled.Menu>
    );
};

export default Menu;
