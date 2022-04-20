import styled from 'styled-components';

import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
`;

const MainTemplate = () => (
    <Wrapper>
        <Header />
        <Menu />
    </Wrapper>
);

export default MainTemplate;
