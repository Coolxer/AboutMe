import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faBlender,
    faC,
    faChartColumn,
    faDatabase,
    faDiagramProject,
    faEnvelope,
    faFolderTree,
    faFontAwesome,
    faGamepad,
    faGears,
    faMicrochip,
    faRobot,
    faTableColumns,
    faTv,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCss3,
    faGithub,
    faHtml5,
    faLaravel,
    faPhp,
    faPython,
    faReact,
    faSass,
    faUnity,
} from '@fortawesome/free-brands-svg-icons';

import * as Styled from 'components/Projects/Projects.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import ProjectBox from 'components/ProjectBox/ProjectBox';
import Button from 'components/Button/Button';

const Projects = () => (
    <Styled.Wrapper id="projects">
        <SectionHeader
            text="projects"
            icon={faDiagramProject as IconDefinition}
        />
        <div className="projects-list">
            <ProjectBox
                title="This website"
                subtitle="Portoflio next.js website"
                description="This website describes my personality. It was created using next.js (react.js framework) with email.js service. Some of other dependencies are: Styled Components, Typescript, eslint, prettier, husky. It presents actual using technology stack, but that's not full list.  "
                technologies={[
                    { icon: faReact as IconDefinition, tooltip: 'React.js' },

                    { icon: faEnvelope as IconDefinition, tooltip: 'Email.js' },
                    {
                        icon: faFontAwesome as IconDefinition,
                        tooltip: 'FontAwesome',
                    },
                ]}
                githubLink="https://github.com/Coolxer/aboutme"
            />

            <ProjectBox
                title="HOP-15"
                subtitle="Arduino-based machine control system"
                description="This is an embedded system of very simple CNC machine for personal use of sharpening cutter tools. It uses Arduino platform. The program was written with C language from the basis. It process controlling using small screen and keyboard. "
                technologies={[
                    {
                        icon: faMicrochip as IconDefinition,
                        tooltip: 'Microcontroller',
                    },
                    { icon: faGears as IconDefinition, tooltip: 'Mechanics' },
                    {
                        icon: faGamepad as IconDefinition,
                        tooltip: 'Machine Control',
                    },
                    { icon: faC as IconDefinition, tooltip: 'C' },
                ]}
                githubLink="https://github.com/coolxer/hop-15"
            />

            <ProjectBox
                title="HOP-30 GUI"
                subtitle="GUI for STM-32 embedded system"
                description="Graphical user interface for new version of  embedded system based on STM-32 controller. Steering program can be found  at 'https://github.com/coolxer/HOP-30-EMBEDDED'.  This GUI is React app with Styled Components, running using Electron ecosystem."
                technologies={[
                    { icon: faHtml5 as IconDefinition, tooltip: 'HTML 5' },
                    { icon: faCss3 as IconDefinition, tooltip: 'CSS 3' },
                    { icon: faSass as IconDefinition, tooltip: 'Sass' },
                    {
                        icon: faFontAwesome as IconDefinition,
                        tooltip: 'FontAwesome',
                    },
                    { icon: faReact as IconDefinition, tooltip: 'React.js' },
                ]}
                githubLink="https://github.com/coolxer/hop-30"
            />

            <ProjectBox
                title="BOMPY"
                subtitle="Simple BOM python's application"
                description="GUI application written with Python language and tkinter library. It was one of many study's projects.  It can be used to store BOM (Bill of materials) information of product. User can add and modify structure list of ingredients stored in indicated json file., which helps to keep tree structure."
                technologies={[
                    {
                        icon: faFolderTree as IconDefinition,
                        tooltip: 'Tree structure',
                    },
                    {
                        icon: faChartColumn as IconDefinition,
                        tooltip: 'Mechanics',
                    },
                    { icon: faPython as IconDefinition, tooltip: 'Python' },
                ]}
                githubLink="https://github.com/coolxer/bompy"
            />

            <ProjectBox
                title="Robox"
                subtitle="Realtime simulation of robotic arm "
                description="Another study's project, realized as part of student's intership. The 3D model was created in Blender, but application was made with Unity engine. Program allows to steering of robotic arm few axis with sliders manually or automaticly. User can change current camera and speed of movement"
                technologies={[
                    { icon: faRobot as IconDefinition, tooltip: 'Robot' },
                    {
                        icon: faUnity as IconDefinition,
                        tooltip: 'Unity3D Game Engine',
                    },
                    {
                        icon: faBlender as IconDefinition,
                        tooltip: 'Blender 3D',
                    },
                ]}
                githubLink="https://github.com/coolxer/robox"
            />

            <ProjectBox
                title="Vis4xe"
                subtitle="GUI application to plan small displays"
                description="Application was created using C++ and QT ecosystem. It allows to plan strings on small embedded displays. User can add, edit and place strings on the display segments and also generate code for real display. It automates planning screens process and helps avoiding mistakes."
                technologies={[
                    { icon: faTv as IconDefinition, tooltip: 'Screen' },
                    {
                        icon: faTableColumns as IconDefinition,
                        tooltip: 'Structure',
                    },
                ]}
                githubLink="https://github.com/coolxer/vis4xe"
            />

            <ProjectBox
                title="Secret Project"
                subtitle="Potential commercial project during development phase"
                description=""
                technologies={[
                    { icon: faPhp as IconDefinition, tooltip: 'PHP 8' },
                    { icon: faLaravel as IconDefinition, tooltip: 'Laravel 9' },
                    {
                        icon: faDatabase as IconDefinition,
                        tooltip: 'Mysql',
                    },
                    { icon: faSass as IconDefinition, tooltip: 'Sass' },
                    {
                        icon: faFontAwesome as IconDefinition,
                        tooltip: 'FontAwesome',
                    },
                ]}
                githubLink="https://github.com/Coolxer?tab=repositories"
            />

            <a
                href="https://github.com/Coolxer?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="more-link">
                <Button
                    text="More and more ..."
                    icon={faGithub as IconDefinition}
                    className="more-btn"
                />
            </a>

            <div className="empty-project"></div>
        </div>
    </Styled.Wrapper>
);

export default Projects;
