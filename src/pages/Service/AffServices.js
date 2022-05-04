import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
import { Link ,useParams,useNavigate} from "react-router-dom";

import {toast} from "react-toastify";

import { adddata } from '../context/ContextProvider';
import Header from '../../pages/Header';



  export default function Listservice(props) {
    const { udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        CodeP: "",
        Email: "",
        SearchFor: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();



        const { CodeP,Email,SearchFor } = inpval;

   
        const res = await fetch("https://fullstack-back-app.herokuapp.com/need/addneed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CodeP,Email,SearchFor
            })
        });





        const data = await res.json();
        console.log(data);


        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            history("/listService")
            toast.success("your need is saved");
        }




    }











   
     
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

var [services, setUser] = useState([]);
const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);
const addSignal = async (id) => {
  if(window.confirm("Are you sure to signal this service"))
    {
 
      const res = await fetch(`https://fullstack-back-app.herokuapp.com/service/signal/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        } });
        const data = await res.json();
  if (res.status === 200)
        {
          setUserdata(data)
            toast.success(res.data);
            loadUsers();
        }}
 
};
  

  var loadUsers = async () => {
    var result = await axios.get("https://fullstack-back-app.herokuapp.com/service/list");
    setUser(result.data.reverse());
    console.log(result);
  };
        
      return (
        <div>
          {/* Mirrored from themesbrand.com/skote-django/layouts/ecommerce-add-product.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 15 Feb 2022 20:58:08 GMT */}
          <meta charSet="utf-8" />
          <title>Services </title>
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
          
          <div id="layout-wrapper">
           
           
           
          <Header/>

            
            <div className="main-content">
              <div className="page-content">
                <div className="container-fluid">
                  {/* start page title */}
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">Services</h4>
                        <div>
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item me-3">
                  <p>You wait for a service ?</p> </li> 
                  <li className="list-inline-item me-3"   >           
                  <select className="form-control " name="SearchFor" value={inpval.SearchFor} onChange={setdata} >
                    <option>Select</option>
                    <option value="Baby-sitting">Baby-sitting</option>
                    <option value="carpooling">carpooling</option>
                    <option value="shopping">shopping</option>
                    <option value="private lesson">private lesson</option>
                  </select></li>
                  <li className="list-inline-item me-3">
                  <input
                                      
                                      name="Email"
                                      type="text"
                                      className="form-control"
                                      placeholder="Email"
                                      value={inpval.Email} onChange={setdata}
                                     
                                    /></li>
                                    <li className="list-inline-item me-3">
                  <input
                                      
                                      name="CodeP"
                                      type="text"
                                      className="form-control"
                                      placeholder="Zip Code"
                                      value={inpval.CodeP} onChange={setdata}
                                     
                                    /></li>
                        <li className="list-inline-item me-3">
                        <Link to={`/listService`}> 
                        <button type="submit" onClick={addinpdata}
                                                                className="btn btn-primary">Submit
                                                        </button> </Link>
                          
                        </li>
                  </ul>
                  </div>
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">Afar by Skolls</li>
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

                        
                                    
                                  
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item me-3">
                          < Link to={`/ajoutservice`}>
                   <button type="button" className="btn btn-outline-success btn-rounded waves-effect waves-light">+Add new service</button>
                    </Link></li>
                    <li className="list-inline-item me-3">
                    <Link to={`/mail`}>
                                      <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect waves-light">send Report</button>
                                      </Link>
                                      </li>
                                      </ul>
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
                                  
                                  
                                   <h6 className="text-muted mb-4">22 474 153</h6>
                                  <p className="text-muted mb-4">{livreur.addedat}</p>
                                  <div className="avatar-group">
                                   
                                  
                                    </div>
                                </div>
                              </div>
       
                              <div>
                                <p> </p>
                                <div className="px-4 py-3 border-top">
                                  <h4 className="text-muted mb-4">{livreur.type}</h4>
                                  <p className="text-muted mb-4">{livreur.description}</p>
                                  <div className="rating-star">
                                    <span style={{cursor: 'default'}}><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'hidden'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="mdi mdi-star text-primary" /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'visible'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0%'}}><span /></div></div><div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}><div className="rating-symbol-background mdi mdi-star-outline text-muted" style={{visibility: 'visible'}} /><div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: '0px'}}><span /></div></div></span><input type="hidden" className="rating" data-filled="mdi mdi-star text-primary" data-empty="mdi mdi-star-outline text-muted" data-readonly defaultValue={3} /><span className="badge bg-info">3</span>
                                  </div>
                                </div>
                                <div className="px-4 py-3 border-top">
                                  <ul className="list-inline mb-0">
                                  
                                    
                                    <li className="list-inline-item me-3">
                                    <Link to={`/DetailServices/${livreur._id}`}>
                                      <button type="button" className="btn btn-outline-info btn-rounded waves-effect waves-light">more details</button>
                                      </Link>
                                      
                                      
                                </li>
                                <li className="list-inline-item me-3">
                                    <Link to={`/listservice`}>
                                    <button type="button" className="btn btn-outline-danger btn-rounded waves-effect waves-light" onClick={() => addSignal(livreur._id)}>signal</button>
                                      </Link>
                                      
                                      
                                </li>
                                   
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div> 
                        </div>
                          ))}
                      </div>
                     
                    </div>
                    
                        
                          
                          
                          
                          
                          
                        </div>
                      </div> 
                    </div>
                    
                  </div></div></div>
      );

    }

  