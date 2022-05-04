import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



 export default function Login(){
   
 
 return(
 
 <div>
        {/* Mirrored from themesbrand.com/skote-django/layouts/auth-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:51 GMT */}
        <meta charSet="utf-8" />
        <title>Login | Skote - Admin &amp; Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        {/* App favicon */}
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* Bootstrap Css */}
        <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
        {/* Icons Css */}
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        {/* App Css*/}
        <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />
        <div className="account-pages my-5 pt-sm-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card overflow-hidden">
                  <div className="bg-primary bg-soft">
                    <div className="row">
                      <div className="col-7">
                        <div className="text-primary p-4">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Sign in to continue to Skote.</p>
                        </div>
                      </div>
                      <div className="col-5 align-self-end">
                        <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0"> 
                    <div className="auth-logo">
                      <a href="index.html" className="auth-logo-light">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img src="assets/images/logo-light.svg" alt="" className="rounded-circle" height={34} />
                          </span>
                        </div>
                      </a>
                      <a href="index.html" className="auth-logo-dark">
                        <div className="avatar-md profile-user-wid mb-4">
                          <span className="avatar-title rounded-circle bg-light">
                            <img src="assets/images/logo.svg" alt="" className="rounded-circle" height={34} />
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="p-2">
                      <form className="form-horizontal" action="https://themesbrand.com/skote-django/layouts/index.html">
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">Username</label>
                          <input type="text" className="form-control" id="username" placeholder="Enter username" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <div className="input-group auth-pass-inputgroup">
                            <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon" />
                            <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline" /></button>
                          </div>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="remember-check" />
                          <label className="form-check-label" htmlFor="remember-check">
                            Remember me
                          </label>
                        </div>
                        <div className="mt-3 d-grid">
                        <Link to={`/Profilp`}>
                          <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                        </Link>
                        </div>
                        <div className="mt-4 text-center">
                          <h5 className="font-size-14 mb-3">Sign in with</h5>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="javascript::void()" className="social-list-item bg-primary text-white border-primary">
                                <i className="mdi mdi-facebook" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="javascript::void()" className="social-list-item bg-info text-white border-info">
                                <i className="mdi mdi-twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="javascript::void()" className="social-list-item bg-danger text-white border-danger">
                                <i className="mdi mdi-google" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4 text-center">
                          <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock me-1" /> Forgot your password?</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div>
                    <p>Don't have an account ? <a href="auth-register.html" className="fw-medium text-primary"> Signup now </a> </p>
                    <p>©  Skote. Crafted with <i className="mdi mdi-heart text-danger" /> by Themesbrand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end account-pages */}
        {/* JAVASCRIPT */}
        {/* App js */}
        {/* Mirrored from themesbrand.com/skote-django/layouts/auth-login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:51 GMT */}
      </div>
    );
  }
 