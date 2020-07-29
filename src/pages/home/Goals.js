import React from 'react';

const GoalsComponent = () => {
    return ( 
    <section className="sr_section" id="goals">
        <div className="container vh--100 flex-justify-center sr_section--pading">
          <div className="row">
            <div className="col-sm-6">
              <div
                className="sr_section--content text-justify sr--anim wow fade-in"
              >
                <h2
                  className="sr_section--title sr--anim wow tracking-in-contract"
                  data-wow-delay=".5s"
                >
                  Goals
                </h2>
                <div className="sr_divider --brand "></div>

                <h4 className="text-dark mt-5">General</h4>
                <p>
                  Poner a disposición de los usuarios particulares y automotoras unaplataforma tecnológica, que permita mejorar la experiencia usuariaen cuanto a la visibilidad de automóviles de alta gama desde el portalde Chileautos.
                </p>

                <h4 className="text-dark mt-5">Specific</h4>
                <p>
                  Construir un Showroom virtual con vehículos de alta gama, en dondese pueda ver tanto el interior como exterior en 360º.
                </p>

                <p>
                  Incorporar puntos de contacto en la imagen tanto del interior como enel   exterior  del   vehículo,   los   cuales,   al   ser  pulsados,   permitan   alusuario conocer el detalle de componente del vehículo seleccionado.
                </p>

                <p>Incrementar el trafico de usuarios de Segmento socioeconómico altohacia el portal de Chileautos, con el fin de medir el comportamiento.</p>

                <div className="sr_content--footer">
                  <a href="#demo" className="btn btn-primary pr-5 pl-5 mt-3 smooth"
                    >Continue
                    <i
                      className="fa fa-chevron-circle-right ml-2"
                      aria-hidden="true"
                    ></i
                  ></a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="sr_section--content  sr--anim wow fade-in">
                <figure className="sr_figure">
                  <img
                    src="/assets/img/mockup01.jpg"
                    className="img-fluid d-block b-radius-5 shadow sr_img-borders"
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
    </section>
     );
}
 
export default GoalsComponent;