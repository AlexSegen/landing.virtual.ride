import React from 'react';

const GoalsComponent = () => {
    return ( 
    <section className="sr_section" id="goals">
        <div className="container vh--100 flex-justify-center sr_section--pading">
          <div className="row">
            <div className="col-sm-6">
              <div className="sr_section--content text-justify sr--anim wow fade-in" >
                <h2 className="sr_section--title sr--anim wow tracking-in-contract" data-wow-delay=".5s">
                  Goals
                </h2>
                <div className="sr_divider --brand "></div>

                <h4 className="text-dark mt-5">General</h4>
                <p>
                  Make a technological platform available to private and automotive users, which will improve the user experience in terms of the visibility of high-end automobiles.
                </p>

                <h4 className="text-dark mt-5">Specific</h4>
                <p>
                  Build a virtual Showroom with high-end vehicles, where you can see both interior and exterior in 360°.
                </p>

                <p>
                  Incorporate contact points in the image both inside and outside the vehicle, which, when pressed, allow the user to know the detail of the component of the selected vehicle.
                </p>

                <p>
                  Increase high socioeconomic user segment traffic to our portals, in order to measure behavior.
                </p>

                <div className="sr_content--footer">
                  <a href="#demo" className="btn btn-primary pr-5 pl-5 mt-3 smooth">Continue <i className="fa fa-chevron-circle-right ml-2" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sr_section--content  sr--anim wow fade-in">
                <figure className="sr_figure">
                  <img src="/assets/img/mockup01.jpg" className="img-fluid d-block b-radius-5 shadow sr_img-borders" alt=""/>
                </figure>
              </div>
            </div>
          </div>
        </div>
    </section>
     );
}
 
export default GoalsComponent;