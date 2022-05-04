import React, {useContext, useEffect, useState} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./listecomposant.css";
import axios from "axios";
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'
// To include the default styles
import 'react-rangeslider/lib/index.css'
import Header from '../pages/Header';



import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

  

  



const Affichbroken = () => {

    const [data, setData] = useState([]);
    const [filterprix,setFilterPrix] = useState(0);

    useEffect(() => {
            getComposants(filterprix);
        }, [filterprix]
    );

    const handleFilter = (value)=>{
        setFilterPrix(value);

    }


    const getComposants = async (filterprix) => {
        const response = await axios.get("https://fullstack-back-app.herokuapp.com/composant/readcomposants");
        if (response.status === 200) {
            setData(response.data.filter(c=>c.Prix >= filterprix));
        }
    };

    console.log("data =>", data);


        return (
            
            <div>






                <div id="layout-wrapper">


                <Header/>

             

                    <div class="main-content">

                        <div class="page-content">
                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-12">
                                        <div
                                            class="page-title-box d-sm-flex align-items-center justify-content-between">
                                            <h4 class="mb-sm-0 font-size-18">Broken Pieces</h4>
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="card-title mb-4">Filter</h4>

                                        
                                                <div class="mt-4 pt-3">
                                                    <h5 class="font-size-14 mb-3">Price</h5>

                                                    <Slider
                                                    min={0}
                                                    max={1000}
        value={filterprix}
        orientation="horizontal"
        onChange={(value)=>handleFilter(value)}
      />



                               
                                                </div>

                                                <div class="mt-4 pt-3">
                                                    <h5 class="font-size-14 mb-3">Gategories</h5>
                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck1"/>
                                                        <label class="form-check-label" for="productdiscountCheck1">
                                                            Electronique
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck2"/>
                                                        <label class="form-check-label" for="productdiscountCheck2">
                                                            Immobilier
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck3" />
                                                        <label class="form-check-label" for="productdiscountCheck3">
                                                            Vehicules
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck4"/>
                                                        <label class="form-check-label" for="productdiscountCheck4">
                                                            Jardinage
                                                        </label>
                                                    </div>

                                                    <div class="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox"
                                                               id="productdiscountCheck5"/>
                                                        <label class="form-check-label" for="productdiscountCheck5">
                                                            Telephonique
                                                        </label>
                                                    </div>

                                             

                                                </div>

                                               
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-lg-9">

                                        <div class="row mb-3">
                                            <div class="col-xl-4 col-sm-6">
                                                <div class="mt-2">
                                                    <h5>BROKEN</h5>
                                                </div>
                                            </div>

                                            <div className="card">
                        <div className="card-body">

                        
                                    
                                  
                        <ul className="list-inline mb-0">
                        <li className="list-inline-item me-3">
                          < Link to={`/addComposant`}>
                   <button type="button" className="btn btn-outline-success btn-rounded waves-effect waves-light">+Add new Piece</button>
                    </Link></li>
                    <li className="list-inline-item me-3">
                    <Link to={`/addbesoin`}>
                                      <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect waves-light">what do you search</button>
                                      </Link>
                                      </li>
                                      </ul>
                        </div>
                      </div>
                                        </div>
                                        <div class="row">






                                            {data && data.map((item,index) => {
                                                return (


                                            <div class="col-xl-4 col-sm-6" >
                                                <div class="card table table-hover table-bordered" id="example" >
                                                    <div class="card-body">
                                                        <div class="product-img position-relative">
                                                            <div class="avatar-sm product-ribbon">
                                                        
                                                            </div>
                                                            <img src={item.Image} alt=""
                                                                 class="img-fluid mx-auto d-block"/>
                                                        </div>
                                                        <div class="mt-4 text-center">
                                                            <h5 class="mb-3 text-truncate"><a href="#/"
                                                                                              class="text-dark">{item.Name} </a>
                                                            </h5>

                                                            <p class="text-muted">
                                                                <i class="bx bxs-star text-warning"></i>
                                                                <i class="bx bxs-star text-warning"></i>
                                                                <i class="bx bxs-star text-warning"></i>
                                                                <i class="bx bxs-star text-warning"></i>
                                                                <i class="bx bxs-star text-warning"></i>
                                                            </p>
                                                            <h5 class="my-0">
                                                                <b>{item.Prix} TND</b></h5>
                                                                    <br/>
                                                            <Link to={`/viewcomposant/${item._id}`}>
                                                                <button className="btn btn-dark" >Details</button>
                                                            </Link>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                )
                                            })}


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                        <footer class="footer">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <script>document.write(new Date().getFullYear())</script>
                                        © Afar.tn.
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="text-sm-end d-none d-sm-block">
                                            Afar.tn
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>


                </div>

                <div class="right-bar">
                    <div data-simplebar class="h-100">
                        <div class="rightbar-title d-flex align-items-center px-3 py-4">

                            <h5 class="m-0 me-2">Settings</h5>

                            <a href="#/" class="right-bar-toggle ms-auto">
                                <i class="mdi mdi-close noti-icon"></i>
                            </a>
                        </div>


                        <hr class="mt-0"/>
                        <h6 class="text-center mb-0">Choose Layouts</h6>

                        <div class="p-4">
                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-1.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>

                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input theme-choice" type="checkbox" id="light-mode-switch"
                                       checked/>
                                <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                            </div>

                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-2.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"/>
                                <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                            </div>

                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-3.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"/>
                                <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                            </div>

                            <div class="mb-2">
                                <img src="assets/images/layouts/layout-4.jpg" class="img-thumbnail"
                                     alt="layout images"/>
                            </div>
                            <div class="form-check form-switch mb-5">
                                <input class="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch"/>
                                <label class="form-check-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
                            </div>


                        </div>

                    </div>
                </div>


                <div class="rightbar-overlay"></div>
                <script src="assets/libs/jquery/jquery.min.js"></script>
                <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/libs/metismenu/metisMenu.min.js"></script>
                <script src="assets/libs/simplebar/simplebar.min.js"></script>
                <script src="assets/libs/node-waves/waves.min.js"></script>
                <script src="assets/js/app.js"></script>


        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/apexcharts/apexcharts.min.js"></script>
        <script src="assets/js/pages/dashboard.init.js"></script>
        <script src="assets/js/app.js"></script>


                
            </div>
        )
}


export default Affichbroken;