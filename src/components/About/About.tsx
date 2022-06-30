import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as Styled from 'components/About/About.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const About = () => (
    <Styled.Wrapper>
        <SectionHeader text="about" icon={faUser} />
        <article>
            <p>
                My name is Łukasz Miłoś. I am a software developer, it and
                technology passionate.
            </p>
            <br />
            <p>
                I have extensive experience hobby in various technologies, which
                gives me perfect view and product mix advantages and
                disadvantages of various solutions and certify that I like and
                can learn quickly.
            </p>
        </article>
        <div className="quote">
            Knowledge and versality, no memory an specialization - this is my
            domain.
        </div>
    </Styled.Wrapper>
);

export default About;
