import styled from 'styled-components';

import NavigationHeader from 'components/NavigationHeader/NavigationHeader';

const Wrapper = styled.div`
    width: 100vw;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.palette.dominant};
    color: ${({ theme }) => theme.palette.secondary};

    font-family: ${({ theme }) => theme.font.family.roboto};
`;

type Props = {
    children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => (
    <Wrapper>
        <NavigationHeader />
        {/* <Footer /> */}
        {children}
    </Wrapper>
);

export default MainTemplate;
