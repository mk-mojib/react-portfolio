import manuu from "./asset/manuu.jpg";
import rgpv from "./asset/rgpv.jpeg";
import bseb from "./asset/bseb.jpeg";

const Certifecations = () => {
    return (
        <section className="apihu-port-pricing-area" id="apihu-port-pricing-area">
          <img className="apihu-port-pricing-shape-left" src="./assets/pricing-left-shape.png" alt="Pricing Area Shape left" />
          <img className="apihu-port-pricing-shape-right" src="./assets/pricing-right-shape.png" alt="Pricing Area Shape right" />
    
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="apihu-port-section-heading">
                  <p className="apihu-port-section-subtitle">Qualifications</p>
                  <h2 className="apihu-port-section-title">Academic and Professional</h2>
                  <p className="apihu-port-section-text"></p>
                </div>
              </div>
            </div>
    

            <div className="row">
              
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="apihu-port-single-pricing wow fadeInUp" data-wow-delay="0.2s">
                <h3>10<sup>th</sup> (Matric)</h3><br />
                <h4>BSEB - Patna <br />2018</h4>
                  <h4>  <br /> 
                  2017 - 2018</h4>
                  <ul>
                    <li><i className="fa-solid fa-location-pin"></i> Darbhanga</li>
                    <li>Percentage : 54%</li>
                    <li><img src={bseb} alt="BSEB"  style={{height:'100px',}}/></li>
                  </ul>
                  <a>
                    Completed  <i className="fa-solid fa-business-time"></i>
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="apihu-port-single-pricing wow fadeInUp" data-wow-delay="0.2s">
                <h3>Diploma In Computer Science</h3>
                <h4>MANUU - Gachibowli <br />2021</h4>
                  <h4>  <br /> 
                  2018 - 2021</h4>
                  <ul>
                    <li><i className="fa-solid fa-location-pin"></i> Hyderabad</li>
                    <li>CGPA : 8.7</li>
                    <li><img src={manuu} alt="MANUU"  style={{height:'100px',}}/></li>
                  </ul>
                  <a>
                    Completed  <i className="fa-solid fa-business-time"></i>
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="apihu-port-single-pricing wow fadeInUp" data-wow-delay="0.2s">
                <h3>Bachelor's In Computer Science</h3>
                  <h4> RGPV - Bhopal <br /> 
                  2024</h4>
                  <h4>  <br /> 
                  2018 - 2021</h4>
                  <ul>
                    <li><i className="fa-solid fa-location-pin"></i> Madhya Pradesh</li>
                    <li>CGPA : 7.53</li>
                    <li><img src={rgpv} alt="RGPV"  style={{height:'100px',}}/></li>

                  </ul>
                  <a>
                    Completed  <i className="fa-solid fa-business-time"></i>
                  </a>
                </div>
              </div>
            </div>
            
            </div> 
        </section>
      ); 
}
 
export default Certifecations;