import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const VRCarousel = () => {
    return ( 
        <Carousel>
            <div className="sr_figure">
                <img src="/assets/img/slide01.jpg" className="img-fluid d-block b-radius-5 flip-in-hor-bottom shadow" alt="Immediacy" />
                <div className="sr_figure--caption shadow">
                    Immediacy
                </div>
            </div>
            <div className="sr_figure">
                <img src="/assets/img/slide03.jpg" className="img-fluid d-block b-radius-5 flip-in-hor-bottom shadow" alt="Online Consultations" />
                <div className="sr_figure--caption shadow">
                    Online Consultations
                </div>
            </div>
            <div className="sr_figure">
                <img src="/assets/img/slide02.jpg" className="img-fluid d-block b-radius-5 flip-in-hor-bottom shadow" alt="Innovation" />
                <div className="sr_figure--caption shadow">
                    Innovation
                </div>
            </div>
        </Carousel>
     );
}
 
export default VRCarousel;