const Projects = () => {
    return (
        <section className="apihu-port-service-area" id="apihu-port-feature">
          <img className="apihu-port-service-shape-1" src="./assets/service-shape-1.png" alt="Service Shape" />
          <img className="apihu-port-service-shape-2" src="./assets/service-shape-2.png" alt="Service Shape" />
    
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="apihu-port-section-heading">
                  <p className="apihu-port-section-subtitle">Trying to make this section powerful and inspiring.</p>
                  <h2 className="apihu-port-section-title">Projects and <span className="apihu-port-section-title-color">Achievements</span>.</h2>
                </div>
              </div>
            </div>
    
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.2s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-chart-bar"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">WanderLust</h3>
                  <p className="apihu-port-single-service-text">Wanderlust is a web application that allows users to share and explore unique accommodations around the world. Whether it's a cozy home, a luxurious hotel room, or a charming cottage, Wanderlust provides a platform for users to showcase their properties and connect with like-minded travelers.</p>
                  <a className="apihu-port-single-service-btn" href="https://wanderlust-z0de.onrender.com/listings" target="_blank">Live Demo <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.4s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Notes App</h3>
                  <p className="apihu-port-single-service-text">The Note App is a web application designed to help users create, update, delete, and search notes efficiently. It features a user-friendly interface and leverages local storage for data persistence.</p>
                  <a className="apihu-port-single-service-btn" href="https://main--mk-notes.netlify.app/" target="_blank">Live Demo <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.6s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-paintbrush"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Moshop</h3>
                  <p className="apihu-port-single-service-text">At Moshop, we redefine online shopping, offering a curated collection of the latest trends in men's, women's, and kids' garments. We pride ourselves on being your go-to destination for stylish and affordable fashion. </p>
                  <a className="apihu-port-single-service-btn" href="https://mk-mojib.github.io/ecommerce-react-app/" target="_blank">Live Demo <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.8s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-code-merge"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Star Wars Planets Directory</h3>
                  <p className="apihu-port-single-service-text">Welcome to the Star Wars Planets Explorer, a captivating React web application crafted to showcase the awe-inspiring planets from the Star Wars universe. Leveraging the power of the Star Wars API (SWAPI), this project goes beyond the ordinary, not only providing detailed information about each celestial body but also unveiling the notable residents that call these planets home.</p>
                  <a className="apihu-port-single-service-btn" href="https://mk-mojib.github.io/star-wars-planets/" target="_blank">Live Demo <i className="fas fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="apihu-port-service-load-more-btn">
                  <a href="#">Load More <i className="fas fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
 
export default Projects;