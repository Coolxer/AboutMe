import Image from 'next/image';
import * as Styled from 'components/About2/About2.style';
import MyFace from 'assets/images/me.svg';

const About2 = () => (
    <Styled.Wrapper>
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
        <div className="face">
            <Image src={MyFace} alt="my-face" layout="responsive" />
        </div>
    </Styled.Wrapper>
);

export default About2;
