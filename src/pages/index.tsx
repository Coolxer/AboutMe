import type { NextPage } from 'next';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import About2 from 'components/About2/About2';
import Skills from 'components/Skills/Skills';
import Projects from 'components/Projects/Projects';
import Contact from 'components/Contact/Contact';

const Home: NextPage = () => (
    <MainTemplate>
        <Hero />
        <About />
        <About2 />
        <Skills />
        <Projects />
        <Contact />
    </MainTemplate>
);

export default Home;
