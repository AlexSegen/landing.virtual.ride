import React, { useRef } from 'react';
const Header = () => {

    const navMenu = useRef(null);
    const toggleButton = useRef(null);


    const handleEvents = (e) => {
        const body = document.getElementsByTagName("BODY")[0];

        if (navMenu.current.classList.contains("open")) {
            navMenu.current.classList.remove("open");
            body.classList.remove("navbar-open");
            toggleButton.current.classList.remove("active");
            } else {
            navMenu.current.classList.add("open");
            body.classList.add("navbar-open");
            toggleButton.current.classList.add("active");
        }

    }

    return ( 
        <header>
            <nav className="sr__navbar">
            <div className="container1">
                <div className="nav-content">
                <ul className="nav-menu" ref={navMenu} id="nav-menu">
                    <li className="sr--anim wow slide-in-left" data-wow-delay="0s">
                    <a className="smooth" href="#top">Home</a>
                    </li>
                    <li className="sr--anim wow slide-in-left" data-wow-delay=".1s">
                    <a className="smooth" href="#about">About</a>
                    </li>
                    <li className="sr--anim wow slide-in-left" data-wow-delay=".2">
                    <a className="smooth" href="#features">Features</a>
                    </li>
                    <li className="sr--anim wow slide-in-left" data-wow-delay=".3s">
                    <a className="smooth" href="#goals">Goals</a>
                    </li>
                    <li className="sr--anim wow slide-in-left" data-wow-delay=".4s">
                    <a className="smooth" href="#demo">Demo</a>
                    </li>
                </ul>
                <button onClick={handleEvents} ref={toggleButton} className="nav-toggle" id="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                </div>
            </div>
            </nav>
        </header>
     );
}
 
export default Header;