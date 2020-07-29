import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import WOW from 'wow.js';
import Header from './shared/header';
import Footer from './shared/footer';

import '../assets/scss/main.scss'

const Layout = ({title, description, children}) => {

    const loadTransitions = () => {

        const wow = new WOW({
            boxClass: "wow",
            animateClass: "sr--anim",
            offset: 150,
            mobile: true,
            live: true
          });
        
          wow.init();
    }

    useEffect(() => {
        loadTransitions();
    }, [])

    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " — Carsales Hackaton 2020" : "Vitual Ride — Carsales Hackaton 2020" }</title>
            <meta name = "description" content={ description || "VirtualRide brings you a new platform that will help improve and make online sells easier, while giving a new user experience." } />
        </Helmet>
        <Header/>
            <main className="sr_wrapper" id="container">
                {children}
            </main>
        <Footer/>
        <a href="#top" className="sr_scroll--top-wrapper show">
            <span className="scroll-top-inner">
            <i className="fa fa-2x fa-arrow-circle-up"></i>
            </span>
        </a>
        </>
     );
}
 
export default Layout;