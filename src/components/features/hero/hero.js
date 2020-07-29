import React from 'react';

const Hero = () => {
    return ( 
        <section className="sr_section" id="top">
        <div className="sr_hero vh--100">
          <div className="sr_hero--overlay"></div>
          <div className="sr_hero--content">
            <img
              className="sr_hero--splash sr--anim wow scale-in-center"
              src="/assets/img/hero-car.png"
              alt="Virtual Ride"
            />
            <h1 className="sr_hero--title sr--anim wow scale-in-center">
              <span>Virtual</span>Ride
            </h1>
            <p className="sr_hero--description sr--anim wow scale-in-center">
                We bring you a new platform that will help improve and make online sales more easy, while giving a new user experience.
            </p>
            <a
              href="#demo"
              className="btn btn-primary btn-shadow btn-lg pr-5 pl-5 pl-5sr--anim wow scale-in-center"
              >LAUNCH DEMO</a
            >
          </div>
        </div>
      </section>
     );
}
 
export default Hero;