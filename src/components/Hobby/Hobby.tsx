import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Hobby/Hobby.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const Hobby = () => (
    <Styled.Wrapper id="hobbies">
        <div className="box">
            <SectionHeader
                text="Hobbies"
                icon={faPalette as IconDefinition}
                className="section-header"
            />
            <div className="hobbies">
                <div className="hobby-item">
                    <span>Mechatronics and Electronics</span>
                    <article>
                        <p>
                            Living in the countryside, and mainly due to a great
                            professional - my dad, I have to deal with
                            mechanical metalworking.
                        </p>
                        <br />
                        <p>
                            Electronics, on the other hand, is the result of my
                            own preoccupation and study of computer science. It
                            also involves embedded programming.
                        </p>
                        <br />
                        <p>
                            When I was 16, when 3D printing was just beginning,
                            I became interested in the topic and with the help
                            of a forum and blog, I built my own amateur 3D
                            printer.
                        </p>
                    </article>
                </div>
                <div className="hobby-items">
                    <div className="hobby-item">
                        <span>CNC</span>
                        <article>
                            This interest came mainly from youtube videos, As
                            well as from a previous love of mechanics and
                            electronics, resulting in the creation of first a
                            simple numerically controlled machine, and
                            subsequently already a full-fledged CNC multitasking
                            machine. This includes GCODE programming as part of
                            the main development path.
                        </article>
                    </div>
                    <div className="hobby-item">
                        <span>Voleyball, Football, Cycling</span>
                        <article>
                            Outside the industry, I am interested in sports, and
                            even practice them in an amateur way. I enjoy
                            volleyball and soccer, and in my free time I explore
                            the beautiful countryside by bicycle.
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </Styled.Wrapper>
);

export default Hobby;
