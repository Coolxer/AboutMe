import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Hamburger/Hamburger.style';

const Hamburger = () => {
    const [isMenuActive, setMenuActive] = useState<boolean>(false);

    const handleHamburgerClicked = () => {
        setMenuActive(!isMenuActive);
    };

    return (
        <Styled.Hamburger onClick={handleHamburgerClicked}>
            <FontAwesomeIcon icon={faBars} />
        </Styled.Hamburger>
    );
};

export default Hamburger;
