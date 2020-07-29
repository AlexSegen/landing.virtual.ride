import React from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/features/hero/hero';

//Section Components
import AboutSection from './About';
import FeaturesSection from './Features';
import GoalsComponent from './Goals';
import DemoComponent from './Demo';

const Home = () => {

    return ( 
        <Layout>
            <Hero/>
            <AboutSection/>
            <FeaturesSection/>
            <GoalsComponent/>
            <DemoComponent/>
        </Layout>
     );
}
 
export default Home;