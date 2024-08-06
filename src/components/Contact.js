const Contact = () => {
    return (  
        <section className="apihu-port-contact-area" id="contact-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-left">
              <div className="apihu-port-section-heading">
                <p className="apihu-port-section-subtitle">Contact Me</p>
                <h2 className="apihu-port-section-title">Get in Touch With Me</h2>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-xl-6">
              <div className="apihu-port-contact-right">
                <div className="apihu-port-contact-right-img">
                  <img src="./assets/contact-illust.png" alt="Contact Right" />
                </div>
                <div className="apihu-port-contact-right-content">
                  <div className="apihu-port-contact-text">
                    <span className="apihu-port-contact-number"><a href="mailto:mdkhalidmojib@gmail.com">MailTo: <font style={{ fontWeight: 'bold', color: '#e70280' }}>mdkhalidmojib@gmail.com</font></a></span>
                    <span className="apihu-port-contact-email"><a href="https://www.linkedin.com/in/mdkhalidmojib/" target="_blank"> Linkedin: <font style={{ fontWeight: 'bold', color: '#e70280' }}>Md Khalid Mojib</font></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    );
}
 
export default Contact;