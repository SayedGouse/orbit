import React from "react";

const AboutUs = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="orbit logo 11.png" alt="" srcset="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Contact us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All orbit
              </a>
              <ul
                className="dropdown-menu p-3"
                aria-labelledby="navbarDropdown"
              >
                <div className="row">
                  <div className="col-lg-3">
                    <ul>
                      <li className=" list-unstyled">
                        <a className="dropdown-item color-black" href="#">
                          <h5 className="text-center">Services</h5>
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Web Development
                        </a>
                      </li>

                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          App Development
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Cloud Solutions
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Managed Service Providers
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Digital Marketing
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          SEO
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3">
                    <ul>
                      <li className=" list-unstyled">
                        <a className="dropdown-item color-black" href="#">
                          <h5 className="text-center">Products</h5>
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Ticketing System
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Billing System
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          PMS
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3">
                    <ul>
                      <li className=" list-unstyled">
                        <a className="dropdown-item color-black" href="#">
                          <h5 className="text-left">Company</h5>
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Careers
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Team
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Blog
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          About Orbit
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3">
                    <ul>
                      <li className=" list-unstyled">
                        <a className="dropdown-item color-black" href="#">
                          <h5 className="text-left">Other</h5>
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Lorem
                        </a>
                      </li>
                      <li className=" list-unstyled">
                        <a className="dropdown-item" href="#">
                          Ipsum
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <i className="fa fa-user p-3"></i>
          <a className="nav-link text-dark" href="/signin">
            Sign in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AboutUs;
