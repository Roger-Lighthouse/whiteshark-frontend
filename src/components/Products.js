import React from 'react';
import { connect } from 'react-redux'

import img_W1 from '../images/W1.jpg'
import BookJobModal from './BookJobModal'
import TakeMoney from './StripeCheckout'
import VideoModal from './videoModal'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
const Currency = require('react-currency');

const Products = (props) => (
  <div>

     <div className="container">
       <div className="row">

            <div id="side-bar" className="col-md-3">
                <p className="lead"></p>
                <div className="list-group">
                  <Link to="/window-cleaning" className="list-group-item">
                    Window Cleaning
                  </Link>
                  <a href="#" className="list-group-item">Eavestrough Cleaning</a>
                  <a href="#" className="list-group-item">Exra Mile Painting</a>
                  <a href="#" className="list-group-item">Lawn Care</a>
                  <a href="#" className="list-group-item">Request Odd Job</a>
                </div>
                <div>
                  <VideoModal id="VideoModal" className="col-md-3"/>
             <TakeMoney amount="8000"/>
  </div>
        </div>

        <div className="col-md-9">
          <div className="row carousel-holder">
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
          </div>
          <div className="row">

                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <Image src={img_W1} height="150" width="320" rounded></Image>
                            <div className="caption">
                                <h4><a href="#">Exterior only [W1]</a>
                                <h2 className="pull-right"> <Currency symbol="$" value={ props.client.current_w1 * 100} /></h2>
                                </h4>
                                <p>No removal of window, storm or screen.
                                  Remove loose dirt and water from sills.</p>
                            </div>
                          <BookJobModal data-jobType="W1"/>
                        </div>
              </div>
              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                <img src="http://placehold.it/320x150" alt=""></img>
                  <div className="caption">
                    <h4 className="pull-right">$64.99</h4>
                    <h4><a href="#">Second Product</a>
                    </h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                    <div className="ratings">
                      <p className="pull-right">12 reviews</p>
                      <p>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4">
                  <div className="thumbnail">
                    <img src="http://placehold.it/320x150" alt=""></img>
                    <div className="caption">
                      <h4 className="pull-right">$74.99</h4>
                      <h4><a href="#">Third Product</a>
                      </h4>
                      <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="ratings">
                      <p className="pull-right">31 reviews</p>
                      <p>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-4 col-md-4">
                  <div className="thumbnail">
                    <img src="http://placehold.it/320x150" alt=""></img>
                    <div className="caption">
                      <h4 className="pull-right">$84.99</h4>
                      <h4><a href="#">Fourth Product</a>
                      </h4>
                      <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="ratings">
                    <p className="pull-right">6 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-4 col-md-4">
                <div className="thumbnail">
                  <img src="http://placehold.it/320x150" alt=""></img>
                  <div className="caption">
                    <h4 className="pull-right">$94.99</h4>
                    <h4><a href="#">Fifth Product</a>
                    </h4>
                    <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="ratings">
                    <p className="pull-right">18 reviews</p>
                    <p>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
      <div className="container">
        {/* <!-- /.container --> */}
        <hr></hr>
        {/* <!-- Footer --> */}
        <footer id="footer">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; 2015 White Shark LTD.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
)

export default Products;
