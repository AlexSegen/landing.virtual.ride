import React, { useEffect } from 'react';
import WOW from 'wow.js';
import Header from './shared/header';
import Footer from './shared/footer';

import { Helmet } from 'react-helmet-async';

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
            <title>{ title ? title + " - Vitual Ride" : "Vitual Ride | Carsales Hackaton 2020" }</title>
            <meta name = "description" content={ description || "We bring you a new platform that will help improve and make online sells more easy, while giving a new user experience.React.js Boilerplate" } />
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