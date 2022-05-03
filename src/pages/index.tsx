import type { NextPage } from 'next';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'components/Hero/Hero';
import About from 'components/About/About';
import About2 from 'components/About2/About2';

const Home: NextPage = () => (
    <MainTemplate>
        <Hero />
        <About />
        <About2 />
    </MainTemplate>
);

export default Home;
