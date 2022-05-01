import type { NextPage } from 'next';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Hero from 'components/Hero/Hero';

const Home: NextPage = () => (
    <MainTemplate>
        <Hero />
    </MainTemplate>
);

export default Home;
