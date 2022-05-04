import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


  export default function ListLivreur(props) {

  var [livreurs, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  

  var loadUsers = async () => {
    var result = await axios.get("https://fullstack-back-app.herokuapp.com/livreur/list");
    setUser(result.data.reverse());
    console.log(result);
  };
        

 
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
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <div className="navbar-brand-box">
                  <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                      <img src="assets/images/logo.svg" alt="" height={22} />
                    </span>
                    <span className="logo-lg">
                      <img src="assets/images/logo-dark.png" alt="" height={17} />
                    </span>
                  </a>
                  <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                      <img src="assets/images/logo-light.svg" alt="" height={22} />
                    </span>
                    <span className="logo-lg">
                      <img src="assets/images/logo-light.png" alt="" height={19} />
                    </span>
                  </a>
                </div>
                <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                  <i className="fa fa-fw fa-bars" />
                </button>
                {/* App Search*/}
                <form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="bx bx-search-alt" />
                  </div>
                </form>
              </div>
              <div className="d-flex">
                <div className="dropdown d-inline-block d-lg-none ms-2">
                  <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-magnify" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                    <form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown d-none d-lg-inline-block ms-1">
                  <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="fullscreen">
                    <i className="bx bx-fullscreen" />
                  </button>
                </div>
                <div className="dropdown d-inline-block">
                  <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bx-bell bx-tada" />
                    <span className="badge bg-danger rounded-pill">3</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="m-0" key="t-notifications"> Notifications </h6>
                        </div>
                        <div className="col-auto">
                          <a href="#!" className="small" key="t-view-all"> View All</a>
                        </div>
                      </div>
                    </div>
                    <div data-simplebar style={{maxHeight: '230px'}}>
                      <a href="javascript: void(0);" className="text-reset notification-item">
                        <div className="d-flex">
                          <div className="avatar-xs me-3">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                              <i className="bx bx-cart" />
                            </span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="javascript: void(0);" className="text-reset notification-item">
                        <div className="d-flex">
                          <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-grow-1">
                            <h6 className="mb-1">James Lemire</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="javascript: void(0);" className="text-reset notification-item">
                        <div className="d-flex">
                          <div className="avatar-xs me-3">
                            <span className="avatar-title bg-success rounded-circle font-size-16">
                              <i className="bx bx-badge-check" />
                            </span>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="javascript: void(0);" className="text-reset notification-item">
                        <div className="d-flex">
                          <img src="assets/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Salena Layfield</h6>
                            <div className="font-size-12 text-muted">
                              <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                              <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="p-2 border-top d-grid">
                      <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                        <i className="mdi mdi-arrow-right-circle me-1" /> <span key="t-view-more">View More..</span> 
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                    <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a className="dropdown-item" href="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></a>
                    <a className="dropdown-item" href="#"><i className="bx bx-wallet font-size-16 align-middle me-1" /> <span key="t-my-wallet">My Wallet</span></a>
                    <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></a>
                    <a className="dropdown-item" href="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" /> <span key="t-lock-screen">Lock screen</span></a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item text-danger" href="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></a>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                  <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                    <i className="bx bx-cog bx-spin" />
                  </button>
                </div>
              </div>
            </div>
          </header>
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
                            <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="avatar-md profile-user-wid mb-4">
                              <img src="assets/images/users/avatar-1.jpg" alt="" className="img-thumbnail rounded-circle" />
                            </div>
                            <h5 className="font-size-15 text-truncate">{livreurs.nom} {livreurs.penom}</h5>
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
                                <td>{livreurs.nom}</td>
                              </tr>
                              <tr>
                                <th scope="row">Mobile :</th>
                                <td> {livreurs.num}</td>
                              </tr>
                              <tr>
                                <th scope="row">E-mail :</th>
                                <td>{livreurs.email}</td>
                              </tr>
                              <tr>
                                <th scope="row">Location :</th>
                                <td>{livreurs.addr}{livreurs.region}</td>
                              </tr>
                              <tr>
                                <th scope="row">Type veicule :</th>
                                <td>{livreurs.type}</td>
                              </tr>
                               <tr>
                                <th scope="row">Model veicule:</th>
                                <td>{livreurs.modele}</td>
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