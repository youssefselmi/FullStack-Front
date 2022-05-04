import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import "./list.css";
import Header from '../../pages/Header';

  export default function ListLivreur() {

  var [livreurs, setUser] = useState([]);
 const[pageNumber,setpageNumber]=useState(0)
 const livreurPerPage = 2
 const pageVisited=pageNumber*livreurPerPage
const displaylivreurs=livreurs
.slice( pageVisited,pageVisited+livreurPerPage)
.map((livreur)=>{
  return(
    <div className="row">
    {livreurs && livreurs.map((livreur,index)=>
              (
      <div className="col-xl-4 col-sm-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex">
              <div className="flex-shrink-0 me-4">
                <div className="avatar-md">
                  <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                    <img src={livreur.picture} alt="" className="rounded-circle avatar-md height=30" />
                  </span>
                </div>
              </div>
            

              <div className="flex-grow-1 overflow-hidden">
            
                <h5 className="text-truncate font-size-15"><a href="javascript: void(0);" className="text-dark">{livreur.nom}</a></h5>
            
                <p className="text-muted mb-4">{livreur.prenom}</p>
                <div className="avatar-group">
                 
                
                  </div>
              </div>
            </div>

            <div>
              <p> </p>
              <div className="px-4 py-3 border-top">
                <p className="text-muted mb-4">{livreur.addr}</p>
                <p className="text-muted mb-4">{livreur.region}</p>
                
                <div className="rating-star">
                  <span style={{cursor: 'default'}}><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'visible'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0%'}}><span /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'visible'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}><span /></div></div></span><input type="hidden" className="rating" data-filled="mdi mdi-star text-primary" data-empty="mdi mdi-star-outline text-muted" data-readonly defaultValue={3} /><span className="badge bg-info">3</span>
                </div>
              </div>
              <div className="px-4 py-3 border-top">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                  <Link to={`/updatelivreur/${livreur._id}`}>
                    <button type="button" className="btn btn-success btn-rounded waves-effect waves-light">update</button>
                    </Link>
                  </li>
                  <li className="list-inline-item me-3">
                  <Link to={`/email`}>
                    <button type="button" className="btn btn-danger btn-rounded waves-effect waves-light">Report</button>
                    </Link>
                  </li>
                  <li className="list-inline-item me-3">
                  <Link to={`/profil/${livreur._id}`}>
                    <button type="button" className="btn btn-info btn-rounded waves-effect waves-light">+info</button>
                    </Link>
                    </li>
             
                       
 
                </ul>
              </div>
            </div>
          </div>
        </div> {/* container-fluid */}
      </div>
        ))}
    </div>

  )

});
const pageCount = Math.ceil(livreurs.length / livreurPerPage);

const changePage = ({ selected }) => {
  setpageNumber(selected);
};

  useEffect(() => {
    loadUsers();
  }, []);

    
  var loadUsers = async () => {
    var result = await axios.get("http://localhost:3000/livreur/list");
    setUser(result.data.reverse());
    console.log(result);
  };

        
      return (
        <div>
          {/* Mirrored from themesbrand.com/skote-django/layouts/ecommerce-add-product.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:08 GMT */}
          <meta charSet="utf-8" />
          <title>Livreur </title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
          <meta content="Themesbrand" name="author" />
          {/* App favicon */}
          <link rel="shortcut icon" href="assets/images/favicon.ico" />
          {/* select2 css */}
          <link href="assets/libs/select2/css/select2.min.css" rel="stylesheet" type="text/css" />
          {/* dropzone csss */}
          <link href="assets/libs/dropzone/min/dropzone.min.css" rel="stylesheet" type="text/css" />
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

            <Header/>


             </header>



            {/* ========== Left Sidebar Start ========== */}
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
                        <h4 className="mb-sm-0 font-size-18">Livreur</h4>
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                            <Link to={`/demande`}>

                              <button className="btn btn-primary">Request Delivery</button>
                              </Link>

                              </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Livreur</h4>

                        </div>
                      </div>
                      <div className="row">
                        {displaylivreurs}
                        
                        <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                      />
                       
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
                    {/* select 2 plugin */}
                    {/* dropzone plugin */}
                    {/* init js */}
                    {/* App js */}
                    {/* Mirrored from themesbrand.com/skote-django/layouts/ecommerce-add-product.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:09 GMT */}
                  </div></div></div></div></div></div>
      );

    }

  