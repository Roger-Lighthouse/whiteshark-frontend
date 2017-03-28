import React from 'react'
import { Link } from 'react-router-dom'
import {
  Badge
} from 'react-bootstrap'

const Navbar = () => {
  return (
    <div>
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
            <a className="navbar-brand" href="/">White Shark</a>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
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
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container --> */}
      </nav>
  </div>
  )
}
export default Navbar;
