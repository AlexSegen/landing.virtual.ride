import React from 'react';
import VRCarousel from '../../components/features/carousel/carousel';

const FeaturesSection = () => {
    return ( 
        <section className="sr_section bg--dark" id="features">
            <div className="container vh--100 flex-justify-center sr_section--pading">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="sr_section--content  sr--anim wow fade-in">
                            
                            <VRCarousel/>

                            <ul className="sr_features--figures my-5">
                                <li className="wow fade-in" data-wow-delay="0s">
                                    <img src="/assets/img/engine.png" className="shadow" alt="Engine" />
                                    <span>Engine</span>
                                </li>
                                <li className="wow fade-in" data-wow-delay=".2s">
                                    <img src="/assets/img/wheels.png" className="shadow" alt="Wheels" />
                                    <span>Wheels</span>
                                </li>
                                <li className="wow fade-in" data-wow-delay=".4s">
                                    <img src="/assets/img/sound.png" className="shadow" alt="Sound System" />
                                    <span>Sound</span>
                                </li>
                                <li className="wow fade-in" data-wow-delay=".6s">
                                    <img src="/assets/img/electronics.png" className="shadow" alt="Electronics" />
                                    <span>Electronics</span>
                                </li>
                                <li className="wow fade-in" data-wow-delay=".6s">
                                    <img src="/assets/img/seats.png" className="shadow" alt="Seats" />
                                    <span>Seats</span>
                                </li>
                                <li className="wow fade-in" data-wow-delay=".6s">
                                    <img src="/assets/img/exterior.png" className="shadow" alt="Exterior" />
                                    <span>Exterior</span>
                                </li>
                            </ul>

                            <p className="text-muted text-center mb-3">
                                You can explore many vehicle features through the <strong>Virtual Ride</strong>, from your work or your home.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="sr_section--content text-justify  wow fade-in sr--anim">
                            <h2 className="sr_section--title  wow tracking-in-contract" data-wow-delay=".5s">
                                Features
                            </h2>
                            <div className="sr_divider --brand "></div>

                            <h4>SHOW OFF DEALER'S SPACE</h4>
                            <p className="small">
                                Along with the fluid virtual walkthrough model, we highlight certain aspects of the showroom within the tour that would draw customers to those areas, allowing your audience to interact in a completely new, exciting, and unrivaled format. 
                            </p>

                            <h4>ENGAGE DEALERS AUDIENCE </h4>
                            <p className="small">
                                Online engagement could be the difference between you and your competitors. There is no better way to show off your vehicles/showroom than through the use of a fully immersive virtual tour. 
                            </p>

                            <h4>24/7 VR TOURS FIT BUYERS BUSY SCHEDULES </h4>
                            <p className="small">3D VR Tours allow flexible instant remote viewing anytime, anywhere. </p>

                            <h4>QUALITY INFORMATION AND IMAGERY  </h4>

                            <p className="small">Vehicle views and panoramas are so much more than standard, basic image. Having access to every angle of a car, inside and outside, is extremely valuable. Users will be surprised to see just how realistic, high-quality, and immersive this research process really is. </p>

                            <div className="sr_content--footer">
                                <a href="#goals" className="btn btn-primary pr-5 pl-5 mt-3 smooth">Next
                                <i className="fa fa-chevron-circle-right ml-2" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
     );
}
 
export default FeaturesSection;