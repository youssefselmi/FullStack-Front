import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Menu from '../pages/menu';




const Acceuil = () => {

  


        return (
            
            <div>


                          <meta charSet="utf-8"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1"/>
                            <title>Edu School - Education Category Bootstrap Responsive Website Template - Home : W3Layouts</title>
                            <link href="//fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
                            <link rel="stylesheet" href="asset/assets/css/style-starter.css"/>
                          
                           {/* header */}
                          <header id="site-header" className="fixed-top">
                          <div className="container">
                          <nav className="navbar navbar-expand-lg navbar-light">
                          <img src="asset/assets/images/logo.png"  style={{ width: '10%', height: '25%' }}/>
                          


                          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarScroll">
                          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                          <li className="nav-item">
                          <Link to={`/listecomposant`}>

                            <a className="nav-link active" aria-current="page" href="index.html">Dashboard</a>
                            </Link>

                          </li>

                          <li className="nav-item">
                          <Link to={`/auth`}>

                            <a className="nav-link active" aria-current="page" href="index.html">Login</a>
                            </Link>

                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="courses.html">Items</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="contact.html">Broken Pieces</a>
                          </li>




                          <li className="nav-item">
                          <Link to={`/Confirmation`}>
                            <a className="nav-link" href="contact.html">Add Delivery Man</a>
                            </Link>

                          </li>


                        </ul> {/* search-right */}
                        <div className="header-search position-relative">
                        <div className="search-right mx-lg-2">
                        <a href="#search" className="btn search-btn p-0" title="search">
                        <i className="fas fa-search"></i></a> {/* search popup */}
                        <div id="search" className="pop-overlay">
                        <div className="popup">
                          <form action="#search" method="GET" className="search-box">
                            <input type="search" placeholder="Enter Keyword..." name="search" required="required" autoFocus=""/>
                            <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true"></span></button>
                          </form>
                        </div>
                        <a className="close" href="#close">×</a>
                      </div> {/* //search popup */}
                    </div>
                  </div> {/*//search-right*/}
                </div> {/* toggle switch for light and dark theme */}
                <div className="cont-ser-position">
                <nav className="navigation">
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox"/>
                      <div className="mode-container">
                        <i className="gg-sun"></i>
                        <i className="gg-moon"></i>
                      </div>
                    </label>
                  </div>
                </nav>
              </div> {/* //toggle switch for light and dark theme */}
            </nav>
          </div>
        </header> {/* //header */} {/* banner section */}




        <section id="home" className="w3l-banner py-5">
        <div className="banner-content">
          <div className="container py-4">
            <div className="row align-items-center pt-sm-5 pt-4">
              <div className="col-md-6">
                <h3 className="mb-lg-4 mb-3">Your Choice Deserve The<span className="d-block">Best Shopping</span>
                </h3>
                <p className="banner-sub">Register Now, And Join us</p>
                <div className="d-flex align-items-center buttons-banner">
                <Link to={`/register`}>

                  <a href="contact.html" className="btn btn-style mt-lg-5 mt-4">Register Now</a>
                  </Link>

                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section> {/* //banner section */} {/* home 4grids block */}
      <section className="services-w3l-block py-5" id="features">
        <div className="container py-md-5 py-4">
        <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{maxWidth: '500px'}}>
          <p className="text-uppercase">Best Products</p>
          <h3 className="title-style">Achieve Your Goals With Afar.tn</h3>
        </div>
        <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
        <div className="icon-box icon-box-clr-1">
          <div className="icon"><i className="fas fa-user-friends"></i></div>
          <Link to={`/affichage`}>

            <h4 className="title"><a href="#about">Items</a></h4>
            </Link>

            <p>Check our Items Here</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-md-0 mt-4">
        <div className="icon-box icon-box-clr-2">
          <div className="icon"><i className="fas fa-book-reader"></i></div>
          <Link to={`/afficher`}>

            <h4 className="title"><a href="#about">Broken Pieces</a></h4>
            </Link>

            <p>Check our Broken Pieces Here</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
          <div className="icon-box icon-box-clr-3">
            <div className="icon"><i className="fas fa-user-graduate"></i></div>
            <Link to={`/listService`}>

              <h4 className="title"><a href="#about">Services</a></h4>
              </Link>

              <p>Check our Services Here</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
            <div className="icon-box icon-box-clr-4">
              <div className="icon"><i className="fas fa-university"></i></div>
              <Link to={`/list`}>

                <h4 className="title"><a href="#about">Delivery</a></h4>
                </Link>

                <p>Check our Deliveries man Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script>
      </script>
      <script>
      </script>


  


</div>


                
        )
}


export default Acceuil;