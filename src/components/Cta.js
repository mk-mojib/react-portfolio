
const CtaSection = () => {
  return (
    <section className="apihu-port-cta-area">
      <img className="apihu-port-cta-shape" src="./assets/cta-bg.png" alt="Cta shape" />

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="apihu-port-cta-content-wrap">

              <img className="apihu-port-cta-container-shape" src="./assets/cta-bg-shape.png" alt="Cta container shape" />

              <div className="row">
                <div className="col-xl-8 col-lg-8">
                  <div className="apihu-port-cta-content-text">
                    <p>Get It Touch</p>
                    <h2>Have a Project on Your Mind</h2>
                    <a href="#contact-details">Contact Me +</a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="apihu-port-cta-content-img">
                    <img src="./assets/cta-right.png" alt="Call to action area" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
