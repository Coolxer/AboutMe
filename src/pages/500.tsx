import Link from 'next/link';
import * as Styled from 'assets/styles/errorPage.style';

const InternalServerError = () => (
    <Styled.Wrapper>
        <h1>An internal server error has occurred!</h1>
        <Link href="/">
            <a href="">Return to Home</a>
        </Link>
    </Styled.Wrapper>
);

export default InternalServerError;
