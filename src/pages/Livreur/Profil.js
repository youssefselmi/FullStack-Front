import React, { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter, Route, Link, useNavigate,NavLink,useParams} from "react-router-dom";

import Header from '../../pages/Header';

export default function Profil  (){
 


  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const history = useNavigate();


  const getdata = async () => {

      const res = await fetch(`https://fullstack-back-app.herokuapp.com/livreur/${id}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setUserdata(data)
          console.log("get data");
      }
  }

  useEffect(() => {
      getdata();
  }, [])


         

 
    return (
     
      <div>
        {/* Mirrored from themesbrand.com/skote-django/layouts/contacts-profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:49 GMT */}
        <meta charSet="utf-8" />
        <title>Profile | Skote - Admin &amp; Dashboard Template</title>
                                     
                  
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
        {/* <body data-layout="horizontal" data-topbar="dark"> */}
        {/* Begin page */}
        <div id="layout-wrapper">








<Header/>











         
          {/* ============================================================== */}
          {/* Start right Content here */}
          {/* ============================================================== */}
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0 font-size-18">Profile</h4>

                       

                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item active">Profile</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end page title */}
                <div className="row">
                  <div className="col-xl-4">
                    <div className="card overflow-hidden">
                      <div className="bg-primary bg-soft">
                        <div className="row">
                          <div className="col-7">
                            <div className="text-primary p-3">
                              <h5 className="text-primary">Welcome  !</h5>
                            </div>
                          </div>
                          <div className="col-5 align-self-end">
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="avatar-md profile-user-wid mb-4">
                              <img src={getuserdata.picture}  className="img-thumbnail rounded-circle" />
                            </div>
                            <h5 className="font-size-15 text-truncate">{getuserdata.nom} {getuserdata.penom}</h5>
                          </div>
                          <div className="col-sm-8">
                            <div className="pt-4">
                              <div className="row">
                                <div className="col-6">
                                  <h5 className="font-size-15">125</h5>
                                  <p className="text-muted mb-0">delivery</p>
                                </div>
                                <div className="col-6">
                                  <h5 className="font-size-15">$1245</h5>
                                  <p className="text-muted mb-0">Revenue</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end card */}
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Personal Information</h4>
                        <div className="table-responsive">
                          <table className="table table-nowrap mb-0">
                            <tbody>
                              <tr>
                                <th scope="row">Full Name :</th>
                                <td>{getuserdata.nom} {getuserdata.prenom}</td>
                              </tr>
                              <tr>
                                <th scope="row">age veicule:</th>
                                <td>{getuserdata.age}</td>
                              </tr>
                              <tr>
                                <th scope="row">Mobile :</th>
                                <td> {getuserdata.num}</td>
                              </tr>
                              <tr>
                                <th scope="row">E-mail :</th>
                                <td>{getuserdata.email}</td>
                              </tr>
                              <tr>
                                <th scope="row">Location :</th>
                                <td>{getuserdata.addr}{getuserdata.region}</td>
                              </tr>
                              <tr>
                                <th scope="row">Type veicule :</th>
                                <td>{getuserdata.type}</td>
                              </tr>
                               <tr>
                                <th scope="row">Model veicule:</th>
                                <td>{getuserdata.modele}</td>
                              </tr>
                             
                              <tr>
                                <th scope="row">Disponibilite :</th>
                                <td>{getuserdata.disponibilite}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* end card */}
                    {/* end card */}
                  </div>         
                  <div className="col-xl-8">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card mini-stats-wid">
                          <div className="card-body">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <p className="text-muted fw-medium mb-2">Completed delivery</p>
                                <h4 className="mb-0">125</h4>
                              </div>
                              <div className="flex-shrink-0 align-self-center">
                                <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                                  <span className="avatar-title">
                                    <i className="bx bx-check-circle font-size-24" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card mini-stats-wid">
                          <div className="card-body">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <p className="text-muted fw-medium mb-2">Total Revenue</p>
                                <h4 className="mb-0">$36,524</h4>
                              </div>
                              <div className="flex-shrink-0 align-self-center">
                                <div className="avatar-sm mini-stat-icon rounded-circle bg-primary">
                                  <span className="avatar-title">
                                    <i className="bx bx-package font-size-24" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Revenue</h4>
                        <div id="revenue-chart" className="apex-charts" dir="ltr" />
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-4">Delivery History</h4>
                        <div className="table-responsive">
                          <table className="table table-nowrap table-hover mb-0">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date Delivery</th>
                                <th scope="col">Route</th>
                                <th scope="col">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>2 Sep, 2019</td>
                                <td>Ariana to Charguia</td>
                                <td>20 min</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div> {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">
                    © Skote.
                  </div>
                  <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                      Design &amp; Develop by Themesbrand
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* end main content*/}
        </div>
        {/* END layout-wrapper */}
        {/* Right Sidebar */}
        <div className="right-bar">
          <div data-simplebar className="h-100">
            <div className="rightbar-title d-flex align-items-center px-3 py-4">
              <h5 className="m-0 me-2">Settings</h5>
              <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
                <i className="mdi mdi-close noti-icon" />
              </a>
            </div>
            {/* Settings */}
            <hr className="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>
            <div className="p-4">
              <div className="mb-2">
                <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images" />
              </div>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked />
                <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
              </div>
              <div className="mb-2">
                <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images" />
              </div>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" />
                <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
              </div>
              <div className="mb-2">
                <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images" />
              </div>
              <div className="form-check form-switch mb-3">
                <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" />
                <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
              </div>
              <div className="mb-2">
                <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
              </div>
              <div className="form-check form-switch mb-5">
                <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
                <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
              </div>
            </div>
          </div> {/* end slimscroll-menu*/}
        </div>
        {/* /Right-bar */}
        {/* Right bar overlay*/}
        <div className="rightbar-overlay" />
        {/* JAVASCRIPT */}
        {/* apexcharts */}
        {/* App js */}
        {/* Mirrored from themesbrand.com/skote-django/layouts/contacts-profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:50 GMT */}
      </div>
    );
    }