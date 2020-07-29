import React from 'react';

const AboutSection = () => {
    return ( 
        <section className="sr_section" id="about">
            <div className="container vh--100 flex-justify-center sr_section--pading">
                <div className="row">
                    <div className="col-sm-6">
                    <div className="sr_section--content text-justify sr--anim wow fade-in">
                        <h2 className="sr_section--title sr--anim wow tracking-in-contract" data-wow-delay=".5s">
                            About
                        </h2>
                        <div className="sr_divider --brand "></div>
                        <p>
                            In 2018 <strong>Peugeot</strong> was the first brand in Chile to offer 100% online sales for its models,
                            this year other
                            brands have joined this modality. Seeing this emerging market in the <strong>Hackaton -Chileautos
                            2019</strong> team
                            arose the need to provide users with a technological platform capable of transforming that moment of
                            acquisition of a vehicle into a <strong> 100% online experience</strong>.
                        </p>
                        <div className="sr_content--footer">
                            <a href="#features" className="btn btn-primary pr-5 pl-5 mt-3 smooth" >Continue
                            <i className="fa fa-chevron-circle-right ml-2" aria-hidden="true" ></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="sr_section--content  sr--anim wow fade-in">
                        <figure className="sr_figure">
                            <video
                                className="shadow"
                                muted="1"
                                loop
                                autoPlay="1"
                                width="100%"
                                style={{maxWidth: "600px"}}>
                                <source src="/assets/media/demo.mp4" type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                            <div className="sr_figure--caption shadow">
                                We are making online sales easier
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default AboutSection;