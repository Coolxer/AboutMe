import * as Styled from 'components/Menu/Menu.style';

const items = ['home', 'about', 'skills', 'projects', 'contact'];

type Props = {
    isOpen: boolean;
};

const Menu = ({ isOpen }: Props) => {
    return (
        <Styled.Menu isOpen={isOpen}>
            <ul>
                {items.map((item) => (
                    <li key={item}>
                        <a href={'#' + item}>{item.toUpperCase()}</a>
                    </li>
                ))}
            </ul>
        </Styled.Menu>
    );
};

export default Menu;
