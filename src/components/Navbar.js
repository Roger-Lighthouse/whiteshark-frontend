import React from 'react'
import { Link } from 'react-router-dom'
import { Badge, Image } from 'react-bootstrap'
import WhiteShark from '../images/WhiteShark.png'

const Navbar = () => {
  return (
    <div>
      <div className="wrapper">
        <nav id="navbar" className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">
                  <Image id="brand-image" src={ WhiteShark }></Image>
                  <h2 id="brand">White Shark</h2>
                </Link>
              </div>
            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul id="nav-btns" className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">
                    Book Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/myJobs">
                    My Jobs
                    <Badge id="myJobsBadge">4</Badge>
                  </Link>
                </li>
                <li>
                  <Link to="/myProfile">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default Navbar;
