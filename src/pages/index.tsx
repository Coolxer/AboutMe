import type { NextPage } from 'next';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import About2 from 'components/About2/About2';
import Skills from 'components/Skills/Skills';
import Projects from 'components/Projects/Projects';

const Home: NextPage = () => (
    <MainTemplate>
        <Hero />
        <About />
        <About2 />
        <Skills />
        <Projects />
    </MainTemplate>
);

export default Home;
