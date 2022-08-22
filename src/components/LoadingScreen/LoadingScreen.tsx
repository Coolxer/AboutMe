import * as Styled from 'components/LoadingScreen/LoadingScreen.style';

const LoadingScreen = () => (
    <Styled.Wrapper id="loader">
        <span className="spinner">.</span>
        <span className="text">Loading ...</span>
    </Styled.Wrapper>
);

export default LoadingScreen;
