import React from 'react'
import HomeStars from '../images/homestars_logo.png'
const Footer = () => {

  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-social-icons">
              <h4 className="_14">Visit our Facebook page</h4>
              <a href="https://www.facebook.com/whitesharkwindows/" className="social-icon">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div className="footer-social-icons">
              <h4 className="_14">Read our reviews on HomeStars</h4>
              <a href="https://homestars.com/companies/229833-white-shark-window-cleaning?service_area=1792369" className="social-icon">
                <img src={HomeStars}/>
              </a>
            </div>
            <div className="col-lg-12">
              <p>Copyright &copy; 2015 White Shark LTD.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



export default Footer
