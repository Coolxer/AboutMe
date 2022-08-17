import styled from 'styled-components';

import NavigationHeader from 'components/NavigationHeader/NavigationHeader';
import Footer from 'components/Footer/Footer';

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;

    font-family: ${({ theme }) => theme.font.family.roboto};

    background-color: ${({ theme }) => theme.palette.dominant};
    color: ${({ theme }) => theme.palette.secondary};
`;

type Props = {
    children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => (
    <Wrapper>
        <NavigationHeader />
        {children}
        <Footer />
    </Wrapper>
);

export default MainTemplate;
