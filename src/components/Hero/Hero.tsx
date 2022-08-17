import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Hero/Hero.style';
import HeroRectangles from 'assets/images/hero_rectangles.webp';

import MaskedFace from 'assets/images/masked_face.webp';

const Hero = () => (
    <Styled.Wrapper id="home">
        <div className="left-side">
            <div className="info-wrapper">
                <Styled.HelloHeader>Hello, I am</Styled.HelloHeader>
                <Styled.NameHeader>Łukasz Miłoś</Styled.NameHeader>
                <Styled.ProfessionHeader>IT ENGINEER</Styled.ProfessionHeader>
                <Styled.HobbyHeader>TECHNOLOGY PASSIONATE</Styled.HobbyHeader>
                <Styled.LocationHeader>
                    <FontAwesomeIcon
                        className="location-icon"
                        icon={faLocationDot as IconDefinition}
                    />
                    <span>Borowa, Polska</span>
                </Styled.LocationHeader>
                <Styled.Rectangles>
                    <Image
                        src={HeroRectangles}
                        alt="rectangles"
                        layout="responsive"
                        placeholder="blur"
                    />
                </Styled.Rectangles>
            </div>
        </div>
        <div className="right-side">
            <div className="masked-image">
                <Image
                    src={MaskedFace}
                    alt="me-masked"
                    layout="responsive"
                    placeholder="blur"
                />
            </div>
        </div>
    </Styled.Wrapper>
);

export default Hero;
