const About = () => {
    return (    <section className="apihu-port-about-area" id="apihu-port-resume">
    <img src="./assets/about-shape-1.png" alt="" className="apihu-port-about-shape" />

    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="apihu-port-about-left wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
            <div className="apihu-port-about-img">
              <img src="./assets/left_python.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="apihu-port-about-right">
            <h3 className="apihu-port-about-subtitle">About Khalid</h3>
            <h2 className="apihu-port-about-title">Passionate about new tech. and <span>development</span>.</h2>
            <p className="apihu-port-about-text">I am <b> software engineer</b> specializing in <b>diverse software and web app development. Leveraging my extensive experience</b>  I design and build tailored, efficient solutions that drive business efficiency and enhance user experience. My skills cover the entire software development lifecycle, delivering high-quality, scalable solutions to complex challenges effectively..</p>
            <div className="apihu-port-about-expertise">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active show" id="pills-home-tab" href="https://www.linkedin.com/in/mdkhalidmojib/" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active show" id="pills-profile-tab" href="https://github.com/mk-mojib/" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-brands fa-square-github"></i> Github</a>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <ul>
                  <li>
                      <span className="apihu-port-expertise-title">working with <font style={{ color: 'blue' }}>HTML5, CSS5, JavaScript</font>.</span>
                      <span className="apihu-port-expertise-text">Frontend</span>
                    </li>
                    <li>
                      <span className="apihu-port-expertise-title">Worked with <font style={{ color: 'blue' }}>Express.js, Nodejs</font></span>
                      <span className="apihu-port-expertise-text">Backend FrameWorks</span>
                    </li>
                    <li>
                      <span className="apihu-port-expertise-title">working with <font style={{ color: 'blue' }}>MongoDB, Firebase, MySQL</font>.</span>
                      <span className="apihu-port-expertise-text">Database</span>
                    </li>
                    <li>
                      <span className="apihu-port-expertise-title">Currently working with <font style={{ color: 'blue' }}>React (A framework by Meta)</font></span>
                      <span className="apihu-port-expertise-text">Soon going to gain some experience in it.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
} 


 
export default About;