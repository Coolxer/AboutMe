import Image from 'next/image';
import * as Styled from 'components/Hero/Hero.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import HeroRectangles from 'assets/images/hero_rectangles.svg';

const Hero = () => {
    return (
        <Styled.Wrapper>
            <Styled.HelloHeader>Hello, I am</Styled.HelloHeader>
            <Styled.NameHeader>Łukasz Miłoś</Styled.NameHeader>
            <Styled.ProfessionHeader>
                SOFTWARE DEVELOPER
            </Styled.ProfessionHeader>
            <Styled.HobbyHeader>IT & TECHNOLOGY PASSIONATE</Styled.HobbyHeader>
            <Styled.LocationHeader>
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                <span>Borowa, Polska</span>
            </Styled.LocationHeader>
            <Styled.Image>
                <Image
                    src={HeroRectangles}
                    alt="rectangles"
                    layout="responsive"
                />
            </Styled.Image>

            {/*<Button text="Follow me" big glowed rounded />*/}
        </Styled.Wrapper>
    );
};

export default Hero;
