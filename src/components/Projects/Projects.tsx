import {
    faBlender,
    faC,
    faChartColumn,
    faDiagramProject,
    faFolderTree,
    faFontAwesome,
    faGamepad,
    faGears,
    faMicrochip,
    faRobot,
    faTableColumns,
    faTv,
} from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Projects/Projects.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import ProjectBox from 'components/ProjectBox/ProjectBox';
import {
    faCss3,
    faGithub,
    faHtml5,
    faPython,
    faReact,
    faSass,
    faUnity,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Button from 'components/Button/Button';

const Projects = () => (
    <Styled.Wrapper>
        <SectionHeader
            text="projects"
            icon={faDiagramProject as IconDefinition}
        />
        <div className="projects-list">
            <ProjectBox
                title="HOP-15"
                subtitle="Arduino-based machine control system"
                description="This is an embedded system of very simple CNC machine for personal use of sharpening cutter tools. It uses Arduino platform. The program was written with C language from the basis. It includes not only stepper's movement but also process controlling using small screen and keyboard. "
                technologies={[faMicrochip, faGears, faGamepad, faC]}
                githubLink="https://github.com/coolxer/hop-15"
            />

            <ProjectBox
                title="HOP-30 GUI"
                subtitle="GUI for STM-32 embedded system"
                description="Graphical user interface for new version of  embedded system based on STM-32 controller. Steering program can be found  at 'https://github.com/coolxer/HOP-30-EMBEDDED'.  This GUI is React app with Styled Components, running using Electron ecosystem."
                technologies={[faHtml5, faCss3, faSass, faFontAwesome, faReact]}
                githubLink="https://github.com/coolxer/hop-30"
            />

            <ProjectBox
                title="BOMPY"
                subtitle="Simple BOM python's application"
                description="GUI application written with Python language and tkinter library. It was one of many study's projects.  It can be used to store BOM (Bill of materials) information of product. User can add and modify structure list of ingredients stored in indicated json file. "
                technologies={[faFolderTree, faChartColumn, faPython]}
                githubLink="https://github.com/coolxer/bompy"
            />

            <ProjectBox
                title="Robox"
                subtitle="Realtime simulation of robotic arm "
                description="Another study's project, realized as part of student's intership. The 3D model was created in Blender, but application was made with Unity engine. Program allows to steering of robotic arm few axis with sliders manually or automaticly. User can change current camera, speed of movement and test simple inverse kinematics algorithm."
                technologies={[faRobot, faUnity, faBlender]}
                githubLink="https://github.com/coolxer/robox"
            />

            <ProjectBox
                title="Vis4xe"
                subtitle="GUI application to plan small displays"
                description="Application was created using C++ and QT ecosystem. It allows to plan strings on small embedded displays. User can add, edit and place strings on the display segments and also generate code for real display."
                technologies={[faTv, faTableColumns]}
                githubLink="https://github.com/coolxer/vis4xe"
            />
            <a
                href="https://github.com/coolxer/repositories"
                className="more-link">
                <Button
                    text="More and more ..."
                    icon={faGithub as IconDefinition}
                    className="more-btn"
                />
            </a>
        </div>
    </Styled.Wrapper>
);

export default Projects;
