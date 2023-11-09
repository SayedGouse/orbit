import React from "react";

const AboutUs = () => {
  return (
    <>
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
      <section style={{ backgroundImage: 'url(imagebg.png)', width: '100%', height: '100%', backgroundSize: 'cover', }}>
        <div className="container-fluid" >
          <div className="row">
            <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'justify' }} className="col-lg-8 ">
              <h3 className="fw-bold mt-5">
                We find the path for your solution, your<br></br>
                deployments and all your IT needs with one point<br></br>
                solution.
                <p>
                  We work hard to thrive with success and go beyond<br></br>
                  with the aim of achieving more for our customers.
                </p>
                <button className="btn btn-warning">Learn more</button>
              </h3>
            </div>
            <div className="col-lg-4 p-5">
              <img src="animation-unscreen.gif" className="mt-5 " width={400} height={400} alt="not found" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'end' }} >
              <p>
                we are proud to announce we are the fastest growing IT<br></br>
                company with a 100% success rate and happy<br></br>
                customers. We could value this as our customer did our <br></br>
                marketing roles and referred to other customers
                <a><p className="text-warning">More about our Customers</p></a>
              </p>
              <line style={{ border: '1px solid black', margin: '0 5% ' }} />


            </div>
            <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'start' }} >
              <p>
                With diverse employee culture and talent, we always <br></br>
                aim for goals and are always time sensitive for our <br></br>
                project. We value your time and Service Level <br></br>
                agreements are our core preamble to follow
                <a><p className="text-warning">More About Employess</p></a>
              </p>
            </div>
            <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', }}>
              <h2 className="fw-bold">Providing Path to individuals and organizations to achieve more
                <p >We are keen to grow. We strive with the ideology “your success is our success”. This ensures quality delivery and scalability of <br></br>
                  your organization in a hassle-free environment.</p>
              </h2>

            </div>
          </div>

        </div>
      </section>
      <div className="container-fluid p-5" >
        <div className="row">
          <div className=" Employes col-lg-4" style={{textAlign:'center'}}>
            <h5>Employes</h5>
            <hr style={{ border: '1px solid black' }} />

          </div>
          <div className=" Work life col-lg-4" style={{textAlign:'center'}}>
            <h5>Work life</h5>
            <hr style={{ border: '1px solid black' }} />

          </div>
          <div className=" Customers  col-lg-4" style={{textAlign:'center'}}>
            <h5>Customers </h5>
            <hr style={{ border: '1px solid black' }} />

          </div>

        </div>

      </div>

    </>
  );
};

export default AboutUs;
