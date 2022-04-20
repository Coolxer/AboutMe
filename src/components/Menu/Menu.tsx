import * as Styled from 'components/Menu/Menu.style';

const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Menu = () => {
    return (
        <Styled.Menu>
            <ul>
                {menuItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Styled.Menu>
    );
};

export default Menu;
