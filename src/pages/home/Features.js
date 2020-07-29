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

                            <h4>Immediacy</h4>
                            <p className="small">
                                <strong>DISPOSITIVOS PROVEEN ACCESO EN TIEMPO REAL</strong> y vista real de Showroom con vehiculos vistos en 360°.
                            </p>
                            <p className="small">
                                <strong>EL CAR BUYING JOURNEY SE ESTA MOVIENDO A DIGITAL</strong>, podemos ver muchos vehiculos en un solo espacio digital sin movernos de casa para comprar.
                            </p>

                            <h4>Information</h4>
                            <p className="small">
                                Optimizamos el tiempo de compra de un cliente, information detallada de cada vehiculo en muestra. <strong>AUTOMONIA DE VISITAR TODOS LOS VEHICULOS QUE SE PROPONGA EL CLIENTE</strong>
                            </p>

                            <h4>Online Consultations</h4>
                            <p className="small"><strong>DISMINUYE EL TIEMPO DE BUSQUEDA DE INFORMACION EN DISTINTOS PORTALES</strong>, ahorro de espacio Fisico en automotoras a future.</p>

                            <p className="small">DISMINUYE EL TIEMPO PARA CONTACTAR AL CLIENTE CON UN EJECUTIVO DE VENTA</p>

                            <h4>Innovation</h4>
                            <p className="small"><strong>Otorga mayor sensacion de realism al estar visitando y comprando el vehiculo</strong>, Pocos competidores en el Mercado con la innovacion que puedan competir con los nombres de las marcas de Carsales.</p>

                            <p className="small"><strong>360°  tanto en vistas interiors y exteriors de los vehiculos</strong></p>

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