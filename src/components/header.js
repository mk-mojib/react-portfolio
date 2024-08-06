import React from 'react';

const Header = () => {
    return (
        <header className="apihu-port-header-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-3">
                        <div className="apihu-port-logo">
                        <img 
                            src="./assets/K.png" 
                            alt="Khalid Portfolio" 
                            style={{ width: '50px', height: 'auto' }} 
      />                        </div>
                    </div>
                    <div className="col-xl-8 d-none d-lg-block text-center col-lg-8">
                        <div className="apihu-port-main-navigation">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#apihu-port-resume">About</a></li>
                                <li><a href="#apihu-port-feature">Projects</a></li>
                                <li><a href="#apihu-port-pricing-area">Qualifications</a></li>
                                <li><a href="#skills">Skills</a></li>

                                <li><a href="#contact-details">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-10 col-9 text-right">
                        <div className="apihu-port-header-cta">
                            <a href="https://www.linkedin.com/in/mdkhalidmojib/" target='_blank'>Let's Chat <i className="fas fa-comment-dots"></i></a>
                        </div>

                        <div className="apihu-port-mobile-menu-hamburger">
                            <a href="#"><i className="fas fa-bars"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="apihu-port-mobile-menu">
                <a href="#" className="apihu-port-menu-close"><i className="fas fa-times"></i></a>
                <a href="#" className="apihu-port-logo-wrapper"><img src="./assets/white-logo.png" alt="" /></a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#apihu-port-resume">About</a></li>
                    <li><a href="#apihu-port-feature">Projects</a></li>
                    <li><a href="#apihu-port-pricing-area">Qualifications</a></li>
                    <li><a href="#contact-details">Contact</a></li>
                </ul>
            </div>
            {/* Mobile Menu End */}
        </header>
    );
}

export default Header;
