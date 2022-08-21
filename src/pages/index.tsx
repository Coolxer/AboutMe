import type { NextPage } from 'next';
import Head from 'next/head';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import Skills from 'components/Skills/Skills';
import Projects from 'components/Projects/Projects';
import Hobby from 'components/Hobby/Hobby';
import Contact from 'components/Contact/Contact';

const Home: NextPage = () => {
    return (
        <MainTemplate>
            <Head>
                <title>Łukasz Miłoś</title>
            </Head>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Hobby />
            <Contact />
        </MainTemplate>
    );
};

export default Home;
