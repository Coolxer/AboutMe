import styled from 'styled-components';

import Header from 'components/Header/Header';

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
`;

type Props = {
    children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => (
    <Wrapper>
        <Header />
        {/* <Footer /> */}
        {children}
    </Wrapper>
);

export default MainTemplate;
