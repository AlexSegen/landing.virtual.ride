import React from 'react';

const DemoComponent = () => {
    return ( 
        <section
        className="sr_section bg--dark vh--100 flex-justify-center" id="demo" >
        <div className="container  sr_section--pading">
          <div className="row">
            <div className="col-sm-12">
              <div className="sr_launch--demo sr--anim wow tracking-in-expand-fwd-top" data-wow-delay=".5s" >
                <h3>
                  Check out <br />
                  our <span>VirtualRide</span> Demo
                </h3>
                <p>Experience our online tour</p>
                <a href="http://operaciones.chileautos.cl/hackathon/virtual-ride/" rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-lg pr-5 pl-5 btn-launch" >
                  <i className="fa fa-rocket"></i> LAUNCH</a>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default DemoComponent;