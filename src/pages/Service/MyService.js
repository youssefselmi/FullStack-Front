import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {toast} from "react-toastify";

import Header from '../../pages/Header';


  export default function Listservice(props) {
    
  
     
  var [services, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const onDeleteService = async (id) => {

    if(window.confirm("Are you sure to delete this service"))
    {

        const response = await axios.delete(`https://fullstack-back-app.herokuapp.com/service/delete/${id}`);
        if (response.status === 200)
        {
            toast.success(response.data);
            loadUsers();
        }
    }



}
  

  var loadUsers = async () => {
    var result = await axios.get("https://fullstack-back-app.herokuapp.com/service/list");
    setUser(result.data.reverse());
    console.log(result);
  };
        
      return (
        <div>
          {/* Mirrored from themesbrand.com/skote-django/layouts/ecommerce-add-product.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:08 GMT */}
          <meta charSet="utf-8" />
          <title>my services </title>
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
          <Header/>

            
            <div className="main-content">
              <div className="page-content">
                <div className="container-fluid">
                  {/* start page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">Services added by me</h4>
                       
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><a href="javascript: void(0);">Afar by Skolls</a></li>
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
                          <h4 className="card-title">Service</h4>
                        </div>
                      </div>
                      <div className="row">
                      {services && services.map((livreur,index)=>
                                (
                        <div className="col-xl-4 col-sm-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-4">
                                  <div className="avatar-md">
                                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                      <img src="assets/images/users/avatar-5.jpg"  alt="" className="rounded-circle avatar-md height=30" />
                                    </span>
                                  </div>
                                </div>
                              
        
                                <div className="flex-grow-1 overflow-hidden">
                              
                                  <p className="text-muted mb-4">{livreur.title}</p>
                                  
                                  <p className="text-muted mb-4">22 474 153</p>
                                  <p className="text-muted mb-4">{livreur.addedat}</p>
                                  <div className="avatar-group">
                                   
                                  
                                    </div>
                                </div>
                              </div>
       
                              <div>
                                <p> </p>
                                <div className="px-4 py-3 border-top">
                                  <p className="text-muted mb-4">{livreur.type}</p>
                                  <p className="text-muted mb-4">{livreur.description}</p>

                                  
                                <div className="add_btn">
              <Link to={`/updateservice/${livreur._id}`}>  <button className="btn btn-link btn-sm mx-2"></button></Link>
              <button className="btn btn-link btn-sm mx-2" onClick={() => onDeleteService(livreur._id)}></button>
              </div>
                                  
                                
                                </div>
                              </div>
                            </div>
                          </div> {/* container-fluid */}
                        </div>
                          ))}
                      </div>
                     
                    </div>
                    
                   
                    {/* /Right-bar */}
                    {/* Right bar overlay*/}
                    
                    
                  </div></div></div></div></div></div>
      );

    }

  