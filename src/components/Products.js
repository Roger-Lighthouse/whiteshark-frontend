import React from 'react';
import { connect } from 'react-redux'
import img_W1 from '../images/w1.jpg'
import img_W2 from '../images/w2.jpg'
import img_W3 from '../images/w3.jpg'
import img_W4 from '../images/w4.jpg'
import Eaves from '../images/eaves.jpg'
import ExtraMilePainting from '../images/extraMilePainting.jpg'
import BookJobModal from './BookJobModal'
import TakeMoney from './StripeCheckout'
import BookPaintingModal from './BookPaintingModal'
import BookEavesModal from './BookEavesModal'
import VideoModal from './videoModal'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
const Currency = require('react-currency');


const Products = (props) => (
  <div>
    <div id="productsContainer">
      <div className="row">
        <div id="side-bar" className="col-md-3">
          <p className="lead"></p>
          <div className="list-group">
            {/* <Link to="/window-cleaning" className="list-group-item">
              Window Cleaning
            </Link>
            <a href="#" className="list-group-item">Eavestrough Cleaning</a>
            <a href="#" className="list-group-item">Exra Mile Painting</a>
            <a href="#" className="list-group-item">Lawn Care</a>
            <a href="#" className="list-group-item">Request Odd Job</a> */}
          </div>
          <div>
            <VideoModal className="col-md-3"/>
             <TakeMoney amount="8000"/>
          </div>
        </div>

        <div className="col-md-9">
          {/* <div className="row carousel-holder">
            <div className="col-md-12">
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <img className="slide-image" src="http://placehold.it/800x300" alt=""></img>
                  </div>
                  <div className="item">
                    <img className="slide-image" src="http://placehold.it/800x300" alt=""></img>
                  </div>
                  <div className="item">
                    <img className="slide-image" src="http://placehold.it/800x300" alt=""></img>
                  </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
              </div>
            </div>
          </div> */}
          <div className="row">
          {/* <WindowJobs /> */}

          <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
              <Image src={img_W1} rounded></Image>
              <div className="caption">
                <h4>
                  Exterior only [W1]
                </h4>
                <h2 className="pull-right">
                  {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                </h2>
                <p>No removal of window, storm or screen. Remove loose dirt and water from sills.</p>
              </div>
              <BookJobModal jobTitle="Exterior only [W1]"
                jobDesc="No removal of window, storm or screen. Remove loose dirt and water from sills."
                jobType="W1"/>
            </div>
          </div>

          <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
              <Image src={img_W2} rounded></Image>
              <div className="caption">
                <h4>
                  Two-sided job [W2]
                </h4>
                <h2 className="pull-right">
                  {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                </h2>
                <p>Interior and exterior of window or storm. No removal of window, storm or screen. Remove loose dirt and water from sills.</p>
              </div>
              <BookJobModal jobTitle="Two-sided job [W2]"
                jobDesc="Interior and exterior of window or storm. No removal of window, storm or screen. Remove loose dirt and water from sills."
                jobType="W2"/>
            </div>
          </div>

          <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
              <Image src={img_W3} rounded></Image>
              <div className="caption">
                <h4>
                  Three sided job [W3]
                </h4>
                <h2 className="pull-right">
                  {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                </h2>
                <p>Brush screens to remove loose dirt. Remove storm, clean both sides. Clean exterior window. Replace storm. Remove loose dirt and water form sills.</p>
              </div>
              <BookJobModal jobTitle="Three sided job [W3]"
                jobDesc="Brush screens to remove loose dirt. Remove storm, clean both sides. Clean exterior window. Replace storm. Remove loose dirt and water form sills."
                jobType="W3"/>
            </div>
          </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <Image src={img_W4} rounded></Image>
                <div className="caption">
                  <h4>
                    Four sided job [W4]
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>Remove storm, clean both sides. Clean both sides of window. Brush screens to remove loose dirt. Replace storm. Remove loose dirt and water from sills.</p>
                </div>
                <BookJobModal jobTitle="Four sided job [W4]"
                  jobDesc="Remove storm, clean both sides. Clean both sides of window. Brush screens to remove loose dirt. Replace storm. Remove loose dirt and water from sills."
                  jobType="W4"/>
              </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <Image src={Eaves} rounded></Image>
                <div className="caption">
                  <h4>
                    Eavestrough Cleaning
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>We clean thousands of eavestroughs every year.</p>
                </div>
                <BookEavesModal />
              </div>
            </div>

            <div className="col-sm-4 col-lg-4 col-md-4">
              <div className="thumbnail">
                <Image src={ExtraMilePainting} rounded></Image>
                <div className="caption">
                  <h4>
                    Extra Mile Painting
                  </h4>
                  <h2 className="pull-right">
                    {/* <Currency symbol="$" value={ props.client.current_w1 * 100} /> */}
                  </h2>
                  <p>The crews are comprised of full time painters who have years of experience in residential homes. We have painted over 2,500 homes in the Greater Toronto Area.</p>
                </div>
                <BookPaintingModal />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Products;
