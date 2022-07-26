import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Hero/Hero.style';
import HeroRectangles from 'assets/images/hero_rectangles.svg';

import MeMasked from 'assets/images/me_masked.png';
import { Icon } from '@fortawesome/fontawesome-svg-core';

const Hero = () => {
    return (
        <Styled.Wrapper>
            <div className="box">
                <div className="left-side">
                    <div className="info-wrapper">
                        <Styled.HelloHeader>Hello, I am</Styled.HelloHeader>
                        <Styled.NameHeader>Łukasz Miłoś</Styled.NameHeader>
                        <Styled.ProfessionHeader>
                            IT ENGINEER
                        </Styled.ProfessionHeader>
                        <Styled.HobbyHeader>
                            TECHNOLOGY PASSIONATE
                        </Styled.HobbyHeader>
                        <Styled.LocationHeader>
                            <FontAwesomeIcon
                                className="icon"
                                icon={faLocationDot as Icon}
                            />
                            <span>Borowa, Polska</span>
                        </Styled.LocationHeader>
                        <Styled.Image>
                            <Image
                                src={HeroRectangles}
                                alt="rectangles"
                                layout="responsive"
                            />
                        </Styled.Image>
                    </div>
                </div>
                <div className="right-side">
                    <div className="image-wrapper">
                        <Image
                            src={MeMasked}
                            alt="me-masked"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Hero;
