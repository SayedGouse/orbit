import React, { useState } from "react";
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs'
import { BiRightArrowCircle } from 'react-icons/bi'

import '../pages/Aboutus.css'



const AboutUs = () => {

  const [activeSection, setActiveSection] = useState("Employees");
  const [isDivVisible, setDivVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const showCategory = (section) => {
    setActiveSection(section);
  };


  const toggleVisibility = () => {
    setIsHidden(!isHidden);
    setDivVisible(!isDivVisible)
  };



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
                <a className="nav-link active" aria-current="page" href="/">
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
                <p style={{ fontSize: '20px',lineHeight:'25px'}}>
                  We work hard to thrive with success and go beyond<br></br>
                  with the aim of achieving more for our customers.
                </p>
                <button className="btn btn-warning">Learn more</button>
              </h3>
            </div>
            <div className="col-lg-4 p-5">
              <img src="animation-unscreen.gif" className="Orbitlogo mt-5 " width={400} height={400} alt="not found" />
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="container-fluid">
          <div className="row">
            <div className="employeesandcustomer col-lg-6"  >
              <p  style={{ fontSize: '20px',lineHeight:'25px'  }}>
                we are proud to announce we are the fastest growing IT<br></br>
                company with a 100% success rate and happy<br></br>
                customers. We could value this as our customer did our <br></br>
                marketing roles and referred to other customers
                <a href="#Customers"><p  onClick={() => showCategory('Customers')} style={{cursor:'pointer'}} className="text-warning">More about our Customers ,<BiRightArrowCircle/></p></a>
              </p>
              <line className="middleline" style={{ border: '1px solid black', margin: '0 5% ' }} />


            </div>
            <div className="andcustomer col-lg-6" >
              <p style={{ fontSize: '20px',lineHeight:'25px'  }}>
                With diverse employee culture and talent, we always <br></br>
                aim for goals and are always time sensitive for our <br></br>
                project. We value your time and Service Level <br></br>
                agreements are our core preamble to follow
                <a href="#Employees"><p onClick={() => showCategory('Employees')} style={{cursor:'pointer'}} className="text-warning">More About Employess <BiRightArrowCircle/></p></a>
              </p>
            </div>
            <div className="mt-5" style={{ display: 'flex', justifyContent: 'center', }}>
              <h2 className="fw-bold">Providing Path to individuals and organizations to achieve more
                <p style={{ fontSize: '20px',lineHeight:'25px'  }}>We are keen to grow. We strive with the ideology “your success is our success”. This ensures quality delivery and scalability of <br></br>
                  your organization in a hassle-free environment.</p>
              </h2>

            </div>
          </div>

        </div>
      </section>


      <div className="container-fluid p-5">
        <div className="row">
          <div
            className={`Employes col-lg-4 ${activeSection === "Employees" ? "active" : ""}`}
            style={{ textAlign: 'center', cursor: 'pointer', color: activeSection === "Employees" ? 'orange' : 'black' }}
          >
            <h5 onClick={() => showCategory('Employees')}>Employees</h5>
            <hr style={{ border: `1px solid ${activeSection === "Employees" ? 'orange' : 'black'}` }} />
          </div>
          <div
            className={`Work life col-lg-4 ${activeSection === "Work_life" ? "active" : ""}`}
            style={{ textAlign: 'center', cursor: 'pointer', color: activeSection === "Work_life" ? 'orange' : 'black' }}
          >
            <h5 onClick={() => showCategory('Work_life')}>Work life</h5>
            <hr style={{ border: `1px solid ${activeSection === "Work_life" ? 'orange' : 'black'}` }} />
          </div>
          <div
            className={`Work life col-lg-4 ${activeSection === "Customers" ? "active" : ""}`}
            style={{ textAlign: 'center', cursor: 'pointer', color: activeSection === "Customers" ? 'orange' : 'black' }}
          >
            <h5 onClick={() => showCategory('Customers')}>Customers</h5>
            <hr style={{ border: `1px solid ${activeSection === "Customers" ? 'orange' : 'black'}` }} />
          </div>
        </div>
      </div>

      <section id="Employees" style={{ display: activeSection === "Employees" ? "block" : "none" }}>
        <div className="container-fluid" >
          <div className="row">

          <div className="col-lg-5">
              <img className="employeesimg" src="Group 2.png" alt="not found" />

            </div>
            <div className="col-lg-5" style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 className="fw-bold" >
              Orbit Technologys is committed to <br></br>
               fostering a culture of innovation and <br></br>
                continuous learning for its employees
                <p style={{ fontSize: '20px',lineHeight:'25px' }}>
                  We offer flexible work hours and a supportive work environment,<br></br>
                  empowering our employees to learn and grow in their careers.
                </p>
                <p style={{ fontSize: '20px',lineHeight:'25px'  }}>
                  With a team of 42 employees , we are emerging with new quality of <br></br>
                  life and work life balance.
                </p>
              </h2>

            </div>


          </div>

        </div>
      </section>

      <section id="Work_life" style={{ display: activeSection === "Work_life" ? "block" : "none" }}>
        <div className="container-fluid" >
          <div className="row">
            <div className="col-lg-7" style={{ display: 'flex', justifyContent: 'center' }}>
              <h2 className="fw-bold" >
              We are proud to be a diverse and <br></br>
                inclusive company, where everyone feels <br></br>
                welcome and valued, regardless of their <br></br>
                background, identity, or beliefs.
                <p className="mt-3" style={{ fontSize: '20px' ,lineHeight:'25px' }}>
                  We offer flexible work hours and a supportive work environment,<br></br>
                  empowering our employees to learn and grow in their careers.
                </p>
                <p style={{ fontSize: '20px',lineHeight:'25px' }}>
                  With a team of 42 employees , we are emerging with new quality of <br></br>
                  life and work life balance.
                </p>
              </h2>

            </div>
            <div className="col-lg-5" >
              <img className="workusimg" src="workus.png" alt="not found" />

            </div>

          </div>

        </div>
      </section>


      <section id="Customers" style={{ display: activeSection === "Customers" ? "block" : "none" }}>
        <div className="container-fluid" >
          <div className="row">

            <h3 className="customerh3" >Orbit technologys is dedicated to providing its customers <br></br>
              with highest quality products and services.</h3>

            <div className="container-fluid mt-5 p-5"  >
              <div className="row">
                <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="shaheen.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="metropolis hotel.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="tech kawaii.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="urban dhaba.png" width={200} height={150} alt="not found" />
                </div>
                < div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="maha's.png" width={200} height={150} alt="not found" />
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 p-5" >
              <div className="row">
                <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="ktc.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="sana shaheen.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="Kolhapuri Thali logo.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="GR.png" width={200} height={150} alt="not found" />
                </div>
                <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src="ISM.png" width={200} height={150} alt="not found" />
                </div>
              </div>
            </div>
            {
              isDivVisible && (
                <>
                  <div className="container-fluid mt-5 p-5" id='hide' >
                    <div className="row">
                      <div className=" UNION col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="UNION COOPS.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="V2 ULTIMA.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="herbal logo 1.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="HONESTY PERFECTLY.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="NTALICA col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="NTALICA TECH.png" width={200} height={150} alt="not found" />
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid mt-5 p-5" id='hide' >
                    <div className="row">
                      <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="KANCHH.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="BURAQ.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="DOGEMON.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="MASSAGER.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="GURUDEV APP.png" width={200} height={150} alt="not found" />
                      </div>
                    </div>
                  </div>

                  <div className="container-fluid mt-5 p-5" id='hide' >
                    <div className="row">
                      <div className="col-lg-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="UPWARD IMG.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-2" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="CHICKBITES.png" width={200} height={150} alt="not found" />
                      </div>
                      <div className="col-lg-5" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="AL-MADINA.png" width={200} height={150} alt="not found" />
                      </div>
                    </div>
                  </div>
                </>
              )
            }


            <div className="container-fluid mt-5 mb-5" style={{ display: 'flex', justifyContent: 'center' }}>
              {isHidden ? (
                <BsFillArrowUpCircleFill onClick={toggleVisibility} fontSize={70} />
              ) : (
                <BsFillArrowDownCircleFill onClick={toggleVisibility} fontSize={70} />
              )}
            </div>

            <h3 className="mt-2" style={{ textAlign: 'center' }}><span style={{ color: 'orange' }}>Orbit Technologys</span> is a company that is committed to making a difference <br></br>
              in the world. Through our commitment to our customers, employees, and<br></br>
              community, we are building a better future for all.
            </h3>


          </div>
        </div>
      </section>

      <footer class="footer footer1 mt-5">
        <div class="footer p-4">
          <div class="row">
            <div class="col-md-4 mb-5">
              <img src="orbit logo 11.png" class="img-fluid w-30 h-30" />
              <p class="pt-4">
                providing path to individuals and <br />
                Organizations to grow more
              </p>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-lg-4 foot-col mb-2">
                  <h4 class="">Services</h4>
                  <ul class="p-0">
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        Web Development
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        App Development
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        Cloud Solutions
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark"></a>
                      Managed Service Provider
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        Digital Marketing
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark"></a>SEO
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 foot-col mb-2">
                  <h4>Company</h4>
                  <ul class="p-0">
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        About
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        Careers
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        Blog
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark"></a>
                      Support
                    </li>
                  </ul>
                </div>
                <div class="col-lg-3 foot-col mb-2">
                  <h4>Contact</h4>
                  <ul class="p-0">
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark">
                        Email
                      </a>
                    </li>
                    <li class="list-unstyled mb-1">
                      <a href="#" class="text-decoration-none text-dark"></a>
                      Call Us
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 foot-col">
                  <h4>Follow Orbit</h4>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_158_15)">
                        <path
                          d="M19.9375 0.492202H2.0625C1.65693 0.488262 1.26628 0.638061 0.976282 0.908729C0.686281 1.1794 0.520611 1.54883 0.515625 1.93595V19.0674C0.521513 19.4539 0.687579 19.8225 0.977482 20.0925C1.26739 20.3624 1.65752 20.5118 2.0625 20.5078H19.9375C20.3431 20.5109 20.7335 20.3606 21.0233 20.0898C21.3132 19.8189 21.4789 19.4496 21.4844 19.0624V1.93103C21.4771 1.54504 21.3106 1.17737 21.0209 0.907946C20.7313 0.638521 20.3419 0.489114 19.9375 0.492202Z"
                          fill="#0076B2"
                        />
                        <path
                          d="M3.61969 7.99475H6.73235V17.5547H3.61969V7.99475ZM5.17688 3.23694C5.53389 3.23694 5.88287 3.33801 6.17969 3.52737C6.47651 3.71673 6.70782 3.98587 6.84436 4.30074C6.9809 4.61561 7.01654 4.96206 6.94676 5.29627C6.87699 5.63048 6.70494 5.93742 6.45238 6.17828C6.19982 6.41913 5.87809 6.58307 5.5279 6.64935C5.17771 6.71563 4.8148 6.68129 4.48506 6.55065C4.15533 6.42001 3.8736 6.19896 3.6755 5.91546C3.47741 5.63195 3.37185 5.29873 3.37219 4.95795C3.37265 4.50136 3.56299 4.06362 3.90138 3.74091C4.23978 3.41821 4.69855 3.23694 5.17688 3.23694ZM8.68485 7.99475H11.6686V9.30725H11.7098C12.1258 8.55584 13.1398 7.76342 14.6541 7.76342C17.8063 7.75686 18.3906 9.73709 18.3906 12.3047V17.5547H15.278V12.9035C15.278 11.7961 15.2573 10.3704 13.6606 10.3704C12.0639 10.3704 11.7923 11.5779 11.7923 12.8313V17.5547H8.68485V7.99475Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_158_15">
                          <rect width="22" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="#">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_158_10)">
                        <path
                          d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z"
                          fill="url(#paint0_radial_158_10)"
                        />
                        <path
                          d="M15.3125 0H4.6875C2.09867 0 0 2.09867 0 4.6875V15.3125C0 17.9013 2.09867 20 4.6875 20H15.3125C17.9013 20 20 17.9013 20 15.3125V4.6875C20 2.09867 17.9013 0 15.3125 0Z"
                          fill="url(#paint1_radial_158_10)"
                        />
                        <path
                          d="M10.0007 2.1875C7.87898 2.1875 7.61266 2.1968 6.77938 2.23469C5.94766 2.27281 5.37992 2.40445 4.8832 2.59766C4.3693 2.79719 3.93344 3.06414 3.49922 3.49852C3.06461 3.93281 2.79766 4.36867 2.5975 4.88234C2.40375 5.37922 2.27195 5.94719 2.23453 6.77852C2.19727 7.61188 2.1875 7.87828 2.1875 10.0001C2.1875 12.1219 2.19688 12.3873 2.23469 13.2206C2.27297 14.0523 2.40461 14.6201 2.59766 15.1168C2.79734 15.6307 3.0643 16.0666 3.49867 16.5008C3.93281 16.9354 4.36867 17.203 4.88219 17.4025C5.3793 17.5957 5.94711 17.7273 6.77867 17.7655C7.61203 17.8034 7.87813 17.8127 9.99977 17.8127C12.1217 17.8127 12.3872 17.8034 13.2205 17.7655C14.0522 17.7273 14.6205 17.5957 15.1177 17.4025C15.6313 17.203 16.0666 16.9354 16.5006 16.5008C16.9352 16.0666 17.2021 15.6307 17.4023 15.117C17.5944 14.6201 17.7262 14.0522 17.7653 13.2208C17.8027 12.3875 17.8125 12.1219 17.8125 10.0001C17.8125 7.87828 17.8027 7.61203 17.7653 6.77867C17.7262 5.94695 17.5944 5.3793 17.4023 4.88258C17.2021 4.36867 16.9352 3.93281 16.5006 3.49852C16.0661 3.06398 15.6315 2.79703 15.1172 2.59773C14.6191 2.40445 14.0511 2.27273 13.2194 2.23469C12.386 2.1968 12.1207 2.1875 9.99828 2.1875H10.0007ZM9.29984 3.59539C9.50789 3.59508 9.74 3.59539 10.0007 3.59539C12.0867 3.59539 12.3339 3.60289 13.1577 3.64031C13.9194 3.67516 14.3328 3.80242 14.6082 3.90938C14.9728 4.05094 15.2327 4.22023 15.506 4.49375C15.7795 4.76719 15.9487 5.02758 16.0906 5.39219C16.1976 5.66719 16.325 6.08063 16.3597 6.84234C16.3971 7.66594 16.4052 7.91328 16.4052 9.99828C16.4052 12.0833 16.3971 12.3307 16.3597 13.1542C16.3248 13.9159 16.1976 14.3294 16.0906 14.6045C15.9491 14.9691 15.7795 15.2287 15.506 15.502C15.2326 15.7754 14.973 15.9446 14.6082 16.0863C14.3331 16.1937 13.9194 16.3206 13.1577 16.3555C12.3341 16.3929 12.0867 16.401 10.0007 16.401C7.91461 16.401 7.66734 16.3929 6.84383 16.3555C6.08211 16.3203 5.66867 16.193 5.39305 16.0861C5.02852 15.9445 4.76805 15.7752 4.49461 15.5018C4.22117 15.2284 4.05195 14.9686 3.91 14.6038C3.80305 14.3287 3.67562 13.9153 3.64094 13.1536C3.60352 12.33 3.59602 12.0827 3.59602 9.99633C3.59602 7.91008 3.60352 7.66398 3.64094 6.84039C3.67578 6.07867 3.80305 5.66523 3.91 5.38984C4.05164 5.02523 4.22117 4.76484 4.49469 4.49141C4.76813 4.21797 5.02852 4.04867 5.39312 3.9068C5.66852 3.79938 6.08211 3.67242 6.84383 3.63742C7.56453 3.60484 7.84383 3.59508 9.29984 3.59344V3.59539ZM14.171 4.89258C13.6534 4.89258 13.2335 5.31211 13.2335 5.82977C13.2335 6.34734 13.6534 6.76727 14.171 6.76727C14.6886 6.76727 15.1085 6.34734 15.1085 5.82977C15.1085 5.31219 14.6886 4.89227 14.171 4.89227V4.89258ZM10.0007 5.98797C7.78508 5.98797 5.98867 7.78438 5.98867 10.0001C5.98867 12.2158 7.78508 14.0113 10.0007 14.0113C12.2164 14.0113 14.0122 12.2158 14.0122 10.0001C14.0122 7.78445 12.2163 5.98797 10.0005 5.98797H10.0007ZM10.0007 7.39586C11.4389 7.39586 12.6049 8.56172 12.6049 10.0001C12.6049 11.4383 11.4389 12.6043 10.0007 12.6043C8.56242 12.6043 7.39656 11.4383 7.39656 10.0001C7.39656 8.56172 8.56242 7.39586 10.0007 7.39586Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="paint0_radial_158_10"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(5.3125 21.5404) rotate(-90) scale(19.8215 18.4355)"
                        >
                          <stop stop-color="#FFDD55" />
                          <stop offset="0.1" stop-color="#FFDD55" />
                          <stop offset="0.5" stop-color="#FF543E" />
                          <stop offset="1" stop-color="#C837AB" />
                        </radialGradient>
                        <radialGradient
                          id="paint1_radial_158_10"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(-3.35008 1.4407) rotate(78.681) scale(8.86031 36.5225)"
                        >
                          <stop stop-color="#3771C8" />
                          <stop offset="0.128" stop-color="#3771C8" />
                          <stop
                            offset="1"
                            stop-color="#6600FF"
                            stop-opacity="0"
                          />
                        </radialGradient>
                        <clipPath id="clip0_158_10">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
};

export default AboutUs;
