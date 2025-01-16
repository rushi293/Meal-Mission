import React from 'react'
import HeroSection from './HeroSection';
import HowCanUHelp from './HowCanUHelp';
import Problem from './Problem';
import Stats from './Stats';

function Home() {
    return (
        <>
            <HeroSection/>
            <Problem/>
            <HowCanUHelp/>
            <Stats/>
        </>
    )
}

export default Home;
