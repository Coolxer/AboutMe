import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faUser } from '@fortawesome/free-solid-svg-icons';

import MyFace from 'assets/images/my_face.svg';
import * as Styled from 'components/About/About.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const About = () => (
    <Styled.Wrapper>
        <div className="description-wrapper">
            <SectionHeader text="about" icon={faUser} />
            <div className="description">
                <article>
                    <p>
                        My name is Łukasz Miłoś. I am a software developer, it
                        and technology passionate.
                    </p>
                    <br />
                    <p>
                        I have extensive experience hobby in various
                        technologies, which gives me perfect view and product
                        mix advantages and disadvantages of various solutions
                        and certify that I like and can learn quickly.
                    </p>
                </article>
                <div className="icon-wrapper">
                    <FontAwesomeIcon
                        className="person-icon"
                        icon={faPersonWalking}
                    />
                </div>
            </div>
            <div className="quote">
                Knowledge and versality, no memory an specialization - this is
                my domain.
            </div>
        </div>
        <div className="roles">
            <div className="profession">IT TECHNIC</div>
            <div className="empty" />
            <div className="empty" />
            <div className="profession">MACHINE BUILDER</div>
            <div className="profession">PROGRAMMER</div>
            <div className="empty" />
            <div className="empty" />
            <div className="profession">IT STUDENT</div>
            <div className="profession">PROBLEM SOLVER</div>
            <div className="empty" />
            <div className="empty" />
            <div className="profession">TECHNOLOGY PASSIONATE</div>
            <div className="profession">HELPER</div>
            <div className="empty" />
        </div>
        <div className="face">
            <Image src={MyFace} alt="my-face" layout="responsive" />
        </div>
    </Styled.Wrapper>
);

export default About;
